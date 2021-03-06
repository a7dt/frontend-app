import React, { Component } from 'react';

class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {

     const target = e.target;
     const value = target.value;
     const name = target.name;

     this.setState({
       [name]: value
     });
  }

  handleSubmit(e) {
    e.preventDefault();

    var userData = { ...this.state }

    this.setState({
      username: '',
      password: ''
    })

    this.props.register(userData);
  }

  render() {

    return (
      <div>


        <form onSubmit = {this.handleSubmit}>

          <p style = {{fontWeight: "bold"}}> Register </p>

          <label>
            Username:
            <br />
            <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Password:
            <br />
            <input name="password" type="text" value={this.state.password} onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="register" />

        </form>
      </div>
    );
  }
}

export default RegisterForm;
