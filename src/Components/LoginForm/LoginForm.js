import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <div class="container col-sm-6">
        <form>
          <div className="form-group">
            <label for="login">Login</label>
            <input type="text" className="form-control" id="login" placeholder="Enter your login" />
          </div>
          <div className="form-group">
            <label for="password">Email</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;