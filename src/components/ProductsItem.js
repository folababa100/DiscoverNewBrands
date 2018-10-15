import React, { Component } from 'react'

export default class ProductsItem extends Component {
  render() {
    return (
      <article className="col-md-4 col-12 mt-4">
        <h3 className="mb-2">
          <a className="a-style" href="/">Motorized Drink Cooler</a>
        </h3>
        <img className="img" alt="Products" src="/images/amazon.png"></img>
        <div className="details">
          <p>Don’t let a silly DUI license suspension stop you from enjoying your god-given-right to recklessly cruise around while drinking – with the motorized cooler scooter you can stay mobile while keeping your freedom fighting beers as cold as the rockies. ‘Murica salutes you!</p>
        </div>
        <div style={{ 'display': 'flex', 'justifyContent': 'space-between' }} className="details-action">
          <div className="price-save">
            <div className="price">
              $229.99
            </div>
            <div className="save">
              191 saves
            </div>
          </div>
          <div className="action-btn">
            <button className="btn-checkitout">
              CHECK IT OUT
            </button>
          </div>
        </div>
      </article>
    )
  }
}
