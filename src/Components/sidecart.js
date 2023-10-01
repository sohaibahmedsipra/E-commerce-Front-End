import './sidecart.css';
import { useContext } from 'react';
import { CartContext } from './CartProvider';
import SidecartProduct from './sidecart-product';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Sidecart = ({ sidecart, setSidecart }) => {
    const { cartItems } = useContext(CartContext);
    const { carttotal } = useContext(CartContext);

    const handleCloseSidecart = () => {
        setSidecart(false);
    };

    return (
        <div className={sidecart ? "sidecart-active" : "sidecart-inactive"}>
            <button className="sidecart-close-btn" onClick={handleCloseSidecart}>X</button>
            <ShoppingCartIcon className='icon' />
            {cartItems.length === 0 ? (
                <p className="sidecart-empty">Your cart is empty!</p>
            ) : (
                cartItems.map((item) => (
                    <SidecartProduct key={item.id} {...item} selectedSize={item.selectedSize} />
                ))
            )}
            {cartItems.length !== 0 && (
                <div className="sidecart-total">
                    <p>Total: Rs {carttotal}/-</p>
                </div>
            )
            }

        </div>
    );
};

export default Sidecart;
