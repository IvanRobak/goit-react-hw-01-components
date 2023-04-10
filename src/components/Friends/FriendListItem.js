import PropType from 'prop-types';
import styles from './Friends.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.statusOnline : styles.statusOfline}>
        {isOnline}
      </span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.PropType = {
  avatar: PropType.string.isRequired,
  name: PropType.string.isRequired,
  isOnline: PropType.bool.isRequired,
};
