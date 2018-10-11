import React, { Component } from 'react'

export default class ProductsItem extends Component {
  render() {
    return (
      <article className="col-md-4 col-12 mt-4">
        <h3 className="mb-2">
          <a href="/">Motorized Drink Cooler</a>
        </h3>
        <img className="img" alt="Products" src="/images/amazon.png"></img>
        <div className="details">
          <p>Don’t let a silly DUI license suspension stop you from enjoying your god-given-right to recklessly cruise around while drinking – with the motorized cooler scooter you can stay mobile while keeping your freedom fighting beers as cold as the rockies. ‘Murica salutes you!
</p>
        </div>
      </article>
    )
  }
}
