import React from 'react'
import "./input-option.css"

export default function InputOption(
    {Icon, title, color}:
    {
        Icon:any,
        title:string,
        color:string
    }
    ) {
  return (
    <div className='input-option'>
        < Icon className="input-option__icon" style={{color:color}} />
        <h4>{title}</h4>
    </div>
  ) 
}
