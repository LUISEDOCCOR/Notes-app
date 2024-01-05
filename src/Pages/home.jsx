import React from "react";
import Color from "../Components/Color";
import AddButton from "../Components/AddButton";
import Card from "../Components/Card";


const getDate = () =>{
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    const today = `${day}/${month}/${year}`;
    return today
}


const defaultColors = [
    'bg-[#f2245a]',
    'bg-[#39b8bb]',
    'bg-[#55ad6c]',
    'bg-[#9e49ca]',
    'bg-[#a85163]',
]

const Home = () =>{
    return(
       <div className="flex">
            <nav className="h-screen w-32 py-4 flex flex-col items-center justify-between border-r-2">
                <div className="space-y-12">
                    <AddButton>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </AddButton>
                    <div className="flex flex-col gap-4">
                        {
                            defaultColors.map((color, index) =>(
                                <Color key={index} bg={color} />
                            ))
                        }
                    </div>
                </div>
                <AddButton>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </AddButton>
        </nav>
        <main className="w-screen font-mono">
            <article className="max-w-7xl mx-auto pt-8 flex items-center justify-between">
                <h1 className="text-5xl font-bold">Notes</h1>
                <span className="text-2xl font-semibold">{getDate()}</span>
            </article>
            <article className="max-w-7xl mx-auto mt-16 grid grid-cols-3 gap-8">
                {
                    defaultColors.map((color, index) => (
                        <Card key={index} bg={color}></Card>
                    ))
                }            
            </article>
        </main>
       </div>
    )
}

export default Home