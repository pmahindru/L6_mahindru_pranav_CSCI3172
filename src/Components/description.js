import React from 'react';
import './description.css';

function Description(props){
    // if Description is empty then it wll return this 
    if(props.Description === '' || props.Description === ' '){
        return (
            <p id={props.blogid}> 
                "There is no description for the this blog :)"
            </p>
        )
    }
    // otherwise return this 
    else{
        return (
            <p id={props.blogid}> 
               {props.Description}
            </p>
        )
    }
}

export default Description;