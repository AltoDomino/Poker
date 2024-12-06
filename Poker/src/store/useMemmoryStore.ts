import { create } from 'zustand'
import { ICards, InitialState} from '../stateTypes'
import { devtools } from 'zustand/middleware'

export const useStore :InitialState = {
    playerCards: [],
    computerCards: [],
    playerValue:0,
    computerValue:0,
    fullBet:0,
    communityCards: [],
    wonDeck: false,
    playerTime: true,
    cardsOnTable: false,
}

export const useStats = create(
    devtools((set) =>{
        return{
            playerTime: useStore.playerTime,
            cardsOnTable: useStore.cardsOnTable,
            wonDeck: useStore.wonDeck,
            communityCards:useStore.communityCards,
            computerCards: useStore.computerCards,
            playerCards: useStore.playerCards,
            resetGame: () => set(useStore),
            resetCards:() => set({wonDeck:true}),
            showFirstCards: () => set((state: { cardsOnTable:boolean }) => ({ cardsOnTable: !state.cardsOnTable })),
            changePlayer: () => set((state: { playerTime:boolean }) => ({ playerTime: !state.playerTime })),
            addCommunityCard: (cards: ICards[]) => set(
                {communityCards:cards}),
            setPlayerCards: (cards: ICards[]) => set(
                { playerCards: cards }),
            setComputerCards: (cards: ICards[]) => set(
                { computerCard: cards}),
        }
    })
)
