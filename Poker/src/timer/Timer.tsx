import { useEffect, useState } from "react"
import {IPokerStore } from "../stateTypes"
import { useStats } from "../store/useMemmoryStore"
import { CoinsCounter } from "../Components/coins/coinsCounter/CoinsCounter"
import { ResultCoin } from "../stateTypes"

export const Timer = ({playerValue,fullBet}:ResultCoin) =>{
    const {playerTime,computerTime,changePlayer,changeComputer}:IPokerStore =useStats() as IPokerStore
    const [turntime,setTurnTime] = useState(0)
    const [compTime,setCompTime] =useState(0)
    const [computerValue, setComputertValue] = useState(0);
    
  const getRandom = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    if (playerTime) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      return randomNum;
    }
    return min
  }

    useEffect(()=>{
        let interval: number
        if(playerTime){
            interval = setInterval(()=>{
            setTurnTime((prev)=> prev +1)
            },1000) 
        }if(computerTime){
            interval =setInterval(() => {
            setCompTime((prev)=> prev+1)
            },1000)
        }
        return () =>clearInterval(interval)
    },[playerTime,computerTime])
    
    useEffect(()=>{
        if(turntime === 10 ){
             console.log(turntime)
            setTurnTime(0)
           
            changePlayer()
        }else if(compTime===5){
            console.log(compTime)
            setCompTime(0)
            
            changeComputer()
            setComputertValue(getRandom(playerValue,fullBet))
        }
    },[ changePlayer,turntime,compTime])
    return(
   <div>{computerValue}</div>
    )
}