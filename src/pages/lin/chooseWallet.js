
import React from "react";
import Navbar from "../../components/Navbar.js";
import "../../css/thankyou.css";
import metamask from "../../img/Metamask.png";
import "../../css/chooseWallet.css";
import {Magic} from "magic-sdk";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function ChooseWallet(){
    const navigate = useNavigate();


    // var [loggedin,SetLogg] = useState("");

    // useEffect(() => {
    //     async function render() {
    //         const isLoggedIn = await magic.user.isLoggedIn();
    //         SetLogg(isLoggedIn);
    //     }
    //     render();
    //  }, []);

    if(localStorage.getItem("log")==="true"){

        async function requestWallet(){
            if(window.ethereum){
                console.log("Extension detected");
                try{
                    const accounts = await window.ethereum.request({
                        method: "eth_requestAccounts",
                    });
                    localStorage.setItem("walletAddress", accounts[0]);
                    navigate("/request-number/step3/confirm-mint");
                }
                catch(err){
                    console.log("Error in connecting!");
                }
            }
            else{
                alert("Meta mask not detected");
            }
        }
        
        return(
            <div className="Signupbg">
                <Navbar />
                <div className="wallet_card">
                    <i className="logo_thanks fa-solid fa-wallet"></i>
                    <p className="thank_title">Choose a wallet</p>
                    <p>Once minted your wallet address will be set as the phone number owner.</p>
                    <p>Wallet address: <p className="makeBold">{localStorage.getItem("walletAddress")}</p></p>
                    <button className="wallet_button" onClick={requestWallet}><img src={metamask}></img><p className="makeBold">Metamask</p></button>
                </div>
            </div>
        )
    }
    else{
        return(
            < Navigate to="/" />
        );
    }
    
}

export default ChooseWallet;