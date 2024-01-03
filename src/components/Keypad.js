// Code Keypad Component Here
import React from "react";


function Keypad() {
    function handleChange(event) {
        console.log('Entering password...')
    }
    
    return (
      <div> 
        <input 
         type="password" 
         name="password"
         onChange={handleChange}
         placeholder="Enter password" 
        />

      <select name="password" onChange={handleChange}>
        <option value="all">Entering password...</option>
      </select>
        
      </div>
    )
}

export default Keypad;