import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name  } from './FrendList.styled';

export const Friend = ({ friend }) => {
   return  friend.map(({id, name, avatar, isOnline }) => 
    <Item key={id}>
      <Status status={isOnline}>{isOnline}</Status>
       <Avatar src={avatar} alt={name} width="48" />
       <Name>{name}</Name>
     </Item>)
}

Friend.propTypes = {
    friend: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
          })
    ),
}