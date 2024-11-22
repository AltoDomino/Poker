export interface ICards {
    symbol: "hearts" | "diamonds" | "clubs" | "spades";
    rank: string 
    number: number
  }
   export interface IPlayer {
    name: string;
    hand: ICards;
  }
   export interface IChip {
    denomination: number;
    color: string
    quantity: number;
  }
  export interface IAction {
    type: 'bet' | 'check' | 'fold' | 'raise';
    amount?: number;
    playerId: string;
  }
  
  export interface IPokerStore  {
    communityCards:[]
    computerTime: boolean
    playerCards?:ICards[]
    computerCards?:ICards[]
    playerTime: boolean,
    cardsOnTable: ICards[]
    wonDeck : boolean,
    gameOver:boolean
    setPot: (amount: number) => void;
    resetCards:() => void;
    setCurrentBet: (amount: number) => void;
    changePlayer: () => void;
    changeComputer: () => void;
    addCommunityCard: (card: ICards) => void;
    resetGame: () => void
    changeTime:(second:number)=> void, 
    setPlayerCards: (cards: ICards[]) => void,
    setComputerCards:(cards: ICards[]) => void,
  }
  
  export interface IChipStore {
    totalChips: IChip[];
    playerChips: IPlayerChips[];
    addChipsToPlayer: (playerId: string, chips: IChip[]) => void;
    removeChipsFromPlayer: (playerId: string, chips: IChip[]) => void;
    addChipsToGame: (chips: IChip[]) => void;
    resetChips: () => void;
  }
  export interface InitialState{
    playerTime: boolean,
    cardsOnTable: ICards[]
    wonDeck : boolean,
    gameOver: false,
    playerCards?:ICards[]
    computerCards?:ICards[]
    communityCards:[]
  }
  export interface ResultCoin {
    playerValue:number
    fullBet:number
    inputValue:number,
    computerValue:number
    buttonCheck :(number)=> number | undefined
    buttonRaisebet: (number) => number
    buttonPass: ()=> void
  }