import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => { 
    dispatch(counterActions.toggleCounter());
  };

  const incrementByFiver = () => {
    dispatch(counterActions.incrementByFive(5));
  }

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  }
  
  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  
  }
  

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button className={classes.changer} onClick={incrementCounterHandler}>Increment</button>
      <button className={classes.changer} onClick={incrementByFiver}>Increase By Five</button>
      <button className={classes.changer} onClick={decrementCounterHandler}>Decrement</button>
      <br></br>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
