import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function StartFeedback() {
  const history = useHistory();

  const goToNextPage = () => {
    history.push('/feeling');
  };

  return (
    <Button variant='contained' onClick={goToNextPage}>
      Start Feedback
    </Button>
  );
}

export default StartFeedback;
