import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FrendListStyled';

export const Friend = ({ friends }) => {
  return friends.map(({ id, name, avatar, isOnline }) => (
    <Item key={id}>
      <Status status={isOnline} />
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  ));
};

Friend.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
