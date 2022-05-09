import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

function ThankYou() {
  const history = useHistory();

  const goToNextPage = () => {
    history.push('/');
  };

  return (
    <>
      <div className='App-header'>
        <Typography variant='h1' color='primary' align='center'>
          Thanks!
        </Typography>
        <h4>Your feedback has been submitted.</h4>
      </div>
      <Button variant='contained' onClick={goToNextPage}>
        Leave New Feedback
      </Button>
    </>
  );
}

export default ThankYou;
