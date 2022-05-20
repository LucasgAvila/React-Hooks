import React, { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import '../styles/Header.scss'
import logo from '../styles/logo.png'


const Header = () => {
    const [darkMode, setDarkMode] = useState(false)
    const color = useContext(ThemeContext);
    

    const handleClick = () => {
        setDarkMode(!darkMode);
    }
  
    return (
    <div className="Header">    
        <img src={logo} alt="" />
        <button className='button' type='button' onClick={handleClick}>
        {darkMode ? 'Dark Mode' : 'Light Mode'  }
        </button>
        <h1 style={{color}}>ReactHooks</h1>
    </div>
    );
}

export default Header;