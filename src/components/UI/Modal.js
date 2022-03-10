import Button from "./Button";
import Card from "./Card";
import styles from "./Modal.module.css";
const Modal = (props) => {
  return (
    <div onClick={props.modalClosingHandler} className={styles.backdrop}>
      <Card className={styles.modal}>
        <div className={styles.header}>
          <h2>{props.header}</h2>
        </div>
        <div className={styles.content}>{props.content}</div>
        <div className={styles.actions}>
          <Button onClick={props.modalClosingHandler}>Close</Button>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
