import { useContext } from "react";
import UserContext from "./context/UserContext";
import "./App.css";
import Login from "./component/Login";
import Profile from "./component/Profile";

function App() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h1>Heloo conetxt api </h1>

      <Login />
      <Profile />
    </>
  );
}

export default App;
