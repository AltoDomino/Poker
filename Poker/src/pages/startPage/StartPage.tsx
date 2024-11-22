import styles from "./StartPage.module.scss";
import { Buttons } from "../../Components/buttons/buttons";
import { useNavigate } from "react-router-dom";
import { useStats } from "../../store/useMemmoryStore";
import { ICards, InitialState, IPokerStore } from "../../stateTypes";
import { getRandomCard } from "../../Components/gameCards/getRandomCard/getRandomCard";
import { useEffect } from "react";

export const StartPage = () => {
  const { wonDeck, setPlayerCards, setComputerCards}: IPokerStore =
    useStats() as IPokerStore;
  const navigate = useNavigate();

  const {
    PlayerFirstCard,
    PlayerSecondCard,
    ComputerFirstCard,
    ComputerSecondCard,
  } = getRandomCard();

  useEffect(() => {
    if (wonDeck) {
      setPlayerCards([PlayerFirstCard, PlayerSecondCard])
      setComputerCards([ComputerFirstCard, ComputerSecondCard]);
    }
  }, [wonDeck, setPlayerCards, setComputerCards]);

  const handleChange = () => {
    if(wonDeck ){  
       navigate("/play");
    }
  };

  return (
    <div className={styles.StartPageContainer}>
      <Buttons onClick={handleChange}>PLAY</Buttons>
      <Buttons onClick={() => navigate("/results")}>
        Check your Coins balance
      </Buttons>
    </div>
  );
};
