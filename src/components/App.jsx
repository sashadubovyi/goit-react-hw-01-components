import { ProfileCard } from 'components/Profile/Profile';
import Statistics from 'components/Statistics/StatisticsMain/StatisticsMain';
import FriendsList from './Friends/FriendsList/FriendsList';

export const App = () => {
  return (
    <>
      <ProfileCard />
      <Statistics />
      <FriendsList />
    </>
  );
};
