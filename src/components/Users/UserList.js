import styles from "./UserList.module.css";
import UserListItem from "./UserListItem";

const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <UserListItem user={user} />
      ))}
    </ul>
  );
};

export default UserList;
