import PropTypes from 'prop-types';
import { Friend } from './Friend';
import { Wrapper } from './FrendListStyled';

export const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      <Friend friends={friends} />
    </Wrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
