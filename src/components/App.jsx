import ProfileCard from './Profile/Profile';
import Statistics from 'components/Statistics/StatisticsMain/StatisticsMain';
import FriendsList from './Friends/FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <ProfileCard />
      <Statistics />
      <FriendsList />
      <TransactionHistory />
    </>
  );
};
