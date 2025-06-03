import React from 'react';
import products from '../../assets/products';
import ProductCard from '../ProductCard/ProductCard';

const ProductSection = ({ title }) => {
  return (
    <div style={{ padding: '40px 0' }}>
      <h2
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '2rem',
          marginBottom: '30px',
        }}
      >
        {title}
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
