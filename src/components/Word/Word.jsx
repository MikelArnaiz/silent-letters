import React from 'react'
import "./Word.css";
import {Letter} from '../Letter/Letter'

export const Word = (props) => (
  <div className="Word">
    {
      props.children.split('').map((letter, index) => (
        <Letter silent={props.silentLetters.includes(index)}>{letter}</Letter>
      ))
    }  
  </div>
)