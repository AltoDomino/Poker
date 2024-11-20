import { create } from 'zustand'
import { ICards, InitialState} from '../stateTypes'
import { devtools } from 'zustand/middleware'


export const useStore :InitialState = {
    playerTime: true,
    computerTime: false,
    cardsOnTable: 0,
    wonDeck: true,
    playerCards: [],
    computerCards: [],
    communityCards: [], 
}

export const useStats = create(
    devtools((set) =>{
        return{
            communityCards:useStore.communityCards,
            computerTime:useStore.computerTime,
            playerTime: useStore.playerTime,
            cardsOnTable: useStore.cardsOnTable,
            wonDeck: useStore.wonDeck,
            resetGame: () => set(useStore),
            resetCards:() => set({wonDeck:false}),
            changePlayer:() => set({playerTime: false,computerTime:true}),
            changeComputer:() => set({playerTime: true,computerTime: false}),
            changeTime:(time:number) => set(()=>(time)),
            addCommunityCard: (card: ICards) => card,
            setCurrentBet: (amount: number) =>amount,
            setPlayerCards: (cards: ICards[]) => set(
                { playerCard: cards }),
            setComputerCards: (cards: ICards[]) => set(
                { computerCards: cards})
        }
    })
)
