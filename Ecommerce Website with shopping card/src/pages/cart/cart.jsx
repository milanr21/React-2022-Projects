import React, { useContext } from 'react';
import { ShopContext } from '../../context/context-shop';
import { PRODUCTS } from '../../products';
import CartItem from './cart-item';
import { useNavigate } from 'react-router-dom';
import './cart.css';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalaAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalaAmount > 0 ? (
        <div className='checkout'>
          <p>Subtotal: ${totalaAmount}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
