import React, { useState } from "react";
import HeaderElement from "./header";
import "./Lose.css";


const Lose = () => {
  const [uniqueCode, setUniqueCode] = useState("");
  const phoneNumber = localStorage.getItem("phoneNumber")

  const getUniqueCode = async () => {
    try {
      const uniqueCodeResponse = await fetch(
        "https://nbrm3t7gl1.execute-api.us-east-1.amazonaws.com/prod/getUniqueCode",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber,
            productId: "679",
          }),
        });

      const uniqueCodeData = await uniqueCodeResponse.json();
      if (uniqueCodeData.status === "SUCCESS") {
        console.log("Unique Code generated");
        setUniqueCode(uniqueCodeData.result.uniqueCode);
      } else {
        console.log("User already participated");
        setUniqueCode("User already participated");
        console.error(uniqueCodeData.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="my">
        <HeaderElement />
        <div className="header-top">
          <h1>
            <i>CONGRATULATIONS</i>
          </h1>
        </div>
        <div className="addBg">
        <div className="next">
          <div className="bottom1">
            <div className="loseImage">
              <img src="images/bglassf11.png" alt="oops" />
            </div>
            <div className="text2">
              <h4>
                ON WINNING A COMPLIMENTARY HIGHBALL! SHARE YOUR UNIQUE CODE WITH
                SERVER &
              </h4>
              <br />
              <h2>
                <b>GRAB YOUR FIRST HIGHBALL</b>
              </h2>
            </div>
          </div>
          <div className="right">
            <h5>Your Unique Code is</h5>
            <div id="mid">
              {uniqueCode ? ( 
                <h2>{uniqueCode}<br></br></h2>
              ) : (
                <button onClick={getUniqueCode}>Click Here!</button>
              )}
            </div>
            <div className="endd">
              <h6>
              A maximum of five complimentary Highball drink per participant can be availed through this offer
              </h6>

            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Lose;
