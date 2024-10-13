import React from 'react';
import { UpvoteProvider } from './context/UpvoteContext';
import UpvoteList from './components/UpvoteList';

const App = () => {
  return (
    <UpvoteProvider>
      <div>
        <h1>Upvote Lists</h1>
        <UpvoteList listIndex={0} />
        <UpvoteList listIndex={1} />
      </div>
    </UpvoteProvider>
  );
};

export default App;
