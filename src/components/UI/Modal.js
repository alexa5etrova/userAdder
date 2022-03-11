import { Fragment } from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div onClick={props.modalClosingHandler} className={styles.backdrop}></div>
  );
};

const ModalCard = (props) => {
  return (
    <Card className={styles.modal}>
      <div className={styles.header}>
        <h2>{props.header}</h2>
      </div>
      <div className={styles.content}>{props.content}</div>
      <div className={styles.actions}>
        <Button onClick={props.modalClosingHandler}>Close</Button>
      </div>
    </Card>
  );
};
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop modalClosingHandler={props.modalClosingHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalCard
          modalClosingHandler={props.modalClosingHandler}
          content={props.content}
          header={props.header}
        />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default Modal;
