import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTweetActiveState } from 'redux/tweetSlice';
import {
  Item,
  Box,
  Logo,
  Picture,
  Avatar,
  AvatarWrapper,
  Text,
  Button,
  Line,
} from './Tweet.styled';
import numeral from 'numeral';
import logoImg from '../../img/Logo.png';
import bgImg from '../../img/picture2.png';

export default function Tweet({ fields }) {
  const dispatch = useDispatch();

  const isAct = fields.isActive;
  const [isActive, setIsActive] = useState(isAct);

  const toggleButton = () => {
    const tweetId = fields.id;
    const isActive = !fields.isActive;
    setIsActive(isActive);
    dispatch(setTweetActiveState({ tweetId, isActive }));
  };

  const followers = isActive ? fields.followers + 1 : fields.followers;
  const formattedNumber = numeral(followers).format('0,0');
  const buttonText = !isActive ? 'FOLLOW' : 'FOLLOWING';

  return (
    <Item>
      <Box>
        <Logo src={logoImg} />
        <Picture src={bgImg} />
        <AvatarWrapper>
          <Avatar src={fields.avatar} />
        </AvatarWrapper>

        <Line>
          <Text>
            <p>{fields.tweets} TWEETS</p>
            <p>{formattedNumber} FOLLOWERS</p>
          </Text>
        </Line>

        <Button onClick={toggleButton} condition={!isActive}>
          {buttonText}
        </Button>
      </Box>
    </Item>
  );
}

Tweet.propTypes = {
  fields: PropTypes.shape({
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
  }),
};
