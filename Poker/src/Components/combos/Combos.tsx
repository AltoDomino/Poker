import { useEffect, useState } from "react";
import styles from "./Combos.module.scss";
import { ICards, IPokerStore } from "../../stateTypes";
import { getRandomCard } from "../gameCards/getRandomCard/getRandomCard";
import { useStats } from "../../store/useMemmoryStore";

export const Combos = () => {
  const [infoPlayer, setInfoPlayer] = useState("");
  const [infoComputer, setInfoComputer] = useState("");
  const [result, setResult] = useState("");
  const { wonDeck }: IPokerStore = useStats() as IPokerStore;
  const {
    tableCardOne,
    tableCardTwo,
    tableCardThree,
    tableCardFour,
    tableCardFive,
    PlayerFirstCard,
    PlayerSecondCard,
    ComputerFirstCard,
    ComputerSecondCard,
  } = getRandomCard();

  const tableCard = [
    tableCardOne,
    tableCardTwo,
    tableCardThree,
    tableCardFour,
    tableCardFive,
  ];

  useEffect(() => {
    if (!wonDeck) {
      const checkForMatches = (
        tableCards: ICards[],
        firstP: ICards,
        secondP: ICards,
        FirstC: ICards,
        SecondC: ICards
      ): void => {
        const allCardsPlayer = [...tableCards, firstP, secondP];
        const cardNumbersPlayer = allCardsPlayer.map((card) => card.number);
        const cardSymbolsPlayer = allCardsPlayer.map((card) => card.symbol);

        const allCardsComputer = [...tableCards, FirstC, SecondC];
        const cardNumbersComputer = allCardsComputer.map((card) => card.number);
        const cardSymbolsComputer = allCardsComputer.map((card) => card.symbol);

        const hasSameNumber = (count: number) =>
          cardNumbersPlayer.filter(
            (num, index, arr) => arr.filter((x) => x === num).length === count
          ).length >= count;

        const hasSameSymbol = (count: number) =>
          cardSymbolsPlayer.filter(
            (symbol, index, arr) =>
              arr.filter((x) => x === symbol).length === count
          ).length >= count;

        const hasSameNumberC = (count: number) =>
          cardNumbersComputer.filter(
            (num, index, arr) => arr.filter((x) => x === num).length === count
          ).length >= count;

        const hasSameSymbolC = (count: number) =>
          cardSymbolsComputer.filter(
            (symbol, index, arr) =>
              arr.filter((x) => x === symbol).length === count
          ).length >= count;

        const isStraight = (numbers: number[]) =>
          numbers
            .sort((a, b) => a - b)
            .every((num, i, arr) => i === 0 || num - arr[i - 1] === 1);

        if (hasSameNumber(4)) {
          setInfoPlayer("FOUR OF A KIND");
        } else if (hasSameNumber(3) && hasSameNumber(2)) {
          setInfoPlayer("FULL HOUSE");
        } else if (hasSameSymbol(5)) {
          setInfoPlayer("FLUSH");
        } else if (isStraight(cardNumbersPlayer)) {
          setInfoPlayer("STRAIGHT");
        } else if (hasSameNumber(3)) {
          setInfoPlayer("THREE OF A KIND");
        } else if (hasSameNumber(2) && hasSameNumber(2)) {
          setInfoPlayer("TWO PAIR");
        } else if (hasSameNumber(2)) {
          setInfoPlayer("ONE PAIR");
        } else {
          setInfoPlayer("HIGH CARD");
        }

        if (hasSameNumberC(4)) {
          setInfoComputer("FOUR OF A KIND");
        } else if (hasSameNumberC(3) && hasSameNumberC(2)) {
          setInfoComputer("FULL HOUSE");
        } else if (hasSameSymbolC(5)) {
          setInfoComputer("FLUSH");
        } else if (isStraight(cardNumbersComputer)) {
          setInfoComputer("STRAIGHT");
        } else if (hasSameNumberC(3)) {
          setInfoComputer("THREE OF A KIND");
        } else if (hasSameNumberC(2) && hasSameNumberC(2)) {
          setInfoComputer("TWO PAIR");
        } else if (hasSameNumberC(2)) {
          setInfoComputer("ONE PAIR");
        } else {
          setInfoComputer("HIGH CARD");
        }
      };

      checkForMatches(
        tableCard,
        PlayerFirstCard,
        PlayerSecondCard,
        ComputerFirstCard,
        ComputerSecondCard
      );
    }

    const combosNames: string[] = [
      "HIGH CARD",
      "ONE PAIR",
      "TWO PAIR",
      "THREE OF A KIND",
      "STRAIGHT",
      "FLUSH",
      "FULL HOUSE",
      "FOUR OF A KIND",
    ];
    for (let i = 0; i < combosNames.length; i++) {
      const infoP = infoPlayer[i];
      const infoC = infoComputer[i];
      if (wonDeck) {
        infoP < infoC
          ? setResult("YOU LOSE")
          : setResult(`YOU WON WITH ${infoPlayer}`);
      }
    }

    console.log("wondDeck combo", wonDeck);
    console.log(wonDeck, infoPlayer, infoComputer);
  }, [infoPlayer, infoComputer]);

  return (
    <div>
      <div className={styles.result}>{result} </div>
    </div>
  );
};
