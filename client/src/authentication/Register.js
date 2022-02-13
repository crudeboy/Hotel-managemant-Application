// import { useState } from "react";
// import RegisterForm from "../components/RegisterForm";
// import axios from "axios";
// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submitForm = async(e) => {
//     try{
//       e.preventDefault();
//        const res = await axios.post(`http://localhost:3000/api/register`, {
//          name,
//          email,
//          password,
//        });
//     console.log('Register User ==> ', res);
//     }
//     catch(error){
//       console.log(error)
//     }
//   };
//   return (
//     <>
//       <div className="container-fluid bg-secondary p-5 text-center">
//         Signup Page
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className=" col-md-6 offset-md-3">{
//             <RegisterForm
//              submitForm = {submitForm}
//              name = {name}
//              setName = {setName}
//              password = {password}
//              setPassword = {setPassword}
//              email = {email}
//              setEmail = {setEmail}
//             />
//           }</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;
