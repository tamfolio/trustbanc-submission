import React, { useState, useEffect } from "react";
import './home.css';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [apiError, setError] = useState("");

  const handleFetchAccounts = () => {
    let phoneNumber = localStorage.getItem("phoneNumber");
    let session = localStorage.getItem("sessionID");
    let dataToPost = JSON.stringify({
      phoneNumber: phoneNumber,
      session: session,
    });

    fetch(
      "https://bespoke.trustbancgroup.com/omnichannel_interview/api/account/fetchaccounts",
      {
        method: "POST",
        body: dataToPost,
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.responseMessage) {
          setError(response.responseMessage);
        }

        if (response.accounts) {
          setAccounts(response.accounts);
        }
      })
      .catch((e) => {
        console.log("e", e);
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  const handleFetchTransactions = () => {
    let phoneNumber = localStorage.getItem("phoneNumber");
    let session = localStorage.getItem("sessionID");
    let dataToPost = JSON.stringify({
      phoneNumber: phoneNumber,
      session: session,
    });

    fetch(
      "https://bespoke.trustbancgroup.com/omnichannel_interview/api/account/fetchtransactions",
      {
        method: "POST",
        body: dataToPost,
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.responseMessage) {
          setError(response.responseMessage);
        }

        if (response.transactions) {
          setTransactions(response.transactions);
        }
      })
      .catch((e) => {
        console.log("e", e);
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    handleFetchAccounts();
    handleFetchTransactions();
  }, []);

  return<div className='home'>
  <a href="/" className='btn1'>MAKE A TRANSFER</a>
  <div className="topside">
  <div className="my-account">
   <p className='account-header'>My Accounts</p>
   <div className="account-box">
     <div className="account-type">
       <h3>Savings Account</h3>
       <p>0061789943</p>
     </div>
     <div className="balance">
     <h3>Available balance</h3>
       <h5>₦ 400,000.56</h5>
       <p>Book balance: ₦ 400,000.56</p>
     </div>
   </div>
  </div> 
  </div>
  <div className="bottomside">
   <div className="transactionHistory">
     <div className="top">
       <p>Transaction History</p>
       <p>Download Statement</p>
     </div>
     <div className="bottom">
       <div className="history-box">
         
       </div>
     </div>
   </div>
  </div>

  
</div>
};

export default Dashboard;
