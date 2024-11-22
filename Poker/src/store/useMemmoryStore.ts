import { create } from 'zustand'
import { ICards, InitialState} from '../stateTypes'
import { devtools } from 'zustand/middleware'

export const useStore :InitialState = {
    playerCards: [],
    computerCards: [],
    gameOver: false,
    wonDeck: true,
    playerTime: true,
    cardsOnTable: [],
    communityCards: []
}

export const useStats = create(
    devtools((set) =>{
        return{
            communityCards:useStore.communityCards,
            playerTime: useStore.playerTime,
            cardsOnTable: useStore.cardsOnTable,
            wonDeck: useStore.wonDeck,
            computerCards: useStore.computerCards,
            playerCards: useStore.playerCards,
            resetGame: () => set(useStore),
            resetCards:() => set({wonDeck:false}),
            changePlayer:() => set({playerTime: false,computerTime:true}),
            changeComputer:() => set({playerTime: true,computerTime: false}),
            changeTime:(time:number) => set(()=>(time)),
            addCommunityCard: (card: ICards) => set({cardsTable:card}),
            setCurrentBet: (amount: number) =>amount,
            setPlayerCards: (cards: ICards[]) => set(
                { playerCard: cards }),
            setComputerCards: (cards: ICards[]) => set(
                { computerCards: cards})
        }
    })
)
