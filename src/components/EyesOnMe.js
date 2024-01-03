// Code EyesOnMe Component Here
import React from "react";
//one button, two separate event handlers, when focus event happens, console.log 'Good!',  if not focus event, console.log 'Hey! Eyes on me!' 
function EyesOnMe() {
   
    function buttonFocus() {
        console.log("Good!")
    } 

    function buttonBlur() {
        console.log("Hey! Eyes on me!")
    }
    
    return (
    

        
     <button onFocus={buttonFocus} onBlur={buttonBlur}>Eyes on me</button>  
        
    )

     

    }   
    
          

   



export default EyesOnMe