
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
    ComputerFirstCard,
    ComputerSecondCard
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
    tableCards: ICards[],
    FirstC:ICards,
    SecondC:ICards

  ) => {
      for (let i = 0; i < tableCards.length; i++) {
        if(firstP.number || secondP.number > FirstC.number || SecondC.number){
            console.log("HIGH CARD OF PLAYER WON")
        }if(firstP.number || secondP.number < FirstC.number || SecondC.number){
            console.log("HIGH CARD OF COMPUTER WON") 
        }
      }
  };
  getStraightFlush( 
    PlayerFirstCard,
     PlayerSecondCard,
      tableCard,
      ComputerFirstCard,
      ComputerSecondCard,
    )
};
