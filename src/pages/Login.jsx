import { useEffect, useState } from "react";
import Card from "../components/Card";

const Login = () => {

  // === Not Recommended (unless in certain case)
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")

  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value)
  // }

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value)
  // }

  // === Recommended
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleInputChange = e => {
    const key = e.target.id
    const value = e.target.value
    setFormData({
      ...formData,
      [key]: value
    })
  }

  const handleSubmitClick = e => {
    e.preventDefault()
    console.log(formData)
  }

  // Lifecycle -> function
  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount

  // Component Did Mount
  useEffect(() => {
    console.log("COMPONENT DID MOUNT")
  }, [])

  // Component Did Update
  useEffect(() => {
    console.log("COMPONENT DID UPDATE")
  })

  // Component Will Unmount
  useEffect(() => {
    return () => {
      console.log("COMPONENT WILL UNMOUNT")
    }
  }, [])

  return (
    <div className="container p-5">
      <Card>
        <form>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            className="form-control mb-3"
            placeholder="Input your username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="form-control mb-3"
            placeholder="Input your password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button 
            type="submit" 
            className="btn btn-primary mb-3"
            onClick={handleSubmitClick}
          >
            Login
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
