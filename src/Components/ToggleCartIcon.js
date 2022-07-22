const ToggleCartIcon = ({ isInCart, handleAddToCart, id }) => {
    return (
      <div style={{cursor : 'pointer'}} onClick={()=>{handleAddToCart(id)}}>
        {isInCart ? (
          <i className="fa-solid fa-cart-shopping"></i>
        ) : (
          <i
            style={{ color: "gray", opacity: "0.5" }}
            className="fa-solid fa-cart-shopping"
          ></i>
        )}
      </div>
    );
  };
  
  export default ToggleCartIcon;
  