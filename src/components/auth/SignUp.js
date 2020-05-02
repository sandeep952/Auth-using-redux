import React, { Component } from "react";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit(event){
    event.preventDefault();
    const {name,email,password} = this.state;
    this.props.registerUser({name,email,password})
    
    this.setState({
      name: "",
      email: "",
      password: ""
    })
  }

  render() {
    return (
      <div className="row">
        <form className="col-md-6 offset-md-3 my-5">
          <div className="form-group">
            <label> Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              required
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="form-group">
            <label> Email</label>
            <input
              name="email"
              type="text"
              className="form-control"
              required
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label> Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              required
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="text-center">
            <button onClick={this.onSubmit.bind(this)} className="btn btn-outline-primary">
              Join our community
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
