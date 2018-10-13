import React from 'react'
import "./Word.css";

export const Word = (props) => (
  <div className="Word">
    {
      props.children.split('').map((letter, index) => (
        <span style={{color:  props.silentLetters.includes(index) ? 'magenta' : 'white'}}>{letter}</span>
      ))
    }  
  </div>
)