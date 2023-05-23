import user from '../../data/user.json';

export const ProfileCard = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#000',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile" style={profileStyle}>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name" style={userInfoStyle}>
          <b>Name: </b>
          {username}
        </p>
        <p className="tag" style={userInfoStyle}>
          <b>Login: </b>
          {tag}
        </p>
        <p className="location" style={userInfoStyle}>
          <b>Address: </b>
          {location}
        </p>
      </div>

      <ul className="stats" style={statsStyle}>
        <li>
          <span className="label">
            <b>Followers</b>
            <br></br>
          </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">
            <b>Views</b>
            <br></br>
          </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">
            <b>Likes</b>
            <br></br>
          </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

const profileStyle = {
  border: '18px solid rgb(0, 0, 0)',
  borderRadius: '50px',
  padding: '25px',
};

const userInfoStyle = {
  marginLeft: '70px',
};

const statsStyle = {
  paddingTop: '50px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};
