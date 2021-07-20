import React from 'react';

import Section from './Section/Section';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import statisticalData from '../data/statistical-data.json';
import friends from '../data/friend.json';
import transactions from '../data/transactions.json';

function App() {
  return (
    <>
      <Section>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section>
        <Statistics title="Upload stats" stats={statisticalData} />
      </Section>

      <Section>
        <FriendList friends={friends} />
      </Section>

      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
}

export default App;