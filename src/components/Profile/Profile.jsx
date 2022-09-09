import PropTypes from 'prop-types';
import { ProfileStatus } from './ProfileStatus';
import { Wrapper, ProfileInfo, Avatar, UserName, UserInfo } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats  }) => {

    return <Wrapper>
    <ProfileInfo>
      <Avatar
        src={avatar}
        alt={username}
        className="avatar"
      />
      <UserName>{username}</UserName>
      <UserInfo>{tag}</UserInfo>
      <UserInfo>{location}</UserInfo>
    </ProfileInfo>
   < ProfileStatus 
   followers={stats.followers} 
   views={stats.views} 
   likes={stats.likes}
   />
  </Wrapper>

}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    // stats: PropTypes.objectOf(PropTypes.number),
}
