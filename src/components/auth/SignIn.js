import React, { Component } from "react";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  }
  render() {
    return (
      <div className="row">
      {console.log("signin render")}
        <form className="col-md-6 offset-md-3 my-5">
          <div className="form-group">
            <label> Email</label>
            <input
              name="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
              type="text"
              className="form-control"
              required
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label> Password</label>
            <input
              name="password"
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
              type="password"
              className="form-control"
              required
              placeholder="Password"
            />
          </div>
          <div className="text-center">
            <button
              onClick={this.onSubmit.bind(this)}
              className="btn btn-outline-primary"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
