import { Profile } from './Profile/Profile';
import user from '../utils/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../utils/data.json';

import { FriendList } from './Friends/FriendList';
import friends from '../utils/friends.json';

import { TransactionHistory } from './Transaction/Transaction';
import transactions from '../utils/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 60,
        padding: 50,
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        key={user.avatar}
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
