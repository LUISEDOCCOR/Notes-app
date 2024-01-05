import { useState } from "react";
import React  from "react";
import AddButton from "./AddButton";

const Card  = (props) =>{

    const [isHover, setHover] = useState(false)

    return (
        <div onMouseEnter={() =>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} className={`${props.bg} flex flex-col justify-between w-96 h-40 rounded shadow-lg text-white px-4 py-6 hover:scale-105 transition-transform`}>
            <span className="text-2xl">Repaso de español</span>
            <div className={`${isHover ? 'block': 'hidden'} transition-transform flex justify-end`}>
                <AddButton callback={props.moreBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </AddButton>
            </div>
        </div>
    )
}


export default Card