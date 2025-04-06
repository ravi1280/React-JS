import React from 'react'
import { Link } from 'react-router-dom'
import NewContend from '../component/NewContend'
import NewSite from '../component/NewSite'

export default function Home() {
  return (
    <div>
        <h1>This is the Home Page !</h1>
        <NewSite project ="React JS" using="Java Script"/>
        <NewSite project ="Spring boot" using="Java"/>
        <NewSite project ="Boostrap" using="CSS"/>
        {/* <NewContend/> */}
        <Link to={"/profile"}>Go to Profile Page !</Link>
        <hr/>
        <Link to={"/contact"}>Go to Conatact Page !</Link>
      
    </div>
  )
}
