import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import { useState } from "react";

function App() {
  const [enteredUsers, setEnteredUsers] = useState([]);

  let onUserEntered = (name, age) => {
    setEnteredUsers((prev) => [
      ...prev,
      { id: Math.floor(Math.random()) * 1000, userName: name, age: age },
    ]);
  };

  return (
    <>
      <AddUser onUserEntered={onUserEntered} />
      <UserList users={enteredUsers} />
    </>
  );
}

export default App;
