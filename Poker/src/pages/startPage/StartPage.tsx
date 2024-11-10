import React from "react";
import styles from "./StartPage.module.scss";
import { Buttons } from "../../Components/buttons/buttons";
import { useNavigate } from "react-router-dom";
import { Combos } from "../../Components/combos/Combos";
import { StartCards } from "../../utiils/StartCards";
import { IPokerStore } from "../../stateTypes";
import { useStats } from "../../store/useMemmoryStore";
import { getRandomCard } from "../../Components/gameCards/getRandomCard/getRandomCard";
import { Coins } from "../../Components/coins/Coins";
import { Rounds } from "../../Components/rounds/rounds";

export const StartPage = () => {
  const navigate = useNavigate();
const twoCards = getRandomCard()
  const keys = Rounds();
    console.log(twoCards)

  const handleChange = () => {
    navigate("/play");
  };

  // const {changeStart} :IPokerStore = useStats()

  return (
    <div className={styles.StartPageContainer}>
      <Buttons onClick={handleChange}>PLAY</Buttons>
      <Buttons onClick={() => navigate("/results")}>
        Check your Coins balance
      </Buttons>
    </div>
  );
};
