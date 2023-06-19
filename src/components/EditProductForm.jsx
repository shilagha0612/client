// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from "react-router-dom"

// const EditProductForm = ({ productId }) => {
//   const {id}=useParams()
//   const [title, setTitle] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8000/api/products/${id}`)
//       .then((res) => {
//         const { title, price, description } = res.data;
//         setTitle(title);
//         setPrice(price);
//         setDescription(description);
//       })
//       .catch((err) => console.error(err));
//   }, [productId]);

//   const onUpdateHandler = (e) => {
//     e.preventDefault();
//     const updatedProduct = { title, price, description };

//     axios
//       .put(`http://localhost:8000/api/products/${id}`, updatedProduct)
//       .then((res) => {
//         console.log(res.data);
//         // Handle successful update, if needed
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <form onSubmit={onUpdateHandler}>
//       <p>
//         <label>Title:</label>
//         <br />
//         <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
//       </p>
//       <p>
//         <label>Price:</label>
//         <br />
//         <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} />
//       </p>
//       <p>
//         <label>Description:</label>
//         <br />
//         <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
//       </p>
//       <input type="submit" value="Update Product" />
//     </form>
//   );
// };

// export default EditProductForm;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/products/${id}`, {
        title,
        price,
        description,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={updateProduct}>
        <p>
          <label>Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {setTitle(e.target.value)}}
          />
        </p>
        <p>
          <label>Price</label>
          <br />
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => {setPrice(e.target.value)}}
          />
        </p>
        <p>
          <label>Description</label>
          <br />
          <textarea
            name="description"
            value={description}
            onChange={(e) =>{setDescription(e.target.value)}}
          />
        </p>
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateProduct;
