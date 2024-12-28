import React, { useState, useEffect, useRef } from "react";
import { Coins } from "../Coins";
import { IPokerStore } from "../../../stateTypes";
import { useStats } from "../../../store/useMemmoryStore";
import styles from "./CoinsCounter.module.scss";
import { TableCards } from "../../../tableCards/TableCards";
import { newGame } from "../../../utils/newGame";
import { updateComputerBank } from "../../../utils/updateComputerBank";
import { handleInputValue } from "../../../utils/handleInputValue";
import { useNavigate } from "react-router-dom";

export const CoinsCounter = () => {
  const navigate = useNavigate();
  const { allDenomination, allColors } = Coins();

  const calculateFullBank = () => {
    return allDenomination.reduce((acc: number, num: number) => acc + num, 0);
  };

  const computerValueRef = useRef<number>(0);
  const ComputerBank = calculateFullBank();
  const PlayerFullBank = calculateFullBank();
  const [computerBank, setComputerBank] = useState<number>(ComputerBank);
  const [playerValue, setPlayerValue] = useState<number>(0);
  const [fullBet, setFullBet] = useState<number>(0);
  const [inputValue, setInputValue] = useState<number>(0);
  const [playerBank, setPlayerBank] = useState<number>(PlayerFullBank);
  const [initialPlayerBank, setInitialPlayerBank] =
    useState<number>(PlayerFullBank);
  const [comp, setcomp] = useState<number>(0);

  const { playerTime, changePlayer, showFirstCards,resetCards }: IPokerStore =
    useStats() as IPokerStore;

  const values = [1, 5, 10, 25, 100];

  const firstBet = 500;
  const maxBet = Math.min(inputValue, computerBank);

  const setRandomBet = () => {
    if (comp < 500) {
      return Math.floor(Math.random() * (firstBet + 1));
    } else {
      return Math.floor(Math.random() * (maxBet + 1));
    }
  };

  useEffect(() => {
    if (!playerTime) {
      computerValueRef.current = setRandomBet();
      computerBet();
    }
  }, [playerTime, inputValue, computerBank]);
  const computerBet = () => {
    console.log("LOOOOOOOOOOOOOOL:", comp);
    if (comp === 0) {
      if (inputValue < computerValueRef.current) {
        console.log("1");
        alert("Computer Raise Bet");
        setcomp(computerValueRef.current);
      } else if (inputValue > computerValueRef.current) {
        alert("Computer Check");
        console.log("2");
        setcomp(inputValue);
        setFullBet(inputValue + inputValue);
        showFirstCards();
      }
    } else if (comp > 0) {
      if (inputValue === comp) {
        console.log("3");
        alert("Computer Raise Bet");
        setcomp((prev) => prev + computerValueRef.current);
      } else if (inputValue > computerValueRef.current) {
        console.log("4");
        alert("Computer Check");
        setcomp(inputValue);
        console.log(playerValue, comp, "CHECK");
        setFullBet(inputValue + comp);
        showFirstCards();
      } else if (inputValue < computerValueRef.current) {
        console.log("5");
        alert("Computer Raise Bet");
        setcomp((prev) => prev + computerValueRef.current);
      } else if (inputValue === 6410) {
        console.log("6");
        alert("Computer Check");
        setcomp(inputValue);
        setFullBet(12820);
        showFirstCards();
      } else {
        alert("Computer Pass");
        newGame(
          playerTime,
          computerBank,
          playerBank,
          setComputerBank,
          setPlayerBank,
          setPlayerValue,
          setInitialPlayerBank,
          setcomp,
          setFullBet,
          changePlayer,
          resetCards
        );
      }
    }
    const compValue = comp + computerValueRef.current;
    updateComputerBank(
      inputValue,
      comp,
      compValue,
      computerValueRef.current,
      setComputerBank,
      setcomp,
      setPlayerValue,
      setInputValue
    );
    alert("Twoja kolej!");

    changePlayer();
  };

  const handleCoinClick = (value: number) => {
    const newValue = inputValue + value;
    if (newValue < computerValueRef.current) {
      alert(`MIN BET IS ${computerValueRef.current}`);
    } else if (newValue <= playerBank) {
      setInputValue(newValue);
      setPlayerBank((prev) => prev - value);
    } else {
      alert("NOT ENOUGH COINS!");
    }
  };

  const playerAction = (action: string) => {
    if (!playerTime) return;
    if (action === "raise" && inputValue === 0) {
      alert("Bet First");
      return;
    } else if (action === "raise" && inputValue !== 0) {
      setPlayerValue(inputValue);
      console.log("player value po apdejcie:", playerValue, inputValue);
    } else if (action === "check" && inputValue !== 0) {
      setPlayerValue(comp);
    } else if (action === "check" && inputValue === 0) {
      if (playerValue === 0) {
        setInputValue(0);
      }
      if (computerValueRef.current > playerValue) {
        setPlayerValue(computerValueRef.current);
        setPlayerBank(playerBank - computerValueRef.current);
      }
    } else if (action === "pass") {
      setComputerBank(fullBet);
      setPlayerValue(0);
      setcomp(0);
    }
    setPlayerBank((prev) => {
      if (inputValue === comp) {
        console.log("ok");
        return prev - comp;
      } else return prev;
    });
    console.log("input", inputValue);
    changePlayer();
    alert("Computer's turn!");
  };

  return (
    <div className={styles.CoinsCounterContainer}>
      <div className={styles.nextTo}>
        <div className={styles.ComputerBets}>
          <div className={styles.Values}>{computerBank} </div>
          <div className={styles.Values}>{comp}</div>
          <div className={styles.Values}>{fullBet}</div>
          <div className={styles.Values}>{playerValue}</div>
          <div className={styles.Values}>{playerBank} </div>
        </div>
        <div className={styles.endGame}>
          {fullBet !== 0 && (
            <>
              <TableCards fullBet={fullBet} />
              <button
                className={styles.newGame}
                onClick={() =>
                  newGame(
                    playerTime,
                    computerBank,
                    playerBank,
                    setComputerBank,
                    setPlayerBank,
                    setPlayerValue,
                    setInitialPlayerBank,
                    setcomp,
                    setFullBet,
                    changePlayer,
                    resetCards
                  )
                }
              >
                RESET GAME
              </button>
            </>
          )}
        </div>
      </div>
      <div className={styles.Bets}>
        <div className={styles.inputs}>
          <output className={styles.output}>{inputValue} Bet Value</output>
          <input
            className={styles.input}
            type="range"
            max={playerBank}
            value={inputValue}
            onChange={handleInputValue(
              initialPlayerBank,
              comp,
              playerValue,
              playerBank,
              setInputValue,
              setPlayerBank
            )}
          />
        </div>
        <div className={styles.CoinsButtons}>
          {allColors.map((coin, index) => (
            <button
              className={styles.Coins}
              key={index}
              onClick={() => handleCoinClick(values[index])}
            >
              <img src={coin} />
            </button>
          ))}
          <button onClick={() => navigate("/")}>GO BACK TO MENU</button>
          <button onClick={() => playerAction("raise")}>Raise Bet</button>
          <button onClick={() => playerAction("check")}>Check</button>
          <button onClick={() => playerAction("pass")}>Pass</button>
        </div>
      </div>
    </div>
  );
};
