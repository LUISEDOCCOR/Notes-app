import React from "react";

const AddButton = (props) =>{
    return (
        <button 
            className={`${props.bg} rounded-full flex justify-center items-center w-16 h-16 hover:scale-110 transition-transform`}
            // onClick={() => {props.callback(props.bg)}}
            >
                {
                    props.children
                }
        </button>
    )
}

export default AddButton