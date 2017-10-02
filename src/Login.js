import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
//npm install react-router-dom

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {password: '',account:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    console.log(event.target.password)
    this.setState({password: event.target.password});
    console.log(this.state.password)
    // this.setState({account: event.target.account});
  }
  handleSubmit(event) {
    console.log(this.state.password)
    console.log(this.state.account)
    if(this.state.password=='123'&&this.state.account=='123'){
      // this.result='登入成功'
      console.log('登入成功')
      // this.transitionTo('/Content');
      this.props.push('/content')
    }
    else{
      console.log('登入失敗')
      this.result='登入失敗'
      event.preventDefault();
    }
  }
  goToRegist(){
    this.props.push('/regist')
    // this.transitionTo('/regist')
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.account}  /><br />
          <input type="password"  value={this.state.password} onChange={this.handleChange} /><br />
          <input type="submit" value="login" />
          <input type="button" value="regist" onClick={this.goToRegist} /><br />
           {this.result}
        </form>
    );
  }
}

// export App
// export withRouter(Regist)
export default Login
// export withRouter(Content)


// export const App {}
// export const Login {}