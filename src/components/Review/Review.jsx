import { useSelector } from 'react-redux';
import axios from 'axios';

function Review() {
  let reviewFeelings = useSelector((store) => store.feelingReducer);
  let reviewUnderstanding = useSelector((store) => store.understandingReducer);
  let reviewSupport = useSelector((store) => store.supportReducer);
  let reviewComments = useSelector((store) => store.commentReducer);

  const handleSubmit = (event) => {
    event.preventDefault();

    let newReview = {
      feelings: reviewFeelings,
      understanding: reviewUnderstanding,
      support: reviewSupport,
      comments: reviewComments,
    };

    console.log('Adding review to database:', { newReview });

    axios({
      method: 'POST',
      url: '/feedback',
      data: newReview,
    })
      .then((res) => {
        alert('Thank you for your feedback!');
      })
      .catch((error) => {
        console.log('Error in /feedback POST route:', error);
      });
  };

  return (
    <>
      <div className='App-header'>
        <h1>Review</h1>
        <h4>Please review your submissions.</h4>
      </div>
      <h3>Feelings: {reviewFeelings}</h3>
      <h3>Understanding: {reviewUnderstanding}</h3>
      <h3>Support: {reviewSupport}</h3>
      <h3>Comments: {reviewComments}</h3>
      <form onSubmit={handleSubmit}>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Review;
