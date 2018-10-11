import React, { Component } from 'react';
import Header from './Header';
import BigImage from './BigImage';
import TimeRangeSorting from './TimeRangeSorting';
import ProductsBox from './ProductsBox';
import Footer from './Footer';
import LoadingGif from './LoadingGif';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <BigImage/>
        <TimeRangeSorting/>
        <ProductsBox/>
        <LoadingGif />
        <Footer/>
      </div>
    );
  }
}

export default App;
