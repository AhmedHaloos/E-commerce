import React from "react";
import Product from '../Components/Product'


function Cart(props){
        const {products, handleIncrement, handleDecrement, handleReset, handleDeleteProduct} = props;


      

        return (
            <>
              {products.length === 0 && <h1>Cart is empty</h1>}
              {products.map((p) => (
                <Product
                  key={p.id}
                  product={p}
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                  handleDeleteProduct = {handleDeleteProduct}
                />
              ))}
              {products.length !== 0 && (
                <div onClick={() => handleReset()} className="btn btn-secondary ms-2">
                  Reset
                </div>
              )}
            </>
          );
    }

export default Cart;
