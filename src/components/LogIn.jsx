// import React from "react";
import { useState } from "react"

function LogIn(){
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");

    function handleSubmit(){
        console.log({email, passwd});
        return
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>LogIn Here</h1>
                <input 
                    type="email" 
                    placeholder="Enter email here"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}/>
                <input 
                    type="password"
                    placeholder="Enter password here"
                    value={passwd}
                    onChange={(event) => setPasswd(event.target.value)} />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}