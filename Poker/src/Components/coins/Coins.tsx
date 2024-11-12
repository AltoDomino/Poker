import { IChip } from "../../stateTypes";
import styles from "GameCards.module.scss";

export const Coins = () => {
  
  const white: string[] = [];
  const red: string[] = [];
  const blue: string[] = [];
  const green: string[] = [];
  const dark: string[] = [];
  const coins: IChip[] = [];


  const addCoins = (denomination: number, color: string) => {
    for (let i = 0; i < 50; i++) {
      coins.push({
        denomination,
        color,
        quantity: i,
      });
    }

    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      if (coin.denomination === 1) {
        white.push(coin.color);
      } else if (coin.denomination === 5) {
        red.push(coin.color);
      } else if (coin.denomination === 10) {
        blue.push(coin.color);
      } else if (coin.denomination === 25) {
        green.push(coin.color);
      } else if (coin.denomination === 100) {
        dark.push(coin.color);
      }
    }
  };
  addCoins(1, "white_1.png");
  addCoins(5, "red_5.png");
  addCoins(10, "blue_10.png");
  addCoins(25, "green_25.png");
  addCoins(100, "black_100.png");

  return {
    white,
    red,
    blue,
    green,
    dark,
  };
};
