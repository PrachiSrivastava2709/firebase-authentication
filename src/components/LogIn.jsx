// import React from "react";
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function LogIn(){
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");

    function logIn(event){
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, passwd)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
        return
    }

    return (
        <>
            <form onSubmit={logIn}>
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

export default LogIn;