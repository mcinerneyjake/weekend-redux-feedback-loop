import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support() {
  let dispatch = useDispatch();
  const history = useHistory();

  const [support, setSupport] = useState(0);

  const addSupport = (event) => {
    event.preventDefault();

    console.log('In addSupport:', support);

    dispatch({
      type: 'SET_SUPPORT',
      payload: support,
    });

    setSupport(0);

    if (support > 0 && support <= 5) {
      goToNextPage();
    } else {
      alert('Please select a number between 1 and 5.');
    }
  };

  const goToNextPage = () => {
    history.push('/comments');
  };

  return (
    <div>
      <h1>How well are you being supported?</h1>
      <form onSubmit={addSupport}>
        <p>Please enter a number between 5 and 1 (5 High, 1 Low):</p>
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
