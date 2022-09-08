import PropTypes from 'prop-types';

export const Friend = ({ friend }) => {
   return  friend.map(({id, name, avatar, isOnline }) => 
    <li key={id} className="item">
      <span className="status">{isOnline}</span>
       <img className="avatar" src={avatar} alt={name} width="48" />
       <p className="name">{name}</p>
     </li>)
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