import React, { ChangeEvent } from 'react'
import { useState } from 'react'

interface PlayerNameProps {
     onNameSubmit: (name: string) => void; 
    }

export const PlayerName:React.FC<PlayerNameProps> = ({onNameSubmit}) => {
    const [namePlayer,setNamePlayer] =useState("")

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setNamePlayer(e.target.value)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        onNameSubmit(namePlayer)
    }


  return (
  <form onSubmit={handleSubmit}>
    <label>
        Player Name:
        <input value={namePlayer} onChange={handleInputChange}/>
    </label>
        <button type="submit">ZATWIERDŹ</button>
  </form>
  )
}

