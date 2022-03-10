import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  let userAddingHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(userName, enteredAge);
    props.onUserEntered(userName, enteredAge);
    setUserName("");
    setEnteredAge("");
  };

  let enteringUserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  let enteringAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={userAddingHandler}>
        <label htmlFor="username">User name</label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={enteringUserNameHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          onChange={enteringAgeHandler}
          id="age"
          min="1"
          max="99"
          step="1"
          value={enteredAge}
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
