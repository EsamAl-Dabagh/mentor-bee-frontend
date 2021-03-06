import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import CurrentUser from "../CurrentUser"

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      redirect: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    if (window.localStorage.getItem("currentUser")) {
      this.setState({ redirect: true })
    }
  }

  handleChange(event) {
    const target = event.target
    this.setState({
        [target.name]: target.value
    })
  }
  handleSubmit(event) {
    const url = "https://mentor-bee-api.herokuapp.com/users"
    const data = { "user": {
      "name": this.state.name,
      "email": this.state.email,
      "password": this.state.password,
      }
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).then(res => {
      if (res.ok){
        return res.json()
      }
    }).then(res => {
      this.props.signedIn()
      let user = new CurrentUser(res.user.id, res.user.name, res.user.email, res.auth_token, res.user.pic)
      window.localStorage.setItem("currentUser", JSON.stringify(user))
      this.setState({ redirect: true })

    }).catch(err => {
      console.log(err)
    })

    event.preventDefault()
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/profile'/>;
    }

    return (
      <div className="clearfix">
      <div className="title-box">
        <h3 id="signup-title">Welcome to MentorBee.</h3>
        <br/><p id="tagline">Help others learn and level up your knowledge. <br/>Join our community today!</p>
      </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
              autoFocus
            /><br/>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            /><br/>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            /><br/>
              <button type="submit" className="signupbtn">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
