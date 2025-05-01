import React from "react";
import { useState,useEffect } from "react";
const Resize=()=>{
    const [screensize,setscreensize]=useState({
        width:window.innerWidth,
        height:window.innerHeight,
    });
    const updatescreen=()=>{
        setscreensize({
            width:window.innerWidth,
            height:window.innerHeight,
        });
    };
    useEffect(()=>{
        window.addEventListener('resize',updatescreen);
       return ()=>{
        window.removeEventListener('resize',updatescreen)
       }
    },[]);

    return(
        <div>
            <h1>Welcome to the Windows11</h1>
            <p>Resize the Windows by using the React.</p>
            <p style={{color:"red"}}>Width:{screensize.width}px</p>
            <p style={{color:"red"}}>Height:{screensize.height}px</p>
        </div>
    )
}
export default Resize;