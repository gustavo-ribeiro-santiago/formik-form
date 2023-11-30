import React from "react";
import {useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: values => {
      console.log('form: ', values);
      alert("Login Successful");
    },
    validate: values => {
      let errors = {};
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(values.email)) errors.email = "Username should be an email"
      if (!values.email) errors.email = "Field required";
      if (!values.password) errors.password = "Field required";
      return errors;
    }
  });
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" name="email" type="text" onChange={formik.handleChange} values={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}
        <div>Password</div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} values={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}
        <br/>
        <br/>
        <button id="submitBtn" type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
