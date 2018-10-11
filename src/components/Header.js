import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <div>
        <div className="overlay">
          <div className="fixed-nav mt-2">
            <div className="container-adjusted container mb-3" style={{ marginTop: '6px' }}>
              <div className="row">
                <div className="col-md-3">
                  <fieldset className="d-none d-md-block d-lg-block searchbox">
                    <i className="ion-android-search"></i>
                    <input type="text" placeholder="Search ..." />
                  </fieldset>
                </div>

                <div className="col-md-6 col-10">

                </div>
                <div className="col-md-3 col-2 text-end">

                  {this.state.show === true ? (
                    <span className="bold">
                      <i className="ion-android-person person"></i>
                      My account
            </span>
                  ) : (
                      <span className="login-register bold">
                        <p>Login</p>
                        |
                  <p>Register</p>
                      </span>
                    )}
                </div>
              </div>
            </div>
            <div class="modal" style={{ display: 'block' }} tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Modal body text goes here.</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-adjusted" style={{ marginTop: '2rem' }}>
              <div className="line-left"></div>
              <div className="line-right"></div>
            </div>

            <div className="container-adjusted container mt-6">
              <div className="row">
                <ul style={{ width: '100%' }}>
                  <div className="col-md-2-div col-3">
                    <li className="adjusted">
                      <a className="a first" href="/">
                        <span>
                          <span className="ion-adjust">
                            <i className="ion-home ion-all"></i>
                          </span>
                          <span className="nav-text">
                            What's New
                    </span>
                        </span>
                      </a>
                    </li>
                  </div>
                  <div className="col-md-2-div col-3">
                    <li className="adjusted">
                      <a className="a second" href="/">

                      </a>
                    </li>
                  </div>
                  <div className="col-md-2-div col-3">
                    <li className="adjusted">
                      <a className="a third" href="/">

                      </a>
                    </li>
                  </div>
                  <div className="col-md-2-div col-3 d-none d-md-block">
                    <li className="adjusted">
                      <a className="a fourth" href="/">

                      </a>
                    </li>
                  </div>
                  <div className="col-md-2-div col-3 d-none d-md-block">
                    <li className="adjusted">
                      <a className="a fifth" href="/">

                      </a>
                    </li>
                  </div>
                  <div className="col-md-2-div col-3 d-none d-md-block">
                    <li className="adjusted">
                      <a className="a sixth" href="/">

                      </a>
                    </li>
                  </div>
                  <div className="col-md-2-div-div col-3">
                    <li className="adjusted dropdown">
                      <a className="a seventh" href="/">
                        <div className="dropdown">
                          <div className="dropdown-menu-adjusted">
                            <a href="" className="dropdown-item">Lorem Ipsum</a>
                            <a href="" className="dropdown-item">Lorem Ipsum</a>
                            <a href="" className="dropdown-item">Lorem Ipsum</a>
                            <a href="" className="dropdown-item">Lorem Ipsum</a>
                            <a href="" className="dropdown-item">Lorem Ipsum</a>
                            <a href="" className="dropdown-item">Lorem Ipsum</a>
                            <a href="" className="dropdown-item">Lorem Ipsum</a>
                          </div>
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
