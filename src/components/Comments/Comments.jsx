import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';

function Comments() {
  let dispatch = useDispatch();
  const history = useHistory();

  const [comment, setComment] = useState('');

  const addComment = (event) => {
    event.preventDefault();

    console.log('In addComment:', comment);

    dispatch({
      type: 'SET_COMMENT',
      payload: comment,
    });

    setComment('');
    goToNextPage();
  };

  const goToNextPage = () => {
    history.push('/review');
  };

  return (
    <div>
      <Typography variant='h3' color='primary' align='center'>
        Any comments you want to leave?
      </Typography>
      <form onSubmit={addComment}>
        <p>Please enter your comments here:</p>
        <textarea
          type='text'
          placeholder='Comment'
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <button>NEXT</button>
      </form>
    </div>
  );
}

export default Comments;
