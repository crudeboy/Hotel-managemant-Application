// import { useState } from "react";
// import axios from "axios";
// import LoginForm from "../components/LoginForm";
// const Login = () => {
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const handleSubmit = async (e) => {
// e.preventDefault();
// const res = await axios.post(`http://localhost:3001/api/login`, {
// email,
// password,
// });
// };
// return (
// <>
// <div className="container-fluid bg-secondary p-5 text-center">
// <h1>Login</h1>
// </div>
// <div className="container">
// <div className="row">
// <div className="col-md-6 offset-md-3">
// <LoginForm
// handleSubmit={handleSubmit}
// email={email}
// setEmail={setEmail}
// password={password}
// setPassword={setPassword}
// />
// </div>
// </div>
// </div>
// </>
// );
// };
// export default Login;
