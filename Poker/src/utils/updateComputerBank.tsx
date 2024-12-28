export const updateComputerBank = (
  playerValue: number,
  comp: number,
  compValue: number,
  currentValue: number,
  setComputerBank: React.Dispatch<React.SetStateAction<number>>,
  setcomp: React.Dispatch<React.SetStateAction<number>>,
  setPlayerValue: React.Dispatch<React.SetStateAction<number>>,
  setInputValue: React.Dispatch<React.SetStateAction<number>>
) => {
  setComputerBank((prev) => {
    console.log(compValue, "comp:", comp, "playervalue", playerValue);
    if (comp === 0) {
      if (currentValue === playerValue) {
        console.log("update1");
        setcomp(0);
        setPlayerValue(0);
        return prev - playerValue;
      } else if (currentValue > playerValue) {
        console.log("update2");
        return prev - currentValue;
      } else if (currentValue < playerValue) {
        console.log("update3");
        setcomp(0);
        setPlayerValue(0);
        return prev - playerValue;
      } else {
        return prev;
      }
    }
    if (comp !== 0) {
      if (comp === playerValue) {
        console.log("update4");
        setcomp(0);
        setPlayerValue(0);
        return prev;
      } else if (currentValue > playerValue) {
        console.log("update5");
        return prev - currentValue;
      } else if (comp < playerValue) {
        console.log("update6");
        setcomp(0);
        setPlayerValue(0);
        return prev - playerValue;
      } else {
        console.log("update7");
        return prev;
      }
    } else {
      return prev;
    }
  });
  return compValue === playerValue || currentValue < playerValue
    ? setInputValue(0)
    : setInputValue(compValue);
};
