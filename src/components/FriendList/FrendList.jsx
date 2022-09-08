import PropTypes from 'prop-types';
import { Friend } from './Friend';

export const FriendList = ({friends}) => {
return <ul>
    <Friend friend={friends} />
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}