import React, { Component } from 'react';
import SideBarAdmin from './SideBarAdmin';
import HeaderAdmin from "./HeaderAdmin";
import MainBody from './MainBody'

class AdminPanel extends Component {
  componentDidMount = () => {
    document.title = 'DiscoverNewBrands || Admin'
  }
  render() {
    return (
      <div className="dashboard-container">
        <SideBarAdmin />
        <div className="main">
          <HeaderAdmin />
          <MainBody />
        </div>
      </div>
    )
  }
}

export default AdminPanel
