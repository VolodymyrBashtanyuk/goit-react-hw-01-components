import PropTypes from 'prop-types';
import { Friend } from './Friend';
import { Wrapper } from './FrendList.styled';

export const FriendList = ({friends}) => {
return <Wrapper>
    <Friend friend={friends} />
    </Wrapper>
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}