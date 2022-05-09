import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function RedoAnswer() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <Button variant='contained' onClick={goBack}>
      Return to Previous Page
    </Button>
  );
}

export default RedoAnswer;
