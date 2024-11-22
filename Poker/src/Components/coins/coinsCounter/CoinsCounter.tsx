import React, { useState, useEffect } from "react";
import { Coins } from "../Coins";
import { InitialState, IPokerStore } from "../../../stateTypes";
import { useStats } from "../../../store/useMemmoryStore";
import { useStore } from "zustand";


export const CoinsCounter: React.FC = () => {
  const [playerValue, setPlayerValue] = useState(0);
  const [fullBet, setFullBet] = useState(0);
  const [computerValue, setComputerValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const {
    gameOver,
     playerTime,
     wonDeck, 
     playerCards,
     computerCards,
     changePlayer,
     resetGame,
     changeComputer}: IPokerStore = useStats() as IPokerStore;

  useEffect(() => {
    if (!gameOver) {
      if (playerCards!.length === 0 && computerCards!.length === 0) {
        resetGame();
      } else {
        if (playerTime) {
        let Interval = 0
         setInterval(() => {
          Interval++
         }, 1000);
         if(Interval===10){
          changePlayer();
         }
        }
      }
    }
  }, [playerTime]);
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
    setInputValue(newValue);
  };
  const handleCoinClick = (index: number) => {
    if (playerTime) {
      setPlayerValue(playerValue + index);
    }
  };
  const playerAction = (action:string) => {
    if (wonDeck) return
    if (action === 'raise') {
      setPlayerValue(inputValue)

    } else if (action === 'fold') {
      changeComputer()
    }
  };

  const computerAction = () => {
    if(!playerTime){
      const randomAction = Math.random() > 0.5 ? 'raise' : 'fold';
    if (randomAction === 'raise') {
      setComputerValue(20)
          } else {
    changeComputer()
    }
    }
  
  };
  computerAction()

  return (
    <div>
      <input
        type="range"
        max="500"
        onChange={handleInputValue}
      />
      <Timer
        playerValue={playerValue}
        computerValue={computerValue}
        fullBet={fullBet}
        inputValue={inputValue}
      />
        <button onClick={() => playerAction('raise')}>Przebicie</button>
        <button onClick={() => playerAction('fold')}>Spasowanie</button>
      {coinsColors.map((coin, index) => (
        <button key={index} onClick={() => handleCoinClick(newCoins[index])}>
          <img src={coin} alt={`coin-${index}`} />
        </button>
      ))}
    </div>
  );
};
