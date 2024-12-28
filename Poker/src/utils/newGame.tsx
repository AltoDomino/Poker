export const newGame = (
  playerTime: boolean,
  computerBank: number,
  playerBank: number,
  setComputerBank: React.Dispatch<React.SetStateAction<number>>,
  setPlayerBank: React.Dispatch<React.SetStateAction<number>>,
  setPlayerValue: React.Dispatch<React.SetStateAction<number>>,
  setInitialPlayerBank: React.Dispatch<React.SetStateAction<number>>,
  setcomp: React.Dispatch<React.SetStateAction<number>>,
  setFullBet: React.Dispatch<React.SetStateAction<number>>,
  changePlayer: () => void,
resetCards:() => void
) => {
  if (playerTime || !playerTime) {
    if (computerBank === 12820 || playerBank === 12820) {
      setComputerBank(6410);
      setPlayerBank(6410);
    } else {
      setPlayerValue(0);
      setInitialPlayerBank(6410);
      setcomp(0);
      setFullBet(0);
      setComputerBank(6410);
      setPlayerBank(6410);
      resetCards()
    }
  }
  !playerTime ? changePlayer() : !playerTime;
};
