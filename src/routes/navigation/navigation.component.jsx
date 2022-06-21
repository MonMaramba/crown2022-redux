import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase.utils';

import './navigation.styles.scss';

import { ReactComponent as Crwnlogo } from '../../assets/crown.svg';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  // console.log(currentUser);

  const signOutHandler = async () => {
    await signOutUser();
  };

  const cartHandler = async () => {
    await setIsCartOpen(true);
    console.log(isCartOpen);
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
          <CartIcon onClick={cartHandler} />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
