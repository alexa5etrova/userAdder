import Card from "../UI/Card";
import styles from "./UserListItem.module.css";

const UserListItem = (props) => {
  return (
    <li key={props.user.key}>
      <Card>
        <p>{props.user.userName}</p>
        <p>{props.user.age}</p>
      </Card>
    </li>
  );
};

export default UserListItem;
