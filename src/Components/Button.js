import './button.css'
import React from 'react';

function Button(props){
    // i learn from the lab 7 recording as well as i also took reference for the function from the given link and implement it 
    // Tryit editor v3.6 - show react. [Online]. 
    // Available: https://www.w3schools.com/react/showreact.asp?filename=demo2_react_events_argument. [
    // Accessed: 08-Mar-2022]. 
    const alertshow = (id) => {
        if(document.getElementById(id).style.display === 'block'){
            document.getElementById(id).style.display = 'none';
        }
        else{
            document.getElementById(id).style.display = 'block'
        }
    }
    return(
        <button className='blogname' onClick={() => alertshow(props.hideDescription)}> {props.name} </button>
    );
}

export default Button;