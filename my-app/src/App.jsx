import React from 'react';
import Navbar from './components/Navbar/Navbar';
import PromoBanner from './components/PromoBanner/PromoBanner';
import Footer from './components/Footer/Footer';
import ProductSection from './components/ProductSection/ProductSection';
import CategoryIcons from './components/CategoryIcons/CategoryIcons';

const App = () => {
  return (
    <>
      <Navbar />
      <CategoryIcons />
      <ProductSection title="Best Selling Products" filter="best" />
      <ProductSection title="Extra Sale Products" filter="sale" />
      <PromoBanner />
      <Footer />
    </>
  );
};

export default App;
