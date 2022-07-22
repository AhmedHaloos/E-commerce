import './App.css';
import Menu from './Pages/Menu';
import Home from './Pages/Home'
import About from './Pages/About';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import AboutCompany from './Pages/AboutCompany';
import Header from './Components/Header';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import AboutTeams from './Pages/AboutTeams';
import ProductPage from './Pages/ProductPage';



function App() {

// -----------------------------------------------------------------------------------//
  const [products, setProducts] = useState( [
    { id: '0', name: 'Burger large', price: 30, count: 0, isInCart: false, category: '1' },
    { id: '1', name: 'Burger medium', price: 25, count: 0, isInCart: false, category: '1' },
    { id: '2', name: 'Burger small', price: 15, count: 0, isInCart: false, category: '1' },
    { id: '3', name: 'Cola large', price: 35, count: 0, isInCart: false, category: '2' },
    { id: '4', name: 'Cola medium', price: 25, count: 0, isInCart: false, category: '2' },
    { id: '5', name: 'Cola small', price: 10, count: 0, isInCart: false, category: '2' },
    { id: '6', name: 'Fries large', price: 40, count: 0, isInCart: false, category: '3' },
    { id: '7', name: 'Fries medium', price: 35, count: 0, isInCart: false, category: '3' },
    { id: '8', name: 'Fries small', price: 15, count: 0, isInCart: false, category: '3' },
    { id: '9', name: 'Burger2 large', price: 30, count: 0, isInCart: false, category: '1' },
    { id: '18', name: 'Fries2 small', price: 15, count: 0, isInCart: false, category: '3' },
    { id: '19', name: 'Burger3 large', price: 30, count: 0, isInCart: false, category: '1' },
    { id: '20', name: 'Burger3 medium', price: 25, count: 0, isInCart: false, category: '1' },
    { id: '21', name: 'Burger3 small', price: 15, count: 0, isInCart: false, category: '1' },
    { id: '22', name: 'Cola3 large', price: 35, count: 0, isInCart: false, category: '2' },
    { id: '23', name: 'Cola3 medium', price: 25, count: 0, isInCart: false, category: '2' },
    { id: '24', name: 'Cola3 small', price: 10, count: 0, isInCart: false, category: '2' },
    { id: '25', name: 'Fries3 large', price: 40, count: 0, isInCart: false, category: '3' },
    { id: '26', name: 'Fries3 medium', price: 35, count: 0, isInCart: false, category: '3' },
    { id: '27', name: 'Fries3 small', price: 15, count: 0, isInCart: false, category: '3' },
    { id: '10', name: 'Burger2 medium', price: 25, count: 0, isInCart: false, category: '1' },
    { id: '11', name: 'Burger2 small', price: 15, count: 0, isInCart: false, category: '1' },
    { id: '12', name: 'Cola2 large', price: 35, count: 0, isInCart: false, category: '2' },
    { id: '13', name: 'Cola2 medium', price: 25, count: 0, isInCart: false, category: '2' },
    { id: '14', name: 'Cola2 small', price: 10, count: 0, isInCart: false, category: '2' },
    { id: '15', name: 'Fries2 large', price: 40, count: 0, isInCart: false, category: '3' },
    { id: '16', name: 'Fries2 medium', price: 35, count: 0, isInCart: false, category: '3' },
]);

const categories = [
    { id: 0, name: "All" },
    { id: 1, name: "Burger" },
    { id: 3, name: "Fries" },
    { id: 2, name: "Cola" },
];
//---------------------------------------------------------------//

  function handleIncrement(id){

     // clone
     let newProducts = [...products];
     // update
     let index = newProducts.findIndex((product) => product.id === id);
     newProducts[index].count = newProducts[index].count + 1;
     newProducts[index].price = newProducts[index].count * newProducts[index].price;
     // setState
     setProducts(newProducts);

  }
  function handleDecrement(id){

    
   // clone
   const newProducts = [...products];
   // update
   const index = newProducts.findIndex((p) => p.id === id);
   if (newProducts[index].count > 0)
     newProducts[index].count = newProducts[index].count - 1;
   // setState
   setProducts(newProducts);

  }
  function handleReset(){

    // clone
    let newProducts = [...products];
    // update
    newProducts = newProducts.map((p) => {
      return { ...p, count: 0 };
    });
    // setState
    setProducts(newProducts);
  }

  const handleAddToCart = (productId) => {
    // clone
    let newProducts = [...products];
    // update
    let index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].isInCart = !newProducts[index].isInCart;
    newProducts[index].count = 1;
    // setState
    setProducts(newProducts);
    console.log(index)
  };

const handleDeleteProduct = (productId) => {
    // clone
    let newProducts = [...products];
    // update
    let index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].isInCart = false;
    newProducts[index].count = 1;
    // setState
    setProducts(newProducts);
    console.log(index)
  };
  
  return (
    <>
    <Router>
 
        <Header/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <Cart
                products = {products.filter((p) => p.isInCart)}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleReset={handleReset}
                handleDeleteProduct = {handleDeleteProduct}
              />
            }
          />
          <Route
            path="/menu"
            element={
              <Menu
                products={products}
                handleAddToCart={handleAddToCart}
                categories={categories}
              />
            }
          />
          <Route path="/about" element={<About />}>
            <Route path="team" element={<AboutTeams />} />
            <Route path="company" element={<AboutCompany />} />
          </Route>
          <Route path="/product/:id" element={<ProductPage products = {products}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  </>
  
  
  );
}

export default App;
