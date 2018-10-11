import React, { Component } from 'react'

export default class BigImage extends Component {
  render() {
    return (
      <div style={{ marginTop: '9rem' }}>
        <a className="hero-banner" href="//www.amazon.com/gp/goldbox/?tag=dotdb-20&ascsubtag=v7_1_3_g_P0_0_x01_-srt-" target="_blank" rel="noopener noreferrer">
          <img className="mt-4 responsive-img" src="/images/amazon.png" alt="An amazon" />
        </a>
      </div>
    )
  }
}
