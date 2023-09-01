import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextProvider';

const Register = () => {
 const [error,setError]=useState('')
const { createUser }= useContext(AuthContext)
// route location set 
const navigate =useNavigate();


// close 

    //fromHandler Working Process
    const fromSubmitHandler = (event) =>{
        event.preventDefault()
        setError('');
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)
     
     
   //password vailidate
 if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
  setError('Please add at least One Special Carecter')
  return;
}
else if(!/(?=.*?[a-z])/.test(password)){
  setError('At least one lower case English letter')
  return;
}
else if (password.length<8){
  setError('Please at least Eight Number Use')
  return;
}
//password..close

        //firbase
        createUser(email,password)
          .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   console.log(user)
    event.target.reset()
   navigate("/");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage)
    console.log(errorCode,errorMessage)
  });
   //firbase working close
    }
//from handeler close

    return (
        <div>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={fromSubmitHandler} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" id="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input required type="text" placeholder="password" id='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
       <p className="text-error">{error}</p>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};


export default Register;