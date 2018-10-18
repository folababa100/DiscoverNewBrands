import React, { Component } from 'react';
import { Modal, ModalHeader } from 'reactstrap';
import { connect } from "react-redux";
import { startGoogleLogin, startFacebookLogin } from "../actions/auth";
import { firebase } from '../firebase/firebase';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalfirst: false,
      show: false
    };

    this.togglefirst = this.togglefirst.bind(this)
    this.toggle = this.toggle.bind(this);
  }
  signInUser(e) {
    e.preventDefault()

    const emailIn = this.refs.emailIn.value.trim();
    const passwordIn = this.refs.passwordIn.value.trim();

    return firebase.auth().signInWithEmailAndPassword(emailIn, passwordIn)
      .then((res) => {
        console.log(res);
        this.setState({ modal: false })
      })
      .catch((e) => {
        console.log(e)
      })
  }
  signUpUser(e) {
    e.preventDefault()

    const emailUp = this.refs.emailUp.value.trim();
    const passwordUp = this.refs.passwordUp.value.trim();

    return firebase.auth().createUserWithEmailAndPassword(emailUp, passwordUp)
      .then((res) => {
        console.log(res)
        this.setState({ modalfirst: false })
      })
      .catch((e) => {
        console.log(e)
      })
  }
  onScrollApp() {
    if (document.scrollingElement.scrollTop > 160) {
      document.getElementById('nav-adjust-nav-one').style.height = '2.5em';
      document.getElementById('nav-adjust-nav-two').style.height = '2.5em';
      document.getElementById('nav-adjust-nav-three').style.height = '2.5em';
      document.getElementById('nav-adjust-nav-four').style.height = '2.5em';
      document.getElementById('nav-adjust-nav-five').style.height = '2.5em';
      document.getElementById('nav-adjust-nav-six').style.height = '2.5em';
      document.getElementById('nav-adjust-nav-seven').style.height = '2.5em';
      document.querySelector('.line-left').style.height = '33px';
      document.querySelector('.line-right').style.height = '33px';
      document.querySelector('.row-adjusted').style.marginTop = '0.8rem';
      document.querySelector('.mt-6').style.marginTop = '-3.3rem';
      document.querySelector('.ion-adjust-one').style.display = 'none';
      document.querySelector('.ion-adjust-seven').style.display = 'none';
    } else {
      document.getElementById('nav-adjust-nav-one').style.height = '3.5em';
      document.getElementById('nav-adjust-nav-two').style.height = '3.5em';
      document.getElementById('nav-adjust-nav-three').style.height = '3.5em';
      document.getElementById('nav-adjust-nav-four').style.height = '3.5em';
      document.getElementById('nav-adjust-nav-five').style.height = '3.5em';
      document.getElementById('nav-adjust-nav-six').style.height = '3.5em';
      document.getElementById('nav-adjust-nav-seven').style.height = '3.5em';
      document.querySelector('.line-left').style.height = '44px';
      document.querySelector('.line-right').style.height = '44px';
      document.querySelector('.mt-6').style.marginTop = '-3.9rem';
      document.querySelector('.ion-adjust-one').style.display = 'flex';
      document.querySelector('.ion-adjust-seven').style.display = 'flex';
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScrollApp)
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  togglefirst() {
    this.setState({
      modalfirst: !this.state.modalfirst
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
        <div className="d-none d-md-block overlay">
          <div className="d-none d-md-block fixed-nav mt-2">
            <div className="container-adjusted container mb-3" style={{ marginTop: '6px' }}>
              <div className="row">
                <div className="col-md-3" style={{ marginTop: '0.5rem' }}>
                  <fieldset className="d-none d-md-block d-lg-block searchbox">
                    <i className="ion-android-search"></i>
                    <input type="text" placeholder="Search ..." />
                  </fieldset>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }} className="col-md-6 col-sm-12">
                  <img style={{ width: '62%', height: '3rem' }} src="/images/discovernewbrands-logo-adjust.png" alt="Brand Logo"/>
                </div>
                <div className="d-none d-md-block col-md-3 col-2 text-end" style={{ marginTop: '0.5rem' }}>

                  {this.state.show === true ? (
                    <span className="bold">
                      <i className="ion-android-person person"></i>
                      My account
            </span>
                  ) : (
                      <span className="login-register bold">
                        <p className="a-style pointer" onClick={this.toggle}>Login</p>
                        |
                  <p onClick={this.togglefirst} className="a-style pointer">Register</p>
                      </span>
                    )}
                </div>
              </div>
            </div>
            <div>
              {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader style={{ borderBottom: '0' }} toggle={this.toggle}>
                  <img className="img-logo" src="/images/discovernewbrands-logo-adjust.png" alt="Logo"/>
                </ModalHeader>
                <div style={{ maxWidth: '325px' }} className="container">
                  <h3 className="text-center mb-4">Login to see more</h3>
                  <form onSubmit={this.signInUser.bind(this)}>
                    <input ref="emailIn" className="form-control radius-adjust mb-3" placeholder="Email Address" type="text" />
                    <input ref="passwordIn" className="form-control radius-adjust" placeholder="Password" type="password" />
                    <button className="btn btn-danger radius-adjust btn-block mt-3">Log In</button>
                  </form>
                  <h4 className="text-center mt-3">OR</h4>
                  <button onClick={this.onFacebookLogin.bind(this)} className="btn btn-danger radius-adjust btn-block mt-3" style={{ backgroundColor: '#3b5998', border: '1px solid #3b5998' }}>SIGN IN WITH FACEBOOK</button>
                  <button onClick={this.onGoogleLogin.bind(this)} className="btn btn-danger radius-adjust btn-block mt-3" style={{ backgroundColor: '#4285f4', border: '1px solid #4285f4' }}>SIGN IN WITH GOOGLE</button>
                  <p className="text-center mt-3">Forgot my password</p>
                  <hr/>
                  <p onClick={() => this.setState({ modalfirst: true, modal: false })} className="pointer text-center">Not a member yet | Sign Up</p>
                </div>
              </Modal>
            </div>
            <div>
              {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
              <Modal isOpen={this.state.modalfirst} toggle={this.togglefirst} className={this.props.className}>
                <ModalHeader style={{ borderBottom: '0' }} toggle={this.togglefirst}>
                  <img className="img-logo" src="/images/discovernewbrands-logo-adjust.png" alt="Logo"/>
                </ModalHeader>
                <div style={{ maxWidth: '325px' }} className="container">
                  <h3 className="text-center mb-4">Sign Up to see more</h3>
                  <form onSubmit={this.signUpUser.bind(this)}>
                    <input ref="emailUp" className="form-control radius-adjust mb-3" placeholder="Email Address" type="text" />
                    <input ref="passwordUp" className="form-control radius-adjust" placeholder="Password" type="password" />
                    <button className="btn btn-danger radius-adjust btn-block mt-3">Sign In</button>
                  </form>
                  <h4 className="text-center mt-3">OR</h4>
                  <button onClick={this.onFacebookLogin.bind(this)} className="btn btn-danger radius-adjust btn-block mt-3" style={{ backgroundColor: '#3b5998', border: '1px solid #3b5998' }}>SIGN IN WITH FACEBOOK</button>
                  <button onClick={this.onGoogleLogin.bind(this)} className="btn btn-danger radius-adjust btn-block mt-3" style={{ backgroundColor: '#4285f4', border: '1px solid #4285f4' }}>SIGN IN WITH GOOGLE</button>
                  <p className="text-center mt-3">Forgot my password</p>
                  <hr/>
                  <p onClick={() => this.setState({ modalfirst: false, modal: true })} className="pointer text-center">A member then | Login</p>
                </div>
              </Modal>
            </div>
            <div className="row-adjusted" style={{ marginTop: '1.8rem' }}>
              <div className="line-left"></div>
              <div className="line-right"></div>
            </div>

            <div className="container-adjusted container mt-6">
              <div className="row">
                <ul style={{ width: '100%' }}>
                  <div className="col-md-2-div col-3">
                    <li className="adjusted">
                      <a id="nav-adjust-nav-one" className="nav-adjust-nav ab first" href="/">
                        <span>
                          <span className="ion-adjust ion-adjust-one ion-adjust">
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
                      <a id="nav-adjust-nav-two" className="nav-adjust-nav a second" href="/">

                      </a>
                    </li>
                  </div>
                  <div className="col-md-2-div col-3">
                    <li className="adjusted">
                      <a id="nav-adjust-nav-three" className="nav-adjust-nav a third" href="/">

                      </a>
                    </li>
                  </div>
                  <div className="col-md-2-div col-3 d-none d-md-block">
                    <li className="adjusted">
                      <a id="nav-adjust-nav-four" className="nav-adjust-nav a fourth" href="/">

                      </a>
                    </li>
                  </div>
                  <div className="col-md-2-div col-3 d-none d-md-block">
                    <li className="adjusted">
                      <a id="nav-adjust-nav-five" className="nav-adjust-nav a fifth" href="/">

                      </a>
                    </li>
                  </div>
                  <div className="col-md-2-div col-3 d-none d-md-block">
                    <li className="adjusted">
                      <a id="nav-adjust-nav-six" className="nav-adjust-nav a sixth" href="/">

                      </a>
                    </li>
                  </div>
                  <div className="col-md-2-div-div col-3">
                    <li className="adjusted dropdown">
                      <a id="nav-adjust-nav-seven" className="nav-adjust-nav aa seventh" href="/">
                        <span>
                          <span className="ion-adjust ion-adjust-seven">
                            <i className="ion-navicon-round ion-all"></i>
                          </span>
                          <span className="nav-text">
                            More Categories
                          </span>
                        </span>
                        <div className="dropdown">
                          <div className="dropdown-menu-adjusted">
                            <a href="/" className="dropdown-item">Lorem Ipsum</a>
                            <a href="/" className="dropdown-item">Lorem Ipsum</a>
                            <a href="/" className="dropdown-item">Lorem Ipsum</a>
                            <a href="/" className="dropdown-item">Lorem Ipsum</a>
                            <a href="/" className="dropdown-item">Lorem Ipsum</a>
                            <a href="/" className="dropdown-item">Lorem Ipsum</a>
                            <a href="/" className="dropdown-item">Lorem Ipsum</a>
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
