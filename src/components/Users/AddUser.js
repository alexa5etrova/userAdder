import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errorState, setErrorState] = useState({
    isModalOpen: false,
    headerError: "",
    contentError: "",
  });

  let userAddingHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorState({
        isModalOpen: true,
        headerError: "No full data",
        contentError: "Please eneter your name and age",
      });
    }
    if (+enteredAge < 1) {
      setErrorState({
        isModalOpen: true,
        headerError: "Age mistake",
        contentError: "Age should be more than 1y.o",
      });
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

  let modalClosingHandler = () => {
    setErrorState({ isModalOpen: false, headerError: "", contentError: "" });
  };

  return (
    <div>
      {" "}
      {errorState.isModalOpen && (
        <Modal
          header={errorState.headerError}
          content={errorState.contentError}
          modalClosingHandler={modalClosingHandler}
        />
      )}
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
    </div>
  );
};

export default AddUser;
