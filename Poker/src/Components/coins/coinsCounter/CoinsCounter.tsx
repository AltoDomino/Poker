import React, { useState, useEffect } from "react";
import { Coins } from "../Coins";
import { Timer } from "../../../timer/Timer";
import { ComprareCards } from "../../turn/ComprareCards";
import { InitialState, IPokerStore, ResultCoin } from "../../../stateTypes";
import { useStats } from "../../../store/useMemmoryStore";

export const CoinsCounter = () => {
  const [playerValue, setPlayerValue] = useState(0);
  const [fullBet, setFullBet] = useState(0);
  const { playerTime, computerTime, changeComputer }: IPokerStore =
    useStats() as IPokerStore;

  const { white, red, blue, green, dark, coins } = Coins();
  const coinsColors = [white[1], red[1], blue[1], green[1], dark[1]];
  const allcoins = [...coins];
  const coinsNumber: number[] = [];
  const newCoins: number[] = [];

  allcoins.forEach((coin) => {
    coinsNumber.push(coin.denomination);
  });

  const w = coinsNumber[1];
  const r = coinsNumber[51];
  const b = coinsNumber[101];
  const g = coinsNumber[151];
  const d = coinsNumber[201];
  newCoins.push(w, r, b, g, d);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setPlayerValue(newValue);
  };

  const handleCoinClick = (index: number) => {
    if (!index) {
      if (playerTime) {
        setPlayerValue(index);
      }
    } else {
      setPlayerValue(playerValue + index);
    }
  };
  const HandleCheck = () => {
    if (playerValue === 0 || playerValue !== 0) {
      if (playerTime) {
        setFullBet(playerValue);
      }
    }
  };
  const HandleRaiseBet = () => {
    if (playerValue !== 0) {
      if (playerTime) {
        setFullBet(playerValue);
      }
    } else {
      alert("RAISE YOUR BET");
    }
  };
  const HandlePass = () => {
    changeComputer();
  };

  return (
    <div>
      <input
        type="range"
        max="500"
        value={playerValue}
        onChange={handleInputValue}
      />
      <output>{playerValue} postawione</output>
      <div>{} Computer value</div>
      <div>{fullBet} fullbet</div>
      <button onClick={HandlePass}>PASS</button>
      <button onClick={HandleCheck}>CHECK</button>
      <button onClick={HandleRaiseBet}>RAISE YOUR BET</button>
      {coinsColors.map((coin, index) => (
        <button key={index} onClick={() => handleCoinClick(newCoins[index])}>
          <img src={coin} />
        </button>
      ))}
    </div>
  );
};
