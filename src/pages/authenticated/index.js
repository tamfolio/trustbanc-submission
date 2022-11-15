import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "../../components/SideBar";

import Dashboard from "./Dashboard";

const Authenticated = () => {
  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route exact path='/' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Authenticated;
