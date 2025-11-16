import SideBar from "./components/SideBar/SideBar";
import Tabel from "./components/Tabel/Tabel";
import UserList from "./components/UserList/UserList";
import Pages from "./Pages/Pages";

function App() {
  return (
    <div className="w-full h-full flex justify-between">
      <SideBar />
      <div className="h-full flex flex-col content-between">
        <Tabel />
        <Pages />
      </div>
      <UserList />
    </div>
  );
}

export default App;
