import React from 'react'
import { ICards } from '../../stateTypes'
import styles from "GameCards.module.scss"

export const GameCards = () => {
  const diamonds: ICards[] = []
  const hearts: ICards[] = [] 
  const spades: ICards[] = []
  const clubs: ICards[] = []
 
  for( let d = 1 ; d < 13 ; d++){
    diamonds.push({
      rank:  `${d}_of_diamonds.png`,
      symbol: 'diamonds',
      number: d
    })
  }
  for(let h = 1; h < 13 ; h++){
    hearts.push({
      rank: `${h}_of_hearts.png`,
      symbol: 'hearts',
      number: h
    })
  }
  for(let s = 1; s < 13 ; s++){
    spades.push({
      rank: `${s}_of_spades.png`,
      symbol: 'hearts',
      number:s
    })
  }
  for(let c = 1 ; c < 13 ; c++){
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
