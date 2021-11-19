import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.username || !this.state.password) return
    
    this.props.handleLogin(this.state)
    // reset the state after submit
    this.setState({
      username: "", 
      password: ""
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    
    return (
      <form onSubmit={this.onSubmit}> 
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.onChange} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.onChange} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
