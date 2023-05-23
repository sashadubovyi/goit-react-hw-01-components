import PropTypes from 'prop-types';
import { FriendsItemStyle, FriendsName } from './FriendsItem.styled';

const FriendsItem = ({ id, avatar, name, isOnline }) => {
  return (
    <FriendsItemStyle key={id} isOnline={isOnline}>
      <span></span>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendsName>{name}</FriendsName>
    </FriendsItemStyle>
  );
};

FriendsItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendsItem;
