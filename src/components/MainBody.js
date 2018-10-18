import React, { Component } from 'react';
import MainBodyDesign from './MainBodyDesign';
import { connect } from "react-redux";
import { startAddProduct } from '../actions/products';

export class MainBody extends Component {
  onSubmit = (product) => {
    this.props.startAddProduct(product);
  }
  render() {
    return (
      <div>
        <MainBodyDesign
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddProduct: (product) => dispatch(startAddProduct(product))
})

export default connect(undefined, mapDispatchToProps)(MainBody)
