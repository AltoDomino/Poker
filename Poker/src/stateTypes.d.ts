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
    quantity?: number;
  }
  export interface IAction {
    type: 'bet' | 'check' | 'fold' | 'raise';
    amount?: number;
    playerId: string;
  }
  
  export interface IPokerStore  {
    communityCards:ICards[]
    computerTime: boolean
    playerCards?:ICards[]
    computerCards?:ICards[]
    playerTime: boolean,
    cardsOnTable: boolean
    wonDeck : boolean,
    playerValue:number,
    computerValue:number,
    fullBet:number,
    setComputerValue:(computerValueRef:number) => void
    resetCards:() => void;
    showFirstCards: () =>void;
    changePlayer: () => void;
    addCommunityCard: (card: ICards) => void;
    resetGame: () => void
    changeTime:(second:number)=> void, 
    setPlayerCards: (cards: ICards[]) => void,
    setComputerCards:(cards: ICards[]) => void,
    showAllCards:(cards:ICards[]) => void
  }
  

  export interface InitialState{
    communityCards: ICards[],
    playerTime: boolean,
    cardsOnTable: boolean,
    wonDeck : boolean,
    playerCards?:ICards[]
    computerCards?:ICards[]
    playerValue:number
    computerValue:number
    fullBet:number
  }
  export interface ResultCoin {
    fullBet:number
  }