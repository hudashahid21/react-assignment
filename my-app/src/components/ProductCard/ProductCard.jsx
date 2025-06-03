import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '360px', // controlled max width for good alignment
        height: '500px', // reduced height
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #ddd',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        margin: '0 auto',
        transition: 'transform 0.2s ease-in-out',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      <div
        style={{
          width: '100%',
          height: '60%', // image takes ~60% of height
          overflow: 'hidden',
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
      <div
        style={{
          flex: 1,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h6
          style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#222',
            marginBottom: '12px',
            lineHeight: '1.3',
          }}
        >
          {product.name}
        </h6>
        <p style={{ margin: 0, fontSize: '1.1rem' }}>
          <span style={{ color: 'red', fontWeight: '700', marginRight: '10px' }}>
            ${product.price}
          </span>
          <del style={{ color: '#888' }}>${product.originalPrice}</del>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
