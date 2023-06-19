// import React from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const ProductList = (props) => {
//   const {products, onDelete}= props

//   const handleDelete=(id)=>{
//     axios.delete(`http://localhost:8000/api/products/${id}`)
//     .then(()=>{
//       onDelete(id)
//     })
//     .catch((err)=> console.log(err))
//   };

//   console.log(products)

//   return (
//     <div>
//       <h2>Product List</h2>
//       {products.map((product) => {
//         const url=`/products/${product._id}`
//         return(
//         <p>
//           <Link to={url}>{product.title}</Link>


//           </p>
//           <p>
//             <button onClick={() => handleDelete(product._id)}>Delete</button>

//           </p>


//         )

//       })}

//         {/* // <ProductItem key={product._id} product={product} /> */}


//     </div>
//   );
// };

// export default ProductList;



import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {

  const { products, setProducts } = props
  console.log("this is product list page", props)
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then(() => {
        // Remove the deleted product from the products state
        setProducts(products.filter((product) => product._id !== id));
      })
      .catch((err) => console.error(err));
  };
  if (!products || products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => {
        return (
          <div key={product._id}>
            <h3>
              <Link to={`/products/${product._id}`}>{product.title}</Link>
            </h3>
            {/* <p>Price: ${product.price}</p>
             <p>{product.description}</p> */}
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </div>
        )

      }
      )}

    </div>
  );
};

export default ProductList;
