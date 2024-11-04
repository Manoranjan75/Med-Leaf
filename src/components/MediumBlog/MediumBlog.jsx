import React from 'react';
import './MediumBlog.css';
import { assets } from '../../assets/assets';

const MediumBlog = () => {
  return (
    <div className='medium-blog' id='medium-blog'>
      <p>To learn more about medicinal plants, explore our blog posts on </p>
      <div className="medium-blog-logo">
        <a href="https://medium.com/@Med-Leaf" target="_blank" rel="noopener noreferrer">
          <img src={assets.medium_logo} alt="Medium Blog Logo" />
        </a>
      </div>
    </div>
  );
};

export default MediumBlog;
