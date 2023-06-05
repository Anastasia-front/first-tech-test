export const selectTweets = state => state.tweets.items;

export const selectIsActiveTweets = state => state.tweets.items.isActive;

export const selectStatusFilter = state => state.filter.status;

export const selectIsLoading = state => state.tweets.isLoading;

export const selectError = state => state.tweets.error;
