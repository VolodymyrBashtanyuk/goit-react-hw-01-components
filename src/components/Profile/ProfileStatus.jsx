import PropTypes from 'prop-types';
import { Container, Item, Lable, Quantity } from './ProfileStyled';

export const ProfileStatus = ({ followers, views, likes }) => {
  return (
    <Container>
      <Item>
        <Lable>Followers</Lable>
        <Quantity>{followers}</Quantity>
      </Item>
      <Item>
        <Lable>Views</Lable>
        <Quantity>{views}</Quantity>
      </Item>
      <Item>
        <Lable>Likes</Lable>
        <Quantity>{likes}</Quantity>
      </Item>
    </Container>
  );
};

ProfileStatus.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
