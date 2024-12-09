import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import styles from "./playerName.module.scss";

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
  <form onSubmit={handleSubmit} className={styles.form}>
    <label className={styles.label}>
        Player Name:
        <input 
        className={styles.input}
        value={namePlayer} 
        onChange={handleInputChange}/>
    </label>
        <button 
        className={styles.confirm}
        type="submit">SUBMIT
        </button>
  </form>
  )
}

