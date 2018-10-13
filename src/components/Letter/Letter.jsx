import React from 'react'
import "./Letter.css";

export const Letter = (props) => (
  <span className={props.silent === true ? "Letter silent" : "Letter"}>
    {props.children}  
  </span>
)