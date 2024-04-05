import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import Home from "./Home"
import ProductsView from './component/product/ProductsView';
import NavBar from './component/common/NavBar';
import AddProduct from './component/product/AddProduct';
import EditProduct from './component/product/EditProduct';
import ProductDetails from './component/product/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className="container mt-5">
     <Router>
     <NavBar />
     {/* <ProductsView /> */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/view-products" element={<ProductsView />}></Route>
        <Route exact path="/add-product" element={<AddProduct />}></Route>
        <Route exact path="/edit-product/:id" element={<EditProduct />}></Route>
        <Route exact path="/product-details/:id" element={<ProductDetails />}></Route>
      </Routes>
     </Router>
    </main>
  );
}

export default App;
