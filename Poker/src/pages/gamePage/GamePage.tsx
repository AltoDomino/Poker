import { getRandomCard } from "../../Components/gameCards/getRandomCard/getRandomCard";
import { useState } from "react";
import styles from "./GamePage.module.scss";
import { PlayerName } from "../playerName/Login";
import { CoinsCounter } from "../../Components/coins/coinsCounter/CoinsCounter";
import { IPokerStore } from "../../stateTypes";
import { useStats } from "../../store/useMemmoryStore";

export const GamePage = () => {
  const [playerName, setNamePlayer] = useState("");
  const { wonDeck }: IPokerStore = useStats() as IPokerStore;

  const {
    PlayerFirstCard,
    PlayerSecondCard,
    ComputerFirstCard,
    ComputerSecondCard,
  } = getRandomCard();

  const handleNameSubmit = (name: string) => {
    setNamePlayer(name);
  };

  return (
    <div>
      <div className={styles.GamePageSetName}>
        {!playerName ? (
          <PlayerName onNameSubmit={handleNameSubmit}></PlayerName>
        ) : (
          <div className={styles.GamePageContainer}>
            <div className={styles.Computer}>
              <h2>Computer</h2>
              <div>
                {!wonDeck ? (
                  <>
                    <img src="./karta.png" />
                    <img src="./karta.png" />
                  </>
                ) : (
                  <>
                    <img src={ComputerFirstCard.rank} />
                    <img src={ComputerSecondCard.rank} />
                  </>
                )}
              </div>
            </div>
            <div className={styles.Player}>
              <div className={styles.cards}>
                <div className={styles.playerCards}>
                  <h2>{playerName}</h2>
                  <img src={PlayerFirstCard.rank} />
                  <img src={PlayerSecondCard.rank} />
                </div>
                <CoinsCounter />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
