import logo from './logo.svg';
import './App.css';
import TestOne from './component/TestOne';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Profile from './pages/Profile';


function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
 
      
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
