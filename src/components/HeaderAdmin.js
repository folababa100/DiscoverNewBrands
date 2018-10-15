import React, { Component } from 'react'

export default class HeaderAdmin extends Component {
  render() {
    return (
      <nav class="nav-adjusted navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Admin Dashboard</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    )
  }
}
