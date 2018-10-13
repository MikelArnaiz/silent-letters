import React from 'react'
import "./Word.css";
import {Letter} from '../Letter/Letter'
import {Pronunciation} from '../Pronunciation/Pronunciation'

export const Word = (props) => (
  <div className="WordWrapper">
    <div className="Word">
      {
        props.children.split('').map((letter, index) => (
          <Letter silent={props.silentLetters.includes(index)}>{letter}</Letter>
        ))
      }
    </div>
    <Pronunciation>{props.pronunciation}</Pronunciation>
  </div>
)