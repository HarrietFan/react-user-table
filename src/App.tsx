import { useState } from "react";
import Home from "./components/Home/Home";
import SideBar from "./components/SideBar/SideBar.tsx";
import Tabel from "./components/Tabel/Tabel";
// import UserList from "./components/UserList/UserList";
import Pages from "./Pages/Pages";

function App() {
  const [curPage, setCurPage] = useState(0);

  return (
    <div className="w-full h-full flex justify-between">
      <SideBar curPage={curPage} setCurPage={setCurPage} />
      <div className="flex-1 h-full flex flex-col items-center justify-between">
        {curPage === 0 && <Home />}
        {curPage === 101 && <Tabel />}
        {(curPage === 101 || curPage === 201) && <Pages />}
      </div>
      {/* <UserList /> */}
    </div>
  );
}

export default App;
