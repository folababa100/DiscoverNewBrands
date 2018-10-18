import React, { Component } from 'react'

export default class TimeRangeSorting extends Component {
  render() {
    return (
      <div className="d-none d-md-block container-adjusted container mt-4" style={{ letterSpacing: '-2px' }}>
        <ul>
          <li className="filter-list" style={{ 'backgroundColor': 'rgb(22, 107, 162)',
    'borderRadius': '5px', 'padding': '0.1rem 0.5rem', 'lineHeight': '1.2' }}><a style={{ 'textAlign': 'center', 'color': 'white' }} className="auto-localize" href="/"><i className="ion-filter ion-arrow-down-b"></i> Newest</a></li>
          <li className="filter-list"><a className="auto-localize" href="/">Newest</a></li>
          <li className="filter-list"><a className="auto-localize" href="/">Newest</a></li>
          <li className="filter-list"><a className="auto-localize" href="/">Newest</a></li>
          <li className="filter-list"><a className="auto-localize" href="/">Newest</a></li>
        </ul>
      </div>
    )
  }
}
