import { IPlayer } from '../../stateTypes'; 
import { getRandomCard } from '../../Components/gameCards/getRandomCard/getRandomCard';
import { Coins } from '../../Components/coins/Coins';
import { useState } from 'react';
import styles from "./GamePage.module.scss"
import { PlayerName } from '../../Components/players/playerName/playerName';

export const GamePage = () => { 
    const {allCoins} = Coins()
    const {twoCards} = getRandomCard()
    const [playerName,setNamePlayer] = useState("")


     const handleNameSubmit =(name:string) =>{
        setNamePlayer(name)
    }  

    const playerOne: IPlayer = { 
        name: playerName,
        hand: twoCards.createFirstRandomCard,
        chips: allCoins.coins
    }
    const Computer:IPlayer = {
        name: "Computer",
        hand: twoCards.createSecondRandomCard,
        chips: allCoins.coins
    }
    
  return (
    <div>
      <div className={styles.GamePageSetName}>
        {!playerName ? (
          <PlayerName onNameSubmit={handleNameSubmit}></PlayerName>)
          :
          <div className={styles.GamePageContainer}>
            <div>
              <h2>{playerOne.name}</h2>
              <img
              src={playerOne.hand.rank}
              />
            </div>
            <div>
            <h2>{Computer.name}</h2>
            <img
            src={Computer.hand.rank}
            ></img>
            </div>
          </div>}
      </div>
    </div>
  )
}
