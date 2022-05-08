import { useHistory } from 'react-router-dom';

function StartFeedback() {
  const history = useHistory();

  const goToNextPage = () => {
    history.push('/feeling');
  };

  return <button onClick={goToNextPage}>Start Feedback</button>;
}

export default StartFeedback;
