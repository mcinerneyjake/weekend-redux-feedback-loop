import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';

function Feeling() {
  let dispatch = useDispatch();
  const history = useHistory();

  const [feeling, setFeeling] = useState(0);

  const addFeeling = (event) => {
    event.preventDefault();

    console.log('In addFeeling:', feeling);

    dispatch({
      type: 'SET_FEELING',
      payload: feeling,
    });

    setFeeling(0);

    if (feeling > 0 && feeling <= 5) {
      goToNextPage();
    } else {
      alert('Please select a number between 1 and 5.');
    }
  };

  const goToNextPage = () => {
    history.push('/understanding');
  };

  return (
    <div>
      <Typography variant='h3' color='primary' align='center'>
        How are you feeling today?
      </Typography>
      <form onSubmit={addFeeling}>
        <p>Please enter a number between 5 and 1 (5 High, 1 Low):</p>
        <input
          type='number'
          placeholder='Feeling'
          value={feeling}
          onChange={(event) => setFeeling(event.target.value)}
        />
        <button>NEXT</button>
      </form>
    </div>
  );
}

export default Feeling;
