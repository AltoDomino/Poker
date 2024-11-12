export interface ICards {
    symbol: "hearts" | "diamonds" | "clubs" | "spades";
    rank: string 
    number: number
  }
   export interface IPlayer {
    name: string;
    hand: ICards;
    chips :string[]
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
  
  export interface IPokerStore extends IGameState {
    revealedCard: number,
    gameTime: string,
    startPlayerTime: boolean,
    stopPlayerTime:boolean,
    cardsOnTable: number,
    cardOnHand: number,
    setPot: (amount: number) => void;
    resetGame: () => void;
    setCurrentBet: (amount: number) => void;
    setCurrentPlayer: (playerId: string) => void;
    setRound: (round: IGameState['round']) => void;
    addCommunityCard: (card: ICard) => void;
    resetGame: () => void
  }
  
 

  export interface IChipStore {
    totalChips: IChip[];
    playerChips: IPlayerChips[];
    addChipsToPlayer: (playerId: string, chips: IChip[]) => void;
    removeChipsFromPlayer: (playerId: string, chips: IChip[]) => void;
    addChipsToGame: (chips: IChip[]) => void;
    resetChips: () => void;
  }
  export interface initialState{
    revealedCard: number,
    gameTime: string,
    startPlayerTime: boolean,
    stopPlayerTime:boolean,
    cardsOnTable: number
    cardOnHand: number
    wonDeck : boolean
  }
