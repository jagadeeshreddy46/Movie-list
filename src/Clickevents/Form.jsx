import React from "react";
import { useState } from "react";
const Form=()=>{
    const [user,setuser]=useState("")
    const[userdetails,setuserdetails]=useState()
    const username=(event)=>{
        setuser(event.target.value)
    }
    const newuser=(e)=>{
        e.preventDefault()
       setuserdetails(user)
    }
    return(
        <section class="formsec">
            <h2>Hello,{userdetails}</h2>
        <div class="divclass">
            <form onSubmit={newuser}>
           <input type="text" placeholder="Enter your name:" onChange={username}></input> 
           <br />
            <button class="btn" type="submit">Submit</button>
            </form>
        </div>
        </section>
    )
}
export default Form;