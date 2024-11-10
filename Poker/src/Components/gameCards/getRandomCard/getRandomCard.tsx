import { GameCards } from "../GameCards";
import { ICards } from "../../../stateTypes";

export const getRandomCard = () => {
  const { diamonds, clubs, spades, hearts } = GameCards();
  const Cards = [...diamonds, ...clubs, ...spades, ...hearts];

  const firstRandomCard = (cards: ICards[]) => {
    const firstCard = Math.floor(Math.random() * cards.length);
    return cards[firstCard];
  };
  const createFirstRandomCard = firstRandomCard(Cards);

  const SecondRandomCard = (cards: ICards[]) => {
    const firstCard = Math.floor(Math.random() * cards.length);
    return cards[firstCard];
  };
  const createSecondRandomCard = SecondRandomCard(Cards);

  const twoCards = {
    createFirstRandomCard,
    createSecondRandomCard,
  };
  return { twoCards };
};
