import React,{useEffect, useState} from "react";
const user="https://jsonplaceholder.typicode.com/posts";
console.log(user)
const Fetch=()=>{
    const [userdet,setuserdet]=useState([])
    const usehandler=async()=>{
        const response=await fetch(user)
        const newdata=await response.json()
        setuserdet(newdata)
    }
   

    useEffect(()=>{
        console.log(usehandler())

    },[])
    console.log(userdet)
    return (
        <div>UserPage
            {userdet.map((item)=>{
               return (
                <div>
                    {item.title}
                </div>
               )
            })}
        </div>
    )
}
export default Fetch;