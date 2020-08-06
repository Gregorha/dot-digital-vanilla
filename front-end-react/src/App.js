import React from 'react';
import './App.css';
import Header from './components/Header/';
import Slider from './components/Slider/';
import SlidesCarousel from './components/Carousel';
import Article from './components/Article/';
import { Layout } from 'antd';
import Accordion from './components/Accordion/';
import FormComponent from './components/Form/';
import Footer from './components/Footer/';

function App() {
  return (
    <Layout>
      <Header />
      <Slider />
      <SlidesCarousel />
      <Article />
      <Accordion />
      <FormComponent />
      <Footer />
    </Layout>
  );
}

export default App;
