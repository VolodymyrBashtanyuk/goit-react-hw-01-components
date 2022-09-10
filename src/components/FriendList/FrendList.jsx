import PropTypes from 'prop-types';
import { Wrapper, Item, Status, Avatar, Name } from './FrendListStyled';

export const FriendList = ({ friends }) => {
  const friend = friends.map(({ id, name, avatar, isOnline }) => (
    <Item key={id}>
      <Status status={isOnline} />
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  ));
  return <Wrapper>{friend}</Wrapper>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
