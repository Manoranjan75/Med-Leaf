import React from 'react';
import './About.css';
import { assets } from '../../assets/assets';

const About = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>Welcome to Med-Leaf: A medicinal plant ordering system, where you find a wide variety of medicinal plant categories:</p>
      <ul>
        <li>Digestive</li>
        <li>Immune Boosters</li>
        <li>Respiratory</li>
        <li>Skin Care</li>
        <li>Stress Relief</li>
        <li>Pain Relief</li>
        <li>Heart</li>
        <li>Mood Fresh</li>
      </ul>
      <p>Our website also provides valuable insights through blogs on Medium, offering tips and information on how to utilize these plants for wellness and health.</p>

      <h2>Our Mission</h2>
      <p>At Med-Leaf, our mission is to bridge the gap between ancient wisdom and modern wellness by making medicinal plants accessible to everyone. We believe in the healing power of nature and aim to empower individuals with knowledge and resources to improve their health naturally.</p>

      <h2>Our Values</h2>
      <p>We are committed to:</p>
      <ul>
        <li><strong>Quality:</strong> Sourcing the finest medicinal plants to ensure the best for our customers.</li>
        <li><strong>Sustainability:</strong> Supporting sustainable farming practices to preserve our environment and heritage.</li>
        <li><strong>Education:</strong> Providing information and resources to help our customers make informed decisions about their health.</li>
      </ul>

      <h2>About the Developer </h2>
      <div className="owner-info">
        <img src={assets.developer_img} alt="Manoranjan Kumar" className="author-image" />
        <div>
          <p><strong>Name:</strong> Manoranjan Kumar</p>
          <p><strong>Education:</strong> B.Tech Final Year Student</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/manoranjan-kumar-57b1a723b/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/Manoranjan75" target="_blank" rel="noopener noreferrer">Github</a></p>
          <p><strong>Bio:</strong> Currently I am  a Computer Science Engineering student with knowledge in C++, ServiceNow, and web development. I have developed Med-Leaf, an online platform aimed at expanding access to natural wellness.</p>
        </div>
      </div>

      <h2>Our Story</h2>
      <p>The idea for Med-Leaf originated from observing the struggles of a nearby plant nursery that had a rich variety of plants, including medicinal ones. Despite the quality of their offerings, the business faced challenges due to poor management and lack of proper advertising.</p>
      <p>Inspired to make a difference, I created Med-Leaf to provide a platform where quality medicinal plants can thrive in the market and reach those who can benefit from them.</p>

      <h2>Med-Leaf: Ancient Wisdom, Modern Wellness</h2>
      <p>From India's Sacred Gardens</p>
    </div>
  );
};

export default About;
