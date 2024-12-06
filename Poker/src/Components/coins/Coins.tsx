import { IChip } from "../../stateTypes";
import styles from "GameCards.module.scss";

export const Coins = () => {
  
  const white: IChip[] = [];
  const red: IChip[] = [];
  const blue: IChip[] = [];
  const green: IChip[] = [];
  const dark: IChip[] = [];
  const coins: IChip[] = [];
  const  allDenomination: number[] =[]

  const addCoins = (denomination: number, color: string) => {
    for (let i = 0; i < 10; i++) {
      coins.push({
        denomination,
        color,
        quantity: i,
      });
    }

    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      if (coin.denomination === 1) {
        white.push({
          color,
          denomination,
        });
        allDenomination.push(denomination)
      } else if (coin.denomination === 5) {
        red.push({
          color,
          denomination
        });
        allDenomination.push(denomination)
      } else if (coin.denomination === 10) {
        blue.push({
          color,
          denomination
        });
        allDenomination.push(denomination)
      } else if (coin.denomination === 25) {
        green.push({
          color,
          denomination
        });
        allDenomination.push(denomination)
      } else if (coin.denomination === 100) {
        dark.push({
          color,
          denomination
        });
        allDenomination.push(denomination)
      }
    }
  };
  addCoins(1, "white_1.png");
  addCoins(5, "red_5.png");
  addCoins(10, "blue_10.png");
  addCoins(25, "green_25.png");
  addCoins(100, "black_100.png");

  const Colors = [white[1].color, red[1].color, blue[1].color, green[1].color, dark[1].color];
  const Numbers =[white[1].denomination, red[1].denomination, blue[1].denomination, green[1].denomination, dark[1].denomination];
  const allColors = [...Colors];
  const allNumbers = [...Numbers]

  
  return {
  allColors,
  allNumbers,
  allDenomination
  };
};
