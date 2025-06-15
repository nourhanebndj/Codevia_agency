// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-16">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
