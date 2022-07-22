import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";

const ProductPage = ({products}) => {
  const { id } = useParams();

 let product = products.find((p)=>p.id == id)
console.log(id);
  return (
    <>
    <h1>
      Product name: {product.name}
    </h1>
    <h1>
      Product price: {product.price}
    </h1>
    </>
  );
};

export default ProductPage;
