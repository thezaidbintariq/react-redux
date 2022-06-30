import Counter from './components/Counter';
import { Fragment } from 'react';
import Headers from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/index';

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Fragment>
      <Headers />
      {isLoggedIn ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
