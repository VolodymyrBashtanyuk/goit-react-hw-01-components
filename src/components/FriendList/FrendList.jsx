import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    const items = friends.map(({id, name, avatar, isOnline }) =>
     <li key={id} className="item">
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
    </li>)
return <ul>{items}</ul>
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
    items: PropTypes.objectOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isOnline,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
          })
    ),
}