// import React from "react";
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import SignUpGoogle from "./SignUpGoogle";

function LogIn(){
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");

    function logIn(event){
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, passwd)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
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
            <form method="post" action="/home">
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

                <button type="submit" onClick={logIn}>Submit</button>
            </form>
            <h1>OR</h1>
            <SignUpGoogle />
        </>
    )
}

export default LogIn;