import Product_Card from './Components/Product_Card';
import './App.css';
import Navbar from './Components/Navbar';
import products from './productsdata';
import Sidecart from './Components/sidecart';
import Myfooter from './Components/Footer';
import { useState } from 'react';
import { CartProvider } from './Components/CartProvider';
import ResponsiveGrid from './Components/GridContainer';
function App() {
  const productsdata = products;

  const [sidecart, setSidecart] = useState(false);
  const [itemscount, setItemsCount] = useState(0);
  return (
    <div className="App">
      <CartProvider itemscount={itemscount} setItemscount={setItemsCount}>
        <Sidecart sidecart={sidecart} setSidecart={setSidecart} />
        <Navbar itemscount={itemscount} setItemscount={setItemsCount} sidecart={sidecart} setSidecart={setSidecart} />
        <div className="product-container">
          {productsdata.map((product) => (
            <Product_Card key={product.id} product={product} itemscount={itemscount} setitemscount={setItemsCount} />
          ))}
        </div>
      </CartProvider>
      <div className="grid-container">
        <ResponsiveGrid className="grid" />
      </div>
      <Myfooter className="foot" />
    </div>
  );
}

export default App;
