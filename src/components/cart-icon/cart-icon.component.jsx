import { useContext } from 'react';

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const cartDropper = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='cart-icon-container'>
      <ShoppingBagIcon className='shopping-icon' onClick={cartDropper} />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
