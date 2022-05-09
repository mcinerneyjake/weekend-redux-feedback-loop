import { useHistory } from 'react-router-dom';

function RedoAnswer() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return <button onClick={goBack}>Return to Previous Page</button>;
}

export default RedoAnswer;
