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
  const PlayerFullBank = calculateFullBank();

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const updateComputerBank = (value: number) => {
    setComputerBank((prev) => {
      if (computerValue >= 6410) {
        return Math.max(prev + value, 0);
      }
      return prev + value;
    });
  };

  const [playerValue, setPlayerValue] = useState(0);
  const [fullBet, setFullBet] = useState(0);
  const [computerValue, setComputerValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [playerBank, setPlayerBank] = useState(PlayerFullBank);
  const [computerBank, setComputerBank] = useState(ComputerBank);
  const { playerTime, wonDeck, changePlayer, showFirstCards, resetGame }: IPokerStore = useStats() as IPokerStore;

  const values = [1, 5, 10, 25, 100];

  const newGame = () => {
    if(playerTime){
       if (computerBank === 12820 || playerBank === 12820) {
      setComputerBank(6410);
      setPlayerBank(6410);
    } else {
      setPlayerValue(0);
      setComputerValue(0);
      setFullBet(0);
      setComputerBank(6410)
      setPlayerBank(6410)
    }
    }
  
  };

  useEffect(() => {
    if (!playerTime) {
      const randomValue = randomNumber(0, computerBank);
      computerBet(randomValue)
    }
  }, [playerTime]);

const computerBet =(randomValue:number) =>{
   setComputerValue((prev) => prev + randomValue);
      console.log(playerValue, "player");
      console.log(computerValue, "computer");
      console.log(randomValue, "random");
      if (randomValue < playerValue && playerValue !== 6410) {
        setComputerValue(playerValue);
        setFullBet(playerValue + computerValue);
        showFirstCards();
        console.log(playerValue, "1player");
        console.log(computerValue, "1computer");
        console.log(randomValue, "1random");
        console.log(inputValue,"inputvalue")
        console.log("pierwszy warunek");
      } else if (randomValue > playerValue) {
        console.log(playerValue, "2player");
        console.log(computerValue, "2computer");
        console.log(randomValue, "2random");
        alert("julka ma małego!");
        console.log("drugi warunek");
      } else if (randomValue < playerValue && playerValue === 6410) {
        setFullBet(12820);
        showFirstCards();
        setComputerValue(6410);
        setComputerBank(randomValue);
        console.log(computerValue, "3computer");
        console.log("trzeci warunek");
      } else {
        setFullBet(12820);
        setComputerValue(0);
        showFirstCards();
        console.log("czwarty warunek");
      }
      console.log(randomValue, "poza computer");
      console.log(fullBet, "poza fullbet");
      updateComputerBank(-randomValue);
      alert("Twoja kolej!");
      changePlayer();
}
  
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setInputValue(newValue);
  };

  const handleCoinClick = (value: number) => {
    if (inputValue === 6410) {
      alert("Max Bet");
    } else {
      setInputValue((prev) => prev + value);
      setPlayerBank((prev) => prev - value);
    }
  };

  const playerAction = (action: string) => {
    if (!playerTime) return;
    let newPlayerValue = playerValue;
    let newPlayerBank = playerBank;

    if (action === "raise" && inputValue !== 0) {
      newPlayerValue = playerValue + inputValue;
      newPlayerBank -= inputValue;
      setPlayerValue(newPlayerValue);
      setPlayerBank(newPlayerBank);
    } else if (action === "check" && inputValue === 0) {
      if (computerValue > playerValue) {
        newPlayerValue += computerValue;
        newPlayerBank -= computerValue;
        setFullBet(newPlayerValue);
        setPlayerValue(newPlayerValue);
        setPlayerBank(newPlayerBank);
      }
    } else if (action === "pass") {
      newGame();
      setComputerBank(fullBet);
    }

    setInputValue(0);
    changePlayer();
    alert("Computer's turn!");
  };

  console.log(inputValue, "input outside");
  console.log(playerValue, "playerValue");

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
        <button className={styles.Coins} key={index} onClick={() => handleCoinClick(values[index])}>
          <img src={coin} />
        </button>
      ))}
    </div>
  );
};
