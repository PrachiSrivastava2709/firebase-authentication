// import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase.js"

function AuthDetails() {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user){
                setAuthUser(user);
            }else{
                setAuthUser(null);
            }
        });
    });

    function userSignOut(){
        signOut(auth)
            .then(() => {
                console.log("sign out successful");
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <div>{authUser ? 
                <>
                    <p>Signed In</p> 
                    <button onClick={userSignOut}>Sign Out</button>
                </>
                : 
                <p>Signed Out</p>}
            </div>
        </>
    )
}

export default AuthDetails;