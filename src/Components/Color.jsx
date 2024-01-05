import React from "react";

const Color = (props) =>{
    return(
        <button 
            className={`${props.bg} rounded-full w-16 h-16 hover:scale-110 transition-transform focus:ring`}
            onClick={() => {props.callback(props.bg)}}
            >
        </button>
    )
}


export default Color