import React from 'react'
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
      
    </div>
  )
}
