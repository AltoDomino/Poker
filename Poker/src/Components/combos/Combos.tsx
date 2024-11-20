import React, { useState } from "react";
import styles from "./Combos.module.scss";
import { ICards } from "../../stateTypes";
import { getRandomCard } from "../gameCards/getRandomCard/getRandomCard";

export const Combos = () => {
  const [info, setInfo]= useState("")
    const {
        tableCardOne,
        tableCardTwo,
        tableCardThree,
        tableCardFour,
        tableCardFive,
        PlayerFirstCard,
        PlayerSecondCard,
      } = getRandomCard();
      const tableCards = [
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
        const allCards = [...tableCards, firstP, secondP];
        const cardNumbers = allCards.map((card) => card.number);
        const cardSymbols = allCards.map((card) => card.symbol);
    
        const hasSameNumber = (count: number) =>
          cardNumbers.filter((num, index, arr) => arr.filter((x) => x === num).length === count).length >= count;
          
        const hasSameSymbol = (count: number) =>
          cardSymbols.filter((symbol, index, arr) => arr.filter((x) => x === symbol).length === count).length >= count;
    
        const isStraight = (numbers: number[]) =>numbers
        .sort((a, b) => a - b)
        .every((num, i, arr) => i === 0 || num - arr[i - 1] === 1);
    
        
        if (hasSameNumber(4)) {
          setInfo("FOUR OF A KIND");
        } else if (hasSameNumber(3) && hasSameNumber(2)) {
          setInfo("FULL HOUSE");
        } else if (hasSameSymbol(5)) {
          setInfo("FLUSH");
        } else if (isStraight(cardNumbers)) {
          setInfo("STRAIGHT");
        } else if (hasSameNumber(3)) {
          setInfo("THREE OF A KIND");
        } else if (hasSameNumber(2) && hasSameNumber(2)) {
          setInfo("TWO PAIR");
        } else if (hasSameNumber(2)) {
          setInfo("ONE PAIR");
        } else {
          setInfo("HIGH CARD");
        }
      };
      checkForMatches(tableCards, PlayerFirstCard, PlayerSecondCard);
      return <div>{info}</div>
};
