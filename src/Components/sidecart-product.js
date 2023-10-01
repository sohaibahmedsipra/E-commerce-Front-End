import './sidecart-product.css';
import { useContext } from 'react';
import { CartContext } from './CartProvider';

const SidecartProduct = ({id, name, price, image, selectedSize, quantity }) => {
  const totalPrice = price[selectedSize];
  const { removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = () => {
    removeFromCart(id, selectedSize,quantity);
  };

  return (
    <div className="sidecart-product">
      <div className="image">
        <img src={image.front} alt={name} />
      </div>

      <div className="details">
        <p className="sidecart-product-name">
          {name} ({selectedSize})
        </p>
        <p className="sidecart-product-price">{totalPrice} X {quantity}</p>
      </div>

      <div className="remove-btn">
        <button className="btn" onClick={handleRemoveFromCart}>
          x
        </button>
      </div>
    </div>
  );
};

export default SidecartProduct;
