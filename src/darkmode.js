import React from 'react';
import { useState } from "react";
import './App.css';

export function Dark(){
    const [theme, setTheme] = useState(true);
    const color = theme ? "White" : "Dark";
  
    if (theme) {
        document.body.classList.remove("DarkMode");
        document.body.classList.add("WhiteMode");
    } else {
        document.body.classList.remove("WhiteMode");
        document.body.classList.add("DarkMode");
    }
  
    return (
      <div>
        <h2 className={`App-h1-${color}`}>Dark mode</h2>
        <button onClick={() => setTheme(!theme)}>Change theme</button>
      </div>
    );
  }