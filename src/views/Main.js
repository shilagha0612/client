// // import React, { useEffect, useState } from 'react';
// // import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// // import axios from 'axios';
// // import ProductForm from '../components/ProductForm';
// // import ProductList from '../components/ProductList';

// // const Main = () => {
// //   const [products, setProducts] = useState([]);
// //   const [loaded, setLoaded] = useState(false);

// //   useEffect(() => {
// //     axios
// //       .get('http://localhost:8000/api/products')
// //       .then((res) => {
// //         setProducts(res.data);
// //         setLoaded(true);
// //       })
// //       .catch((err) => console.error(err));
// //   }, []);

// //   return (
// //     <div>
// //       <ProductForm />
// //       <hr />
// //       {loaded && <ProductList products={products} />}
// //     </div>
// //   );
// // };

// // export default Main;



// import React, { useEffect, useState } from "react";
// import {Routes, Route, Link } from "react-router-dom";
// import axios from "axios";
// import ProductForm from "../components/ProductForm";
// import ProductList from "../components/ProductList";
// import ProductDetail from "../components/ProductDetail";

// const Main = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         axios
//             .get("http://localhost:8000/api/products")
//             .then((res) => {

//             setProducts(res.data)})
//             .catch((err) => console.error(err));
//     }, []);

//     return (
//         <div>

//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/products">Product List</Link>
//                         </li>
//                         <li>
//                             <Link to="/products/new">Add Product</Link>
//                         </li>
//                     </ul>
//                 </nav>
//                 <ProductForm/>
//                 <ProductList  products={products}/>
//         </div>
//     );
// };

// export default Main;
import React, { useEffect, useState } from "react";
import { Routes, Route, Link} from "react-router-dom";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import { useParams } from "react-router-dom";
import EditProductForm from "../components/EditProductForm"

const Main = (props) => {
  const [products, setProducts] = useState([]);
  const { id } = useParams
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleProductSubmit = (newProduct) => {
    setProducts([...products, newProduct]);
  };

console.log(products)

  return (
    <div>
     
      <Routes>
        {/* <Route path="/" element={<ProductList products={products} setProducts={setProducts} />} /> */}

        <Route path="/products" element={<ProductList products={products}/>} />
      
        <Route path="/products/add" element={<ProductForm onSubmit={handleProductSubmit} />}/>

        <Route path="/products/:id" element={<ProductDetail />} />

         <Route element={<EditProductForm/>} path="/products/:id/edit"/>

      </Routes>
    </div>
  );
};

export default Main;
