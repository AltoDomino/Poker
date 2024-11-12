import { ICards } from "../../../stateTypes";
import { getRandomCard } from "../../gameCards/getRandomCard/getRandomCard";
export const twoPair = () => {

  const {
    tableCardOne,
    tableCardTwo,
    tableCardThree,
    tableCardFour,
    tableCardFive,
    PlayerFirstCard,
    PlayerSecondCard,
  } = getRandomCard();

  const tableCard = [
    tableCardOne,
    tableCardTwo,
    tableCardThree,
    tableCardFour,
    tableCardFive,
  ];

  const getPair = (
    firstP: ICards,
    secondP: ICards,
    tableCards: ICards[]
  ) => {
      for (let t = 0; t < tableCards.length; t++) {
        if (secondP.rank === firstP.rank) {
          console.log("YOU HAVE PAIR");
        } else if (firstP.number === tableCards[t].number) {
          console.log("YOU HAVE PAIR");
        } else if (secondP.number === tableCards[t].number) {
          console.log("YOU HAVE PAIR");
        }
    }
  };
  getPair(PlayerFirstCard, PlayerSecondCard, tableCard);
};
