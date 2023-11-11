// import React from "react";
import { useReducer } from "react";
import { INITIAL_STATE, signUpReducer } from "./signUpReducer";

function SignUp() {
    const [state, dispatch] = useReducer(signUpReducer, INITIAL_STATE)

    function handleSubmit(event){
        console.log({state});
        if (state.tempPasswd !== state.conPasswd){
            alert("Passwords do not match! \nEnter again");
        }
        event.preventDefault();
        return;
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up here</h1>
                <input 
                    type="email" 
                    placeholder="Enter your email here" 
                    value={state.email}
                    onChange={(e) => {dispatch({type: "emailChange", payload: e.target.value})}} />
                <input 
                    type="password" 
                    placeholder="Enter your password" 
                    value={state.tempPasswd}
                    onChange={(e) => {dispatch({type: "tempPasswdChange", payload: e.target.value})}} />
                <input 
                    type="password" 
                    placeholder="Confirm your password" 
                    value={state.conPasswd}
                    onChange={(e) => {dispatch({type: "conPasswdChange", payload: e.target.value})}} />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default SignUp;