import React from 'react'
import "./spn.css"

export default function NewSite(props) {
    const newtext = "My Favorite Languge is ";
    const newsubLanguage = " React Js !";
    const a= 35;
    const b=20;
    const c=15;
    const d= a+b+c;
  return (
    <div>
      <div className='span'>
        <span className='sText'>{newtext} {props.project} using for {props.using} "</span>
      </div>
    </div>
  )
}
