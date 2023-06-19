// import React ,{useEffect, useState}from "react";
// import {useParams} from 'react-router-dom'
// import axios from 'axios'

// const ProductList = () => {
//  const  [product,setProduct]=useState({})
// const {id}=useParams()

//   useEffect((id) => {
//     axios
//         .get(`http://localhost:8000/api/products/${id}`)
//         .then((res) => {
//             console.log(res)
//         setProduct(res.data)})
//         .catch((err) => console.error(err));

// }, []);
// console.log(`http://localhost:8000/api/products/${id}`)

//   return (
//     <div>
      
//         <div key={product._id}>
//           <p>Name: {product.title}</p>
//           <p>Price: {product.price}</p>
//           <p>Description: {product.description}</p>
//         </div>
      
//     </div>
//   );
// };

// export default ProductList;
import React, { useEffect, useState } from "react";
import { useParams , Link} from "react-router-dom";
import axios from "axios";


const ProductItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  return (
    <div>
      <div>
        <p>Name: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        
      </div>
    </div>
  );
};

export default ProductItem;
