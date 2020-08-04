import React from 'react';
import './App.css';
import Header from './components/Header';
import NavArrow from './components/NavArrow';
import Slider from './components/Slider';
import SlidesCarousel from './components/SlidesCarousel';
import { Button, Layout } from 'antd';

function App() {
  return (
    <Layout>
      <Header />
      <Slider />
      <SlidesCarousel />
    </Layout>
  );
}

export default App;
