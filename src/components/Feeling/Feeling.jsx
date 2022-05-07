import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Feeling() {
  let dispatch = useDispatch();

  const [feeling, setFeeling] = useState(0);

  const addFeeling = (event) => {
    event.preventDefault();

    console.log('In addFeeling:', feeling);

    dispatch({
      type: 'SET_FEELING',
      payload: feeling,
    });
  };

  return (
    <div>
      <h1>How are you feeling today?</h1>
      <form onSubmit={addFeeling}>
        <p>Please pick a number between 5 and 1 (5 High, 1 Low):</p>
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
