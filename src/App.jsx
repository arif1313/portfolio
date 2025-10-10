// src/App.js
import { Outlet } from "react-router-dom";
import Sidebar from "./Component/Layout/Sidebar";

const App = () => {
  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar fixed - 1/4 width */}
      <div className="fixed left-0 top-0 h-full w-1/4 sm:hidden md:block lg:block">
        <Sidebar />
      </div>

      {/* Main content takes remaining 3/4 */}
      <div className="ml-[25%] w-3/4 h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
