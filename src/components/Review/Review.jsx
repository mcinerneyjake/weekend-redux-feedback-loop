import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';

function Review() {
  let feeling = useSelector((store) => store.feelingReducer);
  let understanding = useSelector((store) => store.understandingReducer);
  let support = useSelector((store) => store.supportReducer);
  let comments = useSelector((store) => store.commentReducer);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    let newReview = {
      feeling,
      understanding,
      support,
      comments,
    };

    console.log('Adding review to database:', { newReview });

    axios({
      method: 'POST',
      url: '/feedback',
      data: newReview,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log('Error in /feedback POST route:', error);
      });

    goToNextPage();
  };

  const goToNextPage = () => {
    history.push('/thank-you');
  };

  return (
    <>
      <div className='App-header'>
        <Typography variant='h1' color='primary' align='center'>
          Review
        </Typography>
        <Typography variant='h4' color='primary' align='center'>
          Please review your submissions.
        </Typography>
      </div>
      <h3>Feelings: {feeling}</h3>
      <h3>Understanding: {understanding}</h3>
      <h3>Support: {support}</h3>
      <h3>Comments: {comments}</h3>
      <form onSubmit={handleSubmit}>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Review;
