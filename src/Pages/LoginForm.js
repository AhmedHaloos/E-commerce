import { useState } from "react";
import { useForm } from "react-hook-form";



function LoginForm(){

const{register, handleSubmit, ref} = useForm();
const onsSuccess = (data, e)=>{
  console.log(data.password);
}
const onError = (error, e)=>{
  console.log(error);
}
return(
    <form className="m-4 d-flex flex-column " onSubmit={handleSubmit(onsSuccess, onError)}>
  <div className="row mb-3">
    <div className="col-sm-6">
    <label forhtml="inputEmail3" className="col-sm-2 col-form-label">Email</label>
      <input type="text" className="form-control" id="inputEmail3" 
      {... register('email', {required:true, maxLength : 10, minLength:5})}
      ref = {ref}
     />
      <div></div>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-6">
    <label forhtml="inputPassword3" className="col-sm-2 col-form-label">Password</label>
      <input type="text" className="form-control" id="inputPassword3"
       {... register('password', {required:true, maxLength : 8, minLength:4})}
     />
      <div></div>
    </div>
  </div>
  
  <button type="submit" className="btn btn-primary col-1">Sign in</button>
</form>

)

}


export default LoginForm;