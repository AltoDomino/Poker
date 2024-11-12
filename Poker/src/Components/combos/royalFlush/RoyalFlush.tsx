
import { ICards } from "../../../stateTypes";
import { getRandomCard } from "../../gameCards/getRandomCard/getRandomCard";
export const StraightFlush = () => {
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

  const getStraightFlush = (
    firstP: ICards,
    secondP: ICards,
    tableCards: ICards[]
  ) => {
      for (let i = 0; i < tableCards.length; i++) {
        if (firstP.number && 
          secondP.number &&
          tableCards[i].number === 47) {
        }if(firstP.symbol && 
          secondP.symbol &&
          tableCards[i].symbol === 
           "hearts" ||
           "diamonds" || 
           "clubs" || 
           "spades"){
            console.log("YOU HAVE STRAIGHT FLUSH")
           }
      }
  };
  getStraightFlush( PlayerFirstCard, PlayerSecondCard, tableCard);
};
