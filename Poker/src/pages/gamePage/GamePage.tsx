import { IPlayer } from '../../stateTypes'; 
import { getRandomCard } from '../../Components/gameCards/getRandomCard/getRandomCard';
import { Coins } from '../../Components/coins/Coins';
import { useState } from 'react';
import styles from "./GamePage.module.scss"
import { PlayerName } from '../../Components/players/playerName/playerName';
import { useNavigate } from 'react-router-dom';

export const GamePage = () => { 
  const navigate = useNavigate()
    const { 
      white,
      red,
      blue,
      green,
      dark} 
      = Coins()

      const coins  = [white[1],red[1],blue[1],green[1],dark[1]]

    const {   
      PlayerFirstCard,
      PlayerSecondCard,
      ComputerFirstCard,
      ComputerSecondCard
    } 
      = getRandomCard()
    const [playerName,setNamePlayer] = useState("")


     const handleNameSubmit =(name:string) =>{
        setNamePlayer(name)
    }  

    const playerOne: IPlayer = { 
        name: playerName,
        hand: PlayerFirstCard,
        chips: coins
    }
    const Computer:IPlayer = {
        name: "Computer",
        hand: ComputerFirstCard,
        chips: coins
    }
    
  return (
    <div>
      <div className={styles.GamePageSetName}>
        {!playerName ? (
          <PlayerName onNameSubmit={handleNameSubmit}></PlayerName>)
          :
          <div className={styles.GamePageContainer}>
            <div className={styles.Player}>
              <h2>{playerOne.name}</h2>
              <img src={PlayerSecondCard.rank}/>
              <img src={PlayerFirstCard.rank}/>
              {coins.map((coin , i)=>(
                <img src={coin} key={i}/>
              ))}
            </div>
            <div className={styles.Computer}>
            <h2>{Computer.name}</h2>
            <img src={ComputerSecondCard.rank}/>
            <img src={ComputerFirstCard.rank}/>
            {coins.map((coin, i)=>(
                <img src={coin} key={i}/>
              ))}
            </div>
            <button onClick={() => navigate("/")}>POWRÓT DO MENU</button>
          </div>}
      </div>
    </div>
  )
}
