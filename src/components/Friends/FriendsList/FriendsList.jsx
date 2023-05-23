import FriendsItem from '../FriendsItem/friendsItem';
import friends from '../../../data/friends.json';

const FriendsList = () => {
  return (
    <ul className="friend-list" style={friendsListStyle}>
      {friends.map(friend => (
        <FriendsItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

export default FriendsList;

const friendsListStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '30px',
  color: 'black',
  gap: '15px',
};
