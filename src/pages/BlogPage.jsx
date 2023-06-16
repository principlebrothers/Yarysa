import React from 'react';
import Footer from '../components/footer/Footer';
import Blogs from '../components/blogs/Blogs';
import Navbar from '../components/blogs/header/Navbar';

function BlogPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#2f2e41',
      }}
    >
      <Navbar />
      <div className="responsive-container">
        <Blogs />
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
