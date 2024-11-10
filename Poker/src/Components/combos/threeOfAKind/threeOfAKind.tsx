import React from "react";
import { getRandomCard } from "../../gameCards/getRandomCard/getRandomCard";
import { ICards } from "../../../stateTypes";

export const threeOfAKind = () => {
  const { domCard }: ICards[] = getRandomCard();
};
