import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * 85 * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>Your cart is empty</h2>
        <Link to="/">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>Shopping Cart</h1>
      <div className={styles.items}>
        {cart.map(item => (
          <div key={item.id} className={styles.item}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.info}>
              <h3>{item.title.slice(0,60)}</h3>
              <p>₹{(item.price * 85).toFixed(2)} each</p>
              <div className={styles.quantity}>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className={styles.remove}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.summary}>
        <h3>Total: ₹{total.toFixed(2)}</h3>
        <button onClick={clearCart} className={styles.clearBtn}>Clear Cart</button>
        <button className={styles.checkout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;