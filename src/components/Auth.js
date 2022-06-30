import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Auth = () => {
  
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  
  const toggleLogin = () => {
      dispatch(authActions.login());
    }
  
  const HandleFormSubmit = (e) => { 
    e.preventDefault();
    toggleLogin();  
    
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={HandleFormSubmit}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
