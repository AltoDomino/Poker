import { useEffect, useState } from "react";
import { getRandomCard } from "../Components/gameCards/getRandomCard/getRandomCard";
import { ICards, IPokerStore, ResultCoin } from "../stateTypes";
import { useStats } from "../store/useMemmoryStore";
import styles from "./tableCards.module.scss";
import { Combos } from "../Components/combos/Combos";

export const TableCards = ({ fullBet }: ResultCoin) => {
  const [communityCards, setCommunityCards] = useState<ICards[]>([]);
  const { cardsOnTable, showFirstCards, resetGame, resetCards }: IPokerStore =
    useStats() as IPokerStore;
  const {
    tableCardOne,
    tableCardTwo,
    tableCardThree,
    tableCardFour,
    tableCardFive,
  } = getRandomCard();

  let storeCards = communityCards;
  useEffect(() => {
    if (fullBet > 0) {
      if (cardsOnTable) {
        if (storeCards.length === 0) {
          setCommunityCards([tableCardOne, tableCardTwo, tableCardThree]);
        }
        if (fullBet === 12820) {
          setCommunityCards([
            tableCardOne,
            tableCardTwo,
            tableCardThree,
            tableCardFour,
            tableCardFive,
          ]);
        }
      } else if (storeCards.length === 3) {
        setCommunityCards((prev) => [...prev, tableCardFour]);
        showFirstCards();
      } else if (storeCards.length === 4) {
        setCommunityCards((prev) => [...prev, tableCardFive]);
        resetGame();
      }
      if (storeCards.length === 5) {
        resetCards();
      }
    }
  }, [cardsOnTable, storeCards.length, resetGame, resetCards]);

  return (
    <div className={styles.column}>
      <div className={styles.cardsTable}>
        {storeCards &&
          communityCards.map((card, index) => (
            <img key={index} src={card.rank} />
          ))}
      </div>
      <div>{storeCards.length === 5 && <Combos />}</div>
    </div>
  );
};
