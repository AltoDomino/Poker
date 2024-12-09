import React, { useState, useEffect } from "react";
import { Coins } from "../Coins";
import { IPokerStore } from "../../../stateTypes";
import { useStats } from "../../../store/useMemmoryStore";
import styles from "./CoinsCounter.module.scss";
import { TableCards } from "../../../tableCards/TableCards";

export const CoinsCounter = () => {
  const { allDenomination, allColors } = Coins();

  const calculateFullBank = () => {
    return allDenomination.reduce((acc: number, num: number) => acc + num, 0);
  };

  const ComputerBank = calculateFullBank();
  const PlayerFullBank = calculateFullBank()
 const [computerBank, setComputerBank] = useState(ComputerBank);
  const [playerValue, setPlayerValue] = useState(0);
  const [fullBet, setFullBet] = useState(0);
  const [computerValue, setComputerValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [playerBank, setPlayerBank] = useState(PlayerFullBank);
 
  const {
    playerTime,
    wonDeck,
    changePlayer,
    showFirstCards,
    resetGame,
  }: IPokerStore = useStats() as IPokerStore;

  const values = [1, 5, 10, 25, 100];

  const updateComputerBank = (amount: number) => {
    setComputerBank((prev) => Math.max(0, prev - amount));
  };
  
  const newGame = () => {
    if (playerTime || !playerTime) {
      if (computerBank === 12820 || playerBank === 12820) {
        setComputerBank(6410);
        setPlayerBank(6410);
      } else {
        setPlayerValue(0);
        setComputerValue(0);
        setFullBet(0);
        setComputerBank(6410);
        setPlayerBank(6410);
      }
    }
    !playerTime ? changePlayer() : !playerTime;
  };
  useEffect(() => {
    if (!playerTime) {
      const maxBet = Math.min(inputValue, computerBank); 
      const randomValue = Math.floor(Math.random() * (maxBet + 1)); 
      setComputerValue(randomValue)
      computerBet(randomValue);
    }
  }, [playerTime, inputValue, computerBank]);

  const computerBet = (randomValue: number) => {
    setComputerValue((prev) => prev + randomValue);
  console.log(computerValue)
    if (randomValue < playerValue && playerValue !== 6410) {
      alert("Computer Check");
      setComputerValue(playerValue);
      setFullBet(playerValue + playerValue);
      updateComputerBank(playerValue); // Odejmowanie wartości od computerBank
      console.log(computerValue, playerValue);
      showFirstCards();
    } else if (playerValue === 0) {
      console.log(computerValue);
      setComputerValue(randomValue);
      if (computerValue === 0 && playerValue === 0) {
        setFullBet(playerValue + playerValue);
      }
    } else if (randomValue > playerValue) {
      alert("Computer raise the bet!");
      console.log(computerValue, playerValue);
      setComputerValue(computerValue + randomValue + playerValue);
      updateComputerBank(randomValue + playerValue); // Aktualizacja banku komputera
    } else if (randomValue < playerValue && playerValue === 6410) {
      alert("ALL IN");
      setFullBet(12820);
      setInputValue(0);
      showFirstCards();
      setComputerValue(6410);
      setComputerBank(0);
    } else if (computerValue === playerValue) {
      alert("Computer Check");
      setComputerValue(playerValue);
      setFullBet(computerValue + playerValue);
      updateComputerBank(playerValue); // Aktualizacja dla równych wartości
      console.log(computerValue);
      showFirstCards();
    }else if(computerValue === 0 ){
    setComputerBank(randomValue)
    } else {
      alert("Computer Pass");
      newGame();
    }
    updateComputerBank(randomValue);
    alert("Twoja kolej!");
    setInputValue(computerValue + randomValue);
    changePlayer();
  };
  
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue < computerValue) {
      alert(`Minimalna wartość zakładu to ${computerValue}`);
      setInputValue(computerValue); 
    } else if (newValue <= playerBank) {
      setInputValue(newValue);
    } else {
      alert("Nie masz wystarczających środków w banku!");
    }
  };

  const handleCoinClick = (value: number) => {
    const newValue = inputValue + value;
    if (newValue < computerValue) {
      alert(`Minimalna wartość zakładu to ${computerValue}`);
    } else if (newValue <= playerBank) {
      setInputValue(newValue);
      setPlayerBank((prev) => prev - value);
    } else {
      alert("Nie masz wystarczających środków w banku!");
    }
  };

  const playerAction = (action: string) => {
    if (!playerTime) return;
    if (action === "raise" && inputValue === 0) {
      setComputerValue(0);
    }
    if (action === "raise" && inputValue !== 0) {
      setPlayerValue(playerValue + inputValue);
      setPlayerBank((prev) => prev - inputValue);
    }
      else if(action === "check" && inputValue !== 0){
      setPlayerValue(inputValue)
    } else if (action === "check" && inputValue === 0) {
      if(playerValue === 0 ){
        setPlayerValue(0)
      }
      if (computerValue > playerValue) {
        setPlayerValue(computerValue);
        setPlayerBank(playerBank - computerValue);
      }
    } else if (action === "pass") {
      setComputerBank(fullBet);
      newGame();
    }
    setInputValue(0);
    changePlayer();
    alert("Computer's turn!");
  };

  return (
    <div>
      <div className={styles.Bets}>
        <div>{computerBank} Computer bank</div>
        <div>{computerValue} Computer Value</div>
      </div>
      <div className={styles.tableCards}>
        {fullBet !== 0 && <TableCards fullBet={fullBet}></TableCards>}
      </div>

      <div className={styles.Bets}>{fullBet}</div>
      <div className={styles.Bets}>
        <div>{playerValue} Player Value</div>
        <output className={styles.output}>{inputValue} Bet Value</output>
        <input
          className={styles.input}
          type="range"
          max={playerBank}
          value={inputValue}
          onChange={handleInputValue}
        />
        <div>{playerBank} PLAYERBANK</div>
      </div>
      <button onClick={() => playerAction("raise")}>Raise Bet</button>
      <button onClick={() => playerAction("check")}>Check</button>
      <button onClick={() => playerAction("pass")}>Pass</button>
      <button onClick={() => newGame()}>RESET GAME</button>
      {allColors.map((coin, index) => (
        <button
          className={styles.Coins}
          key={index}
          onClick={() => handleCoinClick(values[index])}
        >
          <img src={coin} />
        </button>
      ))}
    </div>
  );
};
