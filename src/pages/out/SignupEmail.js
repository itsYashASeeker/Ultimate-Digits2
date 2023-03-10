
import React from "react";
import logo from "../../img/logo3.png";
import Navbar from "../../components/Navbar.js";
import signupLogo from "../../img/Vector.png";
import s1 from "../../img/emailLogo2.png";
import s2 from "../../img/signup1.png";
import "../../css/SignupEmail.css";
import {Magic, MagicIncomingWindowMessage} from "magic-sdk";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import allData from "../../allData.js";
require("dotenv").config();

function SignupEmail(){

    // var [loggedin,SetLogg] = useState("");

    // useEffect(() => {
    //     async function render() {
    //         const isLoggedIn = await magic.user.isLoggedIn();
    //         SetLogg(isLoggedIn);
    //     }
    //     render();
    //  }, []);

    let magic = new Magic("pk_live_15D99720B6DDCD0F");

    const handleLogin = async(event) =>{
        event.preventDefault();
        const email = new FormData(event.target).get("email");
        if(email){
            try{
                await magic.auth.loginWithEmailOTP({email});
                localStorage.setItem("log", "true");
                localStorage.setItem("userEmail", email);
                window.location.reload(false);
            }
            catch(err){
                window.alert("Some error occured, please try again...");
            }
        }
    }

    if(localStorage.getItem("log")!="true"){
        return(
            <div className="SignupEmailbg">
                <Navbar/>
                <div className="SignupEmailcard">
                    <div className="SignupEmailUpperBlock">
                        <img src={s1}></img>
                        
                        <p className="SUBEmail_title">Sign up</p>
                        <p className="SUBEmail_2">Please sign up to continue</p>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="SignupEmailLowerBlock">
                            <div className="SignupEmailUsername1">
                                <label>Email</label>
                                <input name="email" placeholder="Enter your email"></input>
                            </div>
                            {/* <div className="SignupEmailUsername1 godown">
                                <label>Set Password</label>
                                <input name="password" type={"password"} placeholder="******"></input>
                            </div> */}
                            <button type="submit" className="margin_top_1rem purple_gradient_button confirm_button_mint">
                                Sign up
                            </button>
                            <div className="toEmailLogin">
                                <p>Already have an account?</p>
                                <a href="#">Log in</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    else{
        return(
            < Navigate to="/" />
        );
    }
}

export default SignupEmail;