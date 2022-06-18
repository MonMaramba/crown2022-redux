import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase.utils';

import './navigation.styles.scss';

import { ReactComponent as Crwnlogo } from '../../assets/crown.svg';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);

  const signOutHandler = async () => {
    await signOutUser();
  };
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Crwnlogo className='logo' />
        </Link>

        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              LOG OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
