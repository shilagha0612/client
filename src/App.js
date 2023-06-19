// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Main from './views/Main';
// import ProductDetail from './components/ProductDetail';
// import ProductForm from './components/ProductForm';

// const App = () => {
//   return (
    
//     <BrowserRouter>
//     <ProductForm/>
//       <Routes>
//         <Route exact path="/" component={Main} />
//         <Route exact path="/products/:id" component={ProductDetail} />
        
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route ,Link} from "react-router-dom";
import Main from "./views/Main";
// import ProductDetail from "./components/ProductDetail";
// import ProductForm from "./components/ProductForm";
// import EditProductForm from "./components/EditProductForm";
// import ProductList from "./components/ProductList";

const App = () => {
  return (
    

    
    <>
    <nav>
    <ul>
      <li>
        <Link to={"/products"}>Product List</Link>
      </li>
      <li>
        <Link to={"/products/add"}>Add Product</Link>
      </li>
      </ul>
      </nav>

    <Routes>
        <Route path="*" element={<Main />} />
        {/* <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/add" element={<ProductForm />} />
        <Route element={<EditProductForm/>} path="/products/:id/edit"/>
        <Route path="/products" element={<ProductList/>}/> */}
        
        
      </Routes>
    </>
    
      
    
  );
};

export default App;
