import PropType from 'prop-types';
import { FriendListItem } from './FriendListItem';
import styles from './Friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
};

FriendList.PropType = {
  friends: PropType.shape({
    avatar: PropType.string.isRequired,
    name: PropType.string.isRequired,
    isOnline: PropType.bool.isRequired,
    id: PropType.number.isRequired,
  }),
};
