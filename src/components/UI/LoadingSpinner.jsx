import { Spinner } from 'react-bootstrap';
import classes from './HandelFetchComponents.module.css'



const LoadingSpinner = () => {
  return (
    <div className={classes.classPositioned}>
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="primary" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default LoadingSpinner;