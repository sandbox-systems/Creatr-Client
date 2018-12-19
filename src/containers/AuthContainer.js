import { Container } from "unstated";
import axios from "axios";
class AuthContainer extends Container {
  constructor() {
    super()

    this.getUser()

    this.state = {
      loggedIn: false,
      role: '',
      firstname: '',
      lastname: ''
    };
  }

  config = {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  };

  getUser = async ()  => {
    try {
      const res = await  axios.get('/api/v1/me', this.config)
      this.setState({
        loggedIn: true,
        role: res.data.result.role,
        firstname: res.data.result.firstname,
        lastname: res.data.result.lastname,
      });
    } catch (error) {
      console.error("Login Failed")
    }
  }

  refresh = async ()  => {
    try {
      const res = await  axios.get('/api/v1/auth/refresh', this.config)
      this.setState({
        loggedIn: true,
        role: res.data.result.role,
        firstname: res.data.result.firstname,
        lastname: res.data.result.lastname,
      });
    } catch (error) {
      console.error("Token Refresh Failed", "Logged Out")
    }
  }

  login = async formData => {
    try {
      const res = await  axios.post('/api/v1/auth/login/', formData)
      this.setState({
        loggedIn: true,
        role: res.data.result.role,
        firstname: res.data.result.firstname,
        lastname: res.data.result.lastname,
      });
      localStorage.setItem('token', `Bearer ${res.data.token}`);
      localStorage.setItem('role', res.data.result.role);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  logout = async () => {
    console.log("logged out!")
    this.setState({
      loggedIn: false,
      role: ''
    })
    localStorage.removeItem('role')
    localStorage.removeItem('admin') 
    localStorage.removeItem('token') 
  };
}

export default AuthContainer;
