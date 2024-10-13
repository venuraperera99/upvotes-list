import React from 'react';
import Upvote from './Upvote';
import { useUpvoteContext } from '../context/UpvoteContext';
import plusIcon from '../icons/plus.svg';

const UpvoteList = ({ listIndex }) => {
  const { upvoteLists, toggleUpvote, addUpvoteToList } = useUpvoteContext();
  const upvotes = upvoteLists[listIndex];

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px' }}>
        {upvotes.map((isSelected, index) => (
          <Upvote
            key={index}
            isSelected={isSelected}
            onClick={() => toggleUpvote(listIndex, index)}
          />
        ))}
      </div>
      <button onClick={() => addUpvoteToList(listIndex)} style={{ marginTop: '10px', cursor: 'pointer' }}>
        <img src={plusIcon} alt="Add" />
      </button>
    </div>
  );
};

export default UpvoteList;
