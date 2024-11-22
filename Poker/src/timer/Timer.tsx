// import { useEffect, useState, useMemo } from "react";
// import { IPokerStore } from "../stateTypes";
// import { useStats } from "../store/useMemmoryStore";
// import { CoinsCounter } from "../Components/coins/coinsCounter/CoinsCounter";
// import { ResultCoin } from "../stateTypes";
// import { getRandomCard } from "../Components/gameCards/getRandomCard/getRandomCard";

// export const Timer = ({
//   playerValue,
//   fullBet,
//   computerValue,
//   inputValue,
//   buttonCheck,
//   buttonPass,
//   buttonRaisebet,
// }: ResultCoin) => {
//   const {
//     playerTime,
//     computerTime,
//     changePlayer,
//     changeComputer,
//   }: IPokerStore = useStats() as IPokerStore;

//   const randomNumber = () => {
//     const min = Math.ceil(playerValue);
//     const max = Math.floor(fullBet);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

//   useEffect(() => {
//     let interval: number;
//     if (playerTime) {
//       interval = setInterval(() => {
//         interval + 1;
//       }, 1000);
//     }
//     if ((playerValue && playerTime) || (inputValue && playerTime)) {
//       changePlayer();
//     }
//     if (computerTime) {
//       interval = setInterval(() => {
//         interval + 1;
//       }, 1000);
//     }
//     if (computerValue && computerTime) {
//       changeComputer();
//     }
//     return () => clearInterval(interval);
//   }, [changePlayer, changeComputer, playerTime, computerTime]);

//   return (
//     <div>
//       <div>{computerValue} - computerValue</div>
//       <div>{fullBet} - fullBet</div>
//       <div>{playerValue} - playerValue</div>
//       <output>{inputValue} inputvalue</output>
//     </div>
//   );
// };


import React, { useState, useEffect } from 'react';

const PokerGame = () => {
  const [gameState, setGameState] = useState({
    playerCards: [],
    computerCards: [],
    playerScore: 0,
    computerScore: 0,
    gameOver: false,
    message: ''
  });



  const startNewGame = () => {
    const initialState = {
      playerCards: [],  // Wypełnij kartami gracza
      computerCards: [], // Wypełnij kartami komputera
      playerScore: 0,
      computerScore: 0,
      gameOver: false,
      message: '',
      playerTurn: true  // Zakładamy, że gracz zaczyna pierwszy
    };
    setGameState(initialState);
  };


  return (
    <div>
      <h1>Gra w Pokera</h1>
      <div>
        <button onClick={startNewGame}>Nowa Gra</button>
        <button onClick={() => playerAction('raise')}>Przebicie</button>
        <button onClick={() => playerAction('fold')}>Spasowanie</button>
      </div>
      <div>
        {/* Wyświetlanie kart gracza i komputera */}
      </div>
      <div>
        {gameState.message}
      </div>
    </div>
  );
};

export default PokerGame;
