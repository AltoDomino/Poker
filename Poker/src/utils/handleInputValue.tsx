import { ChangeEvent } from "react";

export const handleInputValue = (
  initialPlayerBank: number,
  comp: number,
  playerValue: number,
  playerBank: number,
  setInputValue: React.Dispatch<React.SetStateAction<number>>,
  setPlayerBank: React.Dispatch<React.SetStateAction<number>>
) => {
  return (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);

    if (newValue < comp && playerValue !== comp) {
      alert(`MIN BET IS ${comp}`);
    } else if (newValue <= playerBank) {
      setInputValue(newValue);
      setPlayerBank(initialPlayerBank - newValue);
    } else {
      alert("NOT ENOUGH COINS!");
    }
  };
};
