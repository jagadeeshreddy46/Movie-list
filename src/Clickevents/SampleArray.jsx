import React from "react";
let players=[{
    Cricket:'Kohli',
    Hockey:'Sundeep',
    Chess:'Gokul',
    Kabaddi:'Jagan'
}]
const SampleArray=()=>{
    return (
        <div>
            {players.map((item)=>{
                return (
                    <div>
                        <h1>{item.Cricket}</h1>
                        <h1>{item.Chess}</h1>
                        <h1>{item.Kabaddi}</h1>
                        </div>

                )
            })}
        </div>
    )
}
export default SampleArray;