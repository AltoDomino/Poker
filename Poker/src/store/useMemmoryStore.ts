import { create } from 'zustand'
import { initialState, IPokerStore} from '../stateTypes'
import { devtools } from 'zustand/middleware'


export const useStore :initialState = {
    revealedCard : 0,
    gameTime:"00:00",
    startPlayerTime: false,
    stopPlayerTime: false,
    cardsOnTable: 0,
    cardOnHand: 0,
    wonDeck: false
}

export const useStats = create(
    devtools((set) =>{
        return{
            round: useStore.revealedCard,
            gameTime: useStore.gameTime,
            startPlayerTime: useStore.startPlayerTime,
            stopPlayerTime: useStore.startPlayerTime,
            cardsOnTable: useStore.cardsOnTable,
            cardsOnHand: useStore.cardOnHand,
            wonDeck: useStore.wonDeck,
            resetStats: () =>({...useStore,stopTime:true,startTime: false}),
            resetGame: () => set(useStore),
            changeStop:(stop:boolean) => set(()=>(stop)),
            changeStart:(start:boolean) => set(()=>(start)),
            changeTime:(time:string) => set(()=>(time))
        }
    })
)
