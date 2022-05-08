import { useHistory } from 'react-router-dom';

function ThankYou() {
  const history = useHistory();

  const goToNextPage = () => {
    history.push('/');
  };

  return (
    <>
      <div className='App-header'>
        <h1>Thank you for your feedback!</h1>
        <h4>Your feedback has been submitted.</h4>
      </div>
      <button onClick={goToNextPage}>Leave New Feedback</button>
    </>
  );
}

export default ThankYou;
