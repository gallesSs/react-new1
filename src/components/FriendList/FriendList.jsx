import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.container}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem item={friend} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
