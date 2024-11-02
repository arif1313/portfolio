// src/App.js

import { Outlet } from "react-router-dom";

import Header from "./Component/Layout/Header";

import Sidebar from "./Component/Layout/Sidebar";



const App = () => {
  return (
    <div className="flex  h-screen">

      <div className="">
        <Outlet />
      </div>
      {/* 
      <div className="overflow-y-auto"> 
        <Header />
        <main className="p-4">
         


        </main>

      </div> */}

    </div>
  );
};

export default App;
