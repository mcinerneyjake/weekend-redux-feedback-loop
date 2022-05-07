import { useSelector } from 'react-redux';

function Review() {
  let reviewFeelings = useSelector((store) => store.feelingReducer);
  let reviewUnderstanding = useSelector((store) => store.understandingReducer);
  let reviewSupport = useSelector((store) => store.supportReducer);

  return (
    <>
      <div className='App-header'>
        <h1>Review</h1>
        <h4>Please review your submissions.</h4>
      </div>
      <h3>Feelings: {reviewFeelings}</h3>
      <h3>Understanding: {reviewUnderstanding}</h3>
      <h3>Support: {reviewSupport} </h3>
      <h3>Comments: </h3>
      <button>Submit</button>
    </>
  );
}

export default Review;
