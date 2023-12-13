// import React from "react";
import { useReducer, useState } from "react";
import { INITIAL_STATE, signUpReducer } from "./signUpReducer";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase.js";
import SignUpGoogle from "./SignUpGoogle.jsx";
import Verify from "./Verify.jsx";

function SignUp() {
    const [state, dispatch] = useReducer(signUpReducer, INITIAL_STATE)
    const [verifyMsg, setVerifyMsg] = useState(false);

    async function signUp(event) {
        event.preventDefault();
        if (state.tempPasswd !== state.conPasswd) { 
            //required conditions of validation
            alert("Passwords do not match! \nEnter again");
        } else {
            createUserWithEmailAndPassword(auth, state.email, state.conPasswd)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    const actionCodeSettings = {
                        url: 'http://localhost:3000/home',
                        handleCodeInApp: true
                      };
                    setVerifyMsg(true);
                    sendEmailVerification(user, actionCodeSettings);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        }
        return;
    }

    return (
        <>
            <form method="post" action="/home">
                <h1>Sign Up here</h1>
                <input
                    type="email"
                    placeholder="Enter your email here"
                    value={state.email}
                    onChange={(e) => { dispatch({ type: "emailChange", payload: e.target.value }) }} />
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={state.tempPasswd}
                    onChange={(e) => { dispatch({ type: "tempPasswdChange", payload: e.target.value }) }} />
                <input
                    type="password"
                    placeholder="Confirm your password"
                    value={state.conPasswd}
                    onChange={(e) => { dispatch({ type: "conPasswdChange", payload: e.target.value }) }} />

                <button type="submit" onClick={signUp}>Submit</button>
            </form>

            <h1>OR</h1>
            <SignUpGoogle />
            <p>{verifyMsg ? <Verify /> : ""}</p>
        </>
    )
}

export default SignUp;