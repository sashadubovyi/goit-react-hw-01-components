import PropTypes from 'prop-types';

const FriendsItem = ({ avatar, name, isOnline }) => {
  const onlineStatus = {
    backgroundColor: isOnline ? 'green' : 'red',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
  };

  const itemStyle = {
    backgroundColor: isOnline ? '#aed2ae78' : '#ff000029',
    display: 'flex',
    alignItems: 'center',
    width: '300px',
    border: '1px solid #fff',
    borderRadius: '50px',
    padding: '10px 30px',
    gap: '20px',
  };

  return (
    <li className="item" style={itemStyle}>
      <span className="status" style={onlineStatus}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name" style={nameStyle}>
        {name}
      </p>
    </li>
  );
};

FriendsItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendsItem;

const nameStyle = {
  margin: '0 auto',
  fontWeight: '200',
};
