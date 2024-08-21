import React, { useEffect, useState } from "react";
import './ToggleSwitch.css'

const ToggleSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const handleToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  //  Dark And Light Theme =>

  {
    const theme = localStorage.getItem('theme');
    const root = document.documentElement
    
    if (theme == 'dark') {
      root.style.setProperty('--primary' , '#0ef0ad')
      root.style.setProperty('--light' , '#0ef0ad')
      root.style.setProperty('--dark' , '#0ba37d')
      root.style.setProperty('--bg-btn-color' , '#1f2041')
      root.style.setProperty('--text' , '#fff')
      root.style.setProperty('--ninja' , '#121623')
      root.style.setProperty('--span-text' , '#0ba37d')
    }
    else {
      root.style.setProperty('--primary' , '#007bff')
      root.style.setProperty('--light' , '#5aa9ff')
      root.style.setProperty('--dark' , '#004085')
      root.style.setProperty('--bg-btn-color' , '#fff')
      root.style.setProperty('--text' , '#000')
      root.style.setProperty('--ninja' , '#121632')
      root.style.setProperty('--span-text' , '#0b2c80')
    }
    
  }

  return (
<div className='toggle-btn' >
<input type='checkbox' id='c3d'
        checked={isDarkMode}
        onChange={handleToggle}
/>
<label htmlFor='c3d'></label>
</div>
  );
};

export default ToggleSwitch;
