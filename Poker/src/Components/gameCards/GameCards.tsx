import React from 'react'
import { ICards } from '../../stateTypes'
import styles from "GameCards.module.scss"

export const GameCards = () => {
  const diamonds: ICards[] = []
  const hearts: ICards[] = [] 
  const spades: ICards[] = []
  const clubs: ICards[] = []
 
  for( let d = 2 ; d < 16 ; d++){
    diamonds.push({
      rank:  `${d}_of_diamonds.png`,
      symbol: 'diamonds',
      number: d
    })
  }
  for(let h = 2; h < 16 ; h++){
    hearts.push({
      rank: `${h}_of_hearts.png`,
      symbol: 'hearts',
      number: h
    })
  }
  for(let s = 2; s < 16 ; s++){
    spades.push({
      rank: `${s}_of_spades.png`,
      symbol: 'hearts',
      number:s
    })
  }
  for(let c = 2 ; c < 16 ; c++){
    clubs.push({
      rank: `${c}_of_clubs.png`,
      symbol: 'clubs',
      number: c
    })
  }

  return {
    diamonds,
    clubs,
    spades,
    hearts
  }
}
