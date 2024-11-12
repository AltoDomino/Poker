import { GameCards } from "../GameCards";
import { ICards } from "../../../stateTypes";

export const getRandomCard = () => {
  const { diamonds, clubs, spades, hearts } = GameCards();
  const Cards = [...diamonds, ...clubs, ...spades, ...hearts];

  const drawRandomCard = (cards: ICards[]): ICards => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
  };

  const PlayerFirstCard = drawRandomCard(Cards);
  const PlayerSecondCard = drawRandomCard(Cards);
  const tableCardOne = drawRandomCard(Cards);
  const tableCardTwo = drawRandomCard(Cards);
  const tableCardThree = drawRandomCard(Cards);
  const tableCardFour = drawRandomCard(Cards);
  const tableCardFive = drawRandomCard(Cards);
  const ComputerFirstCard = drawRandomCard(Cards);
  const ComputerSecondCard = drawRandomCard(Cards);

  return {    
    tableCardOne,
    tableCardTwo,
    tableCardThree,
    tableCardFour,
    tableCardFive,
    PlayerFirstCard,
    PlayerSecondCard, 
    ComputerFirstCard,
    ComputerSecondCard,
    
  };
};
