import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Understanding() {
  let dispatch = useDispatch();

  const [understanding, setUnderstanding] = useState('');

  const addUnderstanding = (event) => {
    event.preventDefault();

    console.log('In addUnderstanding:', understanding);

    dispatch({
      type: 'SET_UNDERSTANDING',
      payload: understanding,
    });
  };

  return (
    <div>
      <h1>How well are you understanding the content?</h1>
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
