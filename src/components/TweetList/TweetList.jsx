import { Li, List, Tweets, Load, End, Center } from './TweetList.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectTweets,
  selectStatusFilter,
} from 'redux/selectors';
import Tweet from 'components/Tweet/Tweet';
import Button from 'components/LoadButton/LoadButton';
import { fetchTweetsPart } from 'redux/operations';
import { totalCountTweets } from 'redux/operations';
import LoaderRing from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { persistor } from 'redux/store';
import { statusFilters } from '../../redux/constants';

const getVisibleTweets = (tweets, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tweets.filter(tweet => tweet.isActive);
    case statusFilters.unActive:
      return tweets.filter(tweet => !tweet.isActive);
    default:
      return tweets;
  }
};

const Items = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const tweets = useSelector(selectTweets);
  const isGeneralLoading = useSelector(selectIsLoading);
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(2);

  const uniqueItems = tweets.filter((item, index, self) => {
    return self.findIndex(i => i.id === item.id) === index;
  });
  const statusFilter = useSelector(selectStatusFilter);
  const visibleTweets = getVisibleTweets(uniqueItems, statusFilter);

  useEffect(() => {
    persistor.purge();
    if (!tweets.length) {
      dispatch(fetchTweetsPart(1));
    }
  }, [dispatch, tweets]);

  useEffect(() => {
    if (load) {
      dispatch(fetchTweetsPart(page));
      setLoad(false);
      setPage(page + 1);
    }
  }, [dispatch, load, page]);

  const handleLoading = () => {
    setLoad(true);
  };

  async function fetchData() {
    try {
      const totalCount = await totalCountTweets;
      if (
        totalCount === uniqueItems.length ||
        totalCount === uniqueItems.length - 1 ||
        totalCount === uniqueItems.length - 2
      ) {
        return true;
      }
    } catch (error) {
      console.error('Error fetching total tweets count:', error);
    }
  }
  const reachTheEnd = fetchData();
  return (
    <List>
      <Center>
        <Tweets>
          {visibleTweets.length
            ? visibleTweets.map(obj => (
                <Li key={obj.id}>
                  <Tweet fields={obj} />
                </Li>
              ))
            : !isGeneralLoading && <h3>There are no tweets in mockapi</h3>}
        </Tweets>
      </Center>

      {reachTheEnd ? (
        <End>It's all twits!</End>
      ) : (
        <Load>
          {tweets.length && !load && !error && !isGeneralLoading ? (
            <Button onClick={handleLoading} />
          ) : (
            <LoaderRing />
          )}{' '}
        </Load>
      )}
      {error && <p>Something went wrong...</p>}
    </List>
  );
};

export default Items;
