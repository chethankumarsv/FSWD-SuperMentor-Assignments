import { useState } from "react";

function Signup(){

const [form,setForm] = useState({
  name:"",
  email:"",
  password:"",
  confirmPassword:""
});

const [errors,setErrors] = useState({});

const handleChange = (e) => {

  setForm({
    ...form,
    [e.target.name]: e.target.value
  });

};

const validate = () => {

  let newErrors = {};

  // Name validation
  if(!form.name){
    newErrors.name = "Name is required";
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!form.email){
    newErrors.email = "Email is required";
  } 
  else if(!emailPattern.test(form.email)){
    newErrors.email = "Invalid email format";
  }

  // Password validation
  if(!form.password){
    newErrors.password = "Password is required";
  }
  else if(form.password.length < 6){
    newErrors.password = "Password must be at least 6 characters";
  }

  // Confirm password validation
  if(form.password !== form.confirmPassword){
    newErrors.confirmPassword = "Passwords do not match";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;

};

const handleSubmit = (e) => {

  e.preventDefault();

  if(validate()){
    alert("Signup successful!");
    console.log(form);
  }

};

return(

<div style={{textAlign:"center", marginTop:"40px"}}>

<h1>Signup Form</h1>

<form onSubmit={handleSubmit}>

<div>
<input
type="text"
name="name"
placeholder="Enter name"
value={form.name}
onChange={handleChange}
/>
<p style={{color:"red"}}>{errors.name}</p>
</div>

<div>
<input
type="email"
name="email"
placeholder="Enter email"
value={form.email}
onChange={handleChange}
/>
<p style={{color:"red"}}>{errors.email}</p>
</div>

<div>
<input
type="password"
name="password"
placeholder="Enter password"
value={form.password}
onChange={handleChange}
/>
<p style={{color:"red"}}>{errors.password}</p>
</div>

<div>
<input
type="password"
name="confirmPassword"
placeholder="Confirm password"
value={form.confirmPassword}
onChange={handleChange}
/>
<p style={{color:"red"}}>{errors.confirmPassword}</p>
</div>

<button type="submit">Signup</button>

</form>

</div>

);

}

export default Signup;