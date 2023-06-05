import Section from '../../components/Section';
import Items from '../../components/TweetList';
import Filter from '../../components/Filter';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ButtonStyle } from 'components/LoadButton/LoadButton.styled';
import { selectError } from 'redux/selectors';
import { SpaceBetween, Container } from './Tweets.styled';

const Tweets = () => {
  const error = useSelector(selectError);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <SpaceBetween>
        <ButtonStyle style={{ margin: 0 }} onClick={handleClick}>
          BACK
        </ButtonStyle>
        <Filter />
      </SpaceBetween>

      <Section title="MAIN TASK">
        {error && (
          <b style={{ marginLeft: 70 }}>
            The operation failed with error: ${error}
          </b>
        )}
        {!error && <Items />}
      </Section>
    </Container>
  );
};
export default Tweets;
