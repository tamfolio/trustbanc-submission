import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

import MainLogo from "../../assets/logos/main-logo.svg";

import HomeSvg from "../../assets/images/sidebar/home.svg";
import AirtimeSvg from "../../assets/images/sidebar/airtime.svg";
import CardSvg from "../../assets/images/sidebar/card.svg";
import LoanSvg from "../../assets/images/sidebar/loan.svg";
import SavingSvg from "../../assets/images/sidebar/savings.svg";
import SettingSvg from "../../assets/images/sidebar/settings.svg";
import TransferSvg from "../../assets/images/sidebar/transfer.svg";

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <img src={MainLogo} alt='' />
        <div className='sidebarMenu'>
          <ul className='sidebarList'>
            <Link to='/' className='link'>
              <li className='sidebarListItem active'>
                <div className='sidebar-icon active'>
                  <img src={HomeSvg} alt='home' />
                </div>
                Home
              </li>
            </Link>
            <li className='sidebarListItem'>
              <div className='sidebar-icon'>
                <img src={TransferSvg} alt='transfer' />
              </div>
              Transfers
            </li>
            <li className='sidebarListItem'>
              <div className='sidebar-icon'>
                <img src={SavingSvg} alt='savings' />
              </div>
              Target Savings
            </li>
            <li className='sidebarListItem'>
              <div className='sidebar-icon'>
                <img src={AirtimeSvg} alt='AirtimeSvg' />
              </div>
              Airtime and Bills
            </li>
            <li className='sidebarListItem'>
              <div className='sidebar-icon'>
                <img src={CardSvg} alt='CardSvg' />
              </div>
              Cards
            </li>
            <li className='sidebarListItem'>
              <div className='sidebar-icon'>
                <img src={LoanSvg} alt='LoanSvg' />
              </div>
              Loans
            </li>
            <li className='sidebarListItem'>
              <div className='sidebar-icon'>
                <img src={SettingSvg} alt='SettingSvg' />
              </div>
              Settings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
