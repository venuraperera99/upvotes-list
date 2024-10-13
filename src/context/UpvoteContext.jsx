import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Context
const UpvoteContext = createContext();

export const useUpvoteContext = () => useContext(UpvoteContext);

export const UpvoteProvider = ({ children }) => {
  const [upvoteLists, setUpvoteLists] = useState(() => {
    const saved = localStorage.getItem('upvoteLists');
    return saved ? JSON.parse(saved) : [[false, false, false], [false, false, false]];
  });

  useEffect(() => {
    localStorage.setItem('upvoteLists', JSON.stringify(upvoteLists));
  }, [upvoteLists]);

  const toggleUpvote = (listIndex, upvoteIndex) => {
    const updatedLists = upvoteLists.map((list, i) =>
      i === listIndex
        ? list.map((upvote, j) => (j === upvoteIndex ? !upvote : upvote))
        : list
    );
    setUpvoteLists(updatedLists);
  };

  const addUpvoteToList = (listIndex) => {
    const updatedLists = upvoteLists.map((list, i) =>
      i === listIndex ? [...list, false] : list
    );
    setUpvoteLists(updatedLists);
  };

  const value = {
    upvoteLists,
    toggleUpvote,
    addUpvoteToList,
  };

  return <UpvoteContext.Provider value={value}>{children}</UpvoteContext.Provider>;
};
