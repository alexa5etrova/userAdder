import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((item) => (
          <li key={item.id}>
            {item.userName} ({item.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
