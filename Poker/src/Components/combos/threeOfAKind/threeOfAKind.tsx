import { ICards } from "../../../stateTypes";
import { getRandomCard } from "../../gameCards/getRandomCard/getRandomCard";
export const ThreeOfAKind = () => {
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

  const checkForMatches = (
    tableCards: ICards[],
    firstP: ICards,
    secondP: ICards
  ): void => {
    const firstMatch = tableCards.some((card) => card.number === firstP.number);
    const secondMatch = tableCards.some((card) => card.number === secondP.number);

    if (firstMatch && secondMatch) {
      console.log("YOU HAVE TWO PAIR");
    } else if (firstMatch) {
      console.log("YOU HAVE A PAIR WITH FIRST CARD");
    } else if (secondMatch) {
      console.log("YOU HAVE A PAIR WITH SECOND CARD");
    } else {
      console.log("NO PAIR");
    }
  };
  checkForMatches(tableCard, PlayerFirstCard, PlayerSecondCard);
};
