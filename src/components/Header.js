import React, { Component } from 'react';
import { Modal, ModalHeader } from 'reactstrap';
import { connect } from "react-redux";
import { startGoogleLogin, startFacebookLogin } from "../actions/auth";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      show: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  onGoogleLogin() {
    this.props.startGoogleLogin()
  }
  onFacebookLogin() {
    this.props.startFacebookLogin()
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
                        <p className="pointer" onClick={this.toggle}>Login</p>
                        |
                  <p className="pointer">Register</p>
                      </span>
                    )}
                </div>
              </div>
            </div>
            <div>
              {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader style={{ borderBottom: '0' }} toggle={this.toggle}>
                  <img className="img-logo" src="/images/discovernewbrands-logo.png" alt="Logo"/>
                </ModalHeader>
                <div style={{ maxWidth: '325px' }} className="container">
                  <h3 className="text-center mb-4">Login to see more</h3>
                  <input className="form-control radius-adjust mb-3" placeHolder="Email Address" type="text" />
                  <input className="form-control radius-adjust" placeHolder="Password" type="password" />
                  <button className="btn btn-danger radius-adjust btn-block mt-3">Log In</button>
                  <h4 className="text-center mt-3">OR</h4>
                  <button onClick={this.onFacebookLogin.bind(this)} className="btn btn-danger radius-adjust btn-block mt-3" style={{ backgroundColor: '#3b5998', border: '1px solid #3b5998' }}>SIGN IN WITH FACEBOOK</button>
                  <button onClick={this.onGoogleLogin.bind(this)} className="btn btn-danger radius-adjust btn-block mt-3" style={{ backgroundColor: '#4285f4', border: '1px solid #4285f4' }}>SIGN IN WITH GOOGLE</button>
                  <p className="text-center mt-3">Forgot my password</p>
                  <hr/>
                  <p className="text-center">Not a member yet | Sign Up</p>
                </div>
              </Modal>
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

const mapDispatchToProps = (dispatch) => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFacebookLogin: () => dispatch(startFacebookLogin())
})

export default connect(undefined, mapDispatchToProps)(Header)
