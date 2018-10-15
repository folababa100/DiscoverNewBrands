import React, { Component } from 'react';

class LoginPageAdmin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  signUpUser(e) {
    e.preventDefault()

    // const email = this.refs.email.value.trim();
    // const password = this.refs.password.value.trim();

    //   this.props.signUp({
    //     email, password
    //   }, function (error, res) {
    //     if (error) {
    //       console.error(error)
    //     } else {
    //       console.log(res);
    //     }
    //   });
    this.props.history.push('/admin')
  }
  render() {
    return (
      <div className="box-layout">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-lg-4">
              <div className="card card--adjust">
                <div className="card-body text-center">
                  <h1 className="h1">Login Admin</h1>
                  <form onSubmit={this.signUpUser.bind(this)}>
                    <div className="form-group">
                      <input ref="email" type="email" className="radius-none form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                      <input ref="password" type="password" className="radius-none form-control" placeholder="Password" />
                    </div>
                    <button className="radius-none my-btn btn bb btn-primary btn-block">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPageAdmin;
