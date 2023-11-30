// import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase.js"
// import { Link } from "react-router-dom";

function AuthDetails() {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
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
                    {/* <Link to={`/home`}> HOme</Link> */}
                    <button onClick={userSignOut}>Sign Out</button>
                </>
                : 
                <p>Signed Out</p>}
            </div>
        </>
    )
}

export default AuthDetails;