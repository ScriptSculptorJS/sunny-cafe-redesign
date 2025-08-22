import { useState } from 'react'
import Nav from './components/Navbar/Navbar.jsx';
import About from './components/About/About.jsx';
import Header from './components/Header/Header.jsx';
import Menu from './components/Menu/Menu.jsx';
import Contact from './components/Contact/Contact.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div id='appContainer'>
      <Nav />

      <main>
        <Header />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      
    </div>
  )
}

export default App
