import { useState } from "react";

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

  return (
    <div className="container">
      <form className="mt-5">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          className="form-control"
          placeholder="Input your username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="form-control"
          placeholder="Input your password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button 
          type="submit" 
          className="btn btn-primary"
          onClick={handleSubmitClick}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
