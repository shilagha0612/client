import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then(() => {
        navigate('/products', { replace: true }); // Redirect to the product list after deletion
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>

      <button onClick={handleDelete}>Delete</button>
      <Link to={`/products/${id}/edit`}>Edit</Link> {/* Link to the edit page */}
    </div>
  );
};

export default ProductDetail;
