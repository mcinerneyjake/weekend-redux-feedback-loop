import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';

function Understanding() {
  let dispatch = useDispatch();
  const history = useHistory();

  const [understanding, setUnderstanding] = useState(0);

  const addUnderstanding = (event) => {
    event.preventDefault();

    console.log('In addUnderstanding:', understanding);

    dispatch({
      type: 'SET_UNDERSTANDING',
      payload: understanding,
    });

    setUnderstanding(0);

    if (understanding > 0 && understanding <= 5) {
      goToNextPage();
    } else {
      alert('Please select a number between 1 and 5.');
    }
  };

  const goToNextPage = () => {
    history.push('/support');
  };

  return (
    <div>
      <Typography variant='h3' color='primary' align='center'>
        How well are you understanding the content?
      </Typography>
      <form onSubmit={addUnderstanding}>
        <p>Please enter a number between 5 and 1 (5 High, 1 Low):</p>
        <input
          type='number'
          placeholder='Understanding'
          value={understanding}
          onChange={(event) => setUnderstanding(event.target.value)}
        />
        <button>NEXT</button>
      </form>
    </div>
  );
}

export default Understanding;
