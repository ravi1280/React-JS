import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExampleText from "./Component/ExampleText";
import Card from "./Component/TilCard";
import DragCards from "./Component/DragCard";


function App() {


  return (
    <>
    <ExampleText />
      <Card />
      <DragCards/>
    </>
  );
}

export default App
