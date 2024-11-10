import React from 'react'
import { ICards } from '../../../stateTypes'
import { getRandomCard } from '../../gameCards/getRandomCard/getRandomCard'

export const straightFlush = () => {
    const {randomDiamondCard,randomHeartCard,randomSpadeCard,randomClubCard} = getRandomCard()
    if(randomDiamondCard.symbol){
        if(randomDiamondCard.number === 1){
        }
    }

  return (
    <div>
    </div>
  )
}

