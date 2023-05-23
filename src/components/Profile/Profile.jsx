import user from '../../data/user.json';
import style from './profile.module.css';
import PropTypes from 'prop-types';

const ProfileCard = () => {
  return (
    <div className={style.mainProfileStyle}>
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
    <div className={style.profileStyle}>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className={style.userInfoStyle}>
          <b>Name: </b>
          {username}
        </p>
        <p className={style.userInfoStyle}>
          <b>Login: </b>
          {tag}
        </p>
        <p className={style.userInfoStyle}>
          <b>Address: </b>
          {location}
        </p>
      </div>

      <ul className={style.statsStyle}>
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

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProfileCard;
