import React from 'react';

const categories = [
  { name: 'Fashion', icon: 'bi-person' },
  { name: 'Mobiles', icon: 'bi-phone' },
  { name: 'Laptops', icon: 'bi-laptop' },
  { name: 'Furniture', icon: 'bi-house-door' },
  { name: 'Grocery', icon: 'bi-basket' },
  { name: 'Toys', icon: 'bi-joystick' },
  { name: 'Books', icon: 'bi-book' }
];

const CategoryIcons = () => (
  <div className="container my-4">
    <h5>Browse By Category</h5>
    <div className="d-flex justify-content-between flex-wrap">
      {categories.map((cat, idx) => (
        <div key={idx} className="text-center m-2">
          <div className="bg-light rounded-circle p-3 shadow-sm">
            <i className={`bi ${cat.icon}`} style={{ fontSize: '1.5rem' }}></i>
          </div>
          <div>{cat.name}</div>
        </div>
      ))}
    </div>
  </div>
);

export default CategoryIcons;
