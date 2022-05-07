import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Support() {
  let dispatch = useDispatch();

  const [support, setSupport] = useState(0);

  const addSupport = (event) => {
    event.preventDefault();

    console.log('In addSupport:', support);

    dispatch({
      type: 'SET_SUPPORT',
      payload: support,
    });
  };

  return (
    <div>
      <h1>How well are you being supported?</h1>
      <form onSubmit={addSupport}>
        <p>Please pick a number between 5 and 1 (5 High, 1 Low):</p>
        <input
          type='number'
          placeholder='Support'
          value={support}
          onChange={(event) => setSupport(event.target.value)}
        />
        <button>NEXT</button>
      </form>
    </div>
  );
}

export default Support;
