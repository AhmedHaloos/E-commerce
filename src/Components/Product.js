import { useState } from "react";

const Product = ({product, handleDecrement, handleIncrement, handleDeleteProduct}) => {
    const {id,  name, price, count } = product;
  


    return (
      <div className="row p-2">
        <span className="fw-bold col-3">{name}</span>
        <span className="col-2">{price} $</span>
        <div
          onClick={() => handleIncrement(id)}
          className="btn btn-primary col-1"
        >
          +
        </div>
        <span className="col-1 d-flex justify-content-center align-items-center">
          {count}
        </span>
        <div
          onClick={() => handleDecrement(id)}
          className="btn btn-primary col-1"
        >
          -
        </div>
        {/*  */}
        <div className="btn btn-danger btn-sm col-1 mx-2" onClick={()=>{handleDeleteProduct(id)}} >
          <i className="fa-solid fa-trash-can"></i>
        </div>
      </div>
    );
  };
  
  export default Product;
  