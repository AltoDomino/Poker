import { IPlayer, IPokerStore } from "../../stateTypes";
import { getRandomCard } from "../../Components/gameCards/getRandomCard/getRandomCard";
import { useEffect, useState } from "react";
import styles from "./GamePage.module.scss";
import { PlayerName } from "../../Components/players/playerName/playerName";
import { useNavigate } from "react-router-dom";
import { CoinsCounter } from "../../Components/coins/coinsCounter/CoinsCounter";

export const GamePage = () => {
  const navigate = useNavigate();
  const [playerName, setNamePlayer] = useState("");

 const {
        PlayerFirstCard,
        PlayerSecondCard,
        ComputerFirstCard,
        ComputerSecondCard,
      } = getRandomCard();

  const handleNameSubmit = (name: string) => {
    setNamePlayer(name);
  };
  const handleBack = () => {
    navigate("/");
  };

  const playerOne: IPlayer = {
    name: playerName,
    hand: PlayerFirstCard
  };
  const Computer: IPlayer = {
    name: "Computer",
    hand: PlayerSecondCard
  };

  return (
    <div>
      <div className={styles.GamePageSetName}>
        {!playerName ? (
          <PlayerName onNameSubmit={handleNameSubmit}></PlayerName>
        ) : (
          <div className={styles.GamePageContainer}>
            <div className={styles.space}>
              <div className={styles.Computer}>
                <h2>{Computer.name}</h2>
                <img src={ComputerFirstCard.rank} />
                <img src={ComputerSecondCard.rank} />
              </div>
             <CoinsCounter ></CoinsCounter>
              <div className={styles.Player}>
                <h2>{playerOne.name}</h2>
                <div className={styles.cards}>
                  <img src={PlayerFirstCard.rank} />
                  <img src={PlayerSecondCard.rank} />
                </div>
                <button onClick={() => handleBack()}>POWRÓT DO MENU</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
