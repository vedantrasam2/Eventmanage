import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [formErrors, setFormErrors] = useState({});
  const [input, setInput] = useState({
    firstname: "",
    date: "",
    gender: "",
    contact: "",
    email: "",
    address: "",
    collegename: "",
    id: "",
    year: "",
    username: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((preInput) => {
      return {
        ...preInput,
        [name]: value,
      };
    });
  };
  let Count = 0;
  const submitToBackend = (e) => {
    e.preventDefault();
    setFormErrors(validate(input));
    if (Count == 0) {
      const newRegistration = {
        firstname: input.firstname,
        date: input.date,
        gender: input.gender,
        contact: input.contact,
        email: input.email,
        address: input.address,
        collegename: input.collegename,
        id: input.id,
        year: input.year,
        username: input.username,
        password: input.password,
        cpassword: input.cpassword,
      };
      axios
        .post("http://localhost:5000/register", newRegistration)
        .then((res) => {
          console.log(res);
          if (res.data === "ok") {
            alert("registration done");
            navigate("/");
          }
        });
    }
  };
  const validate = (values) => {
    const errors = {}
    const regexstring = /^[a-z]+$/i;
    const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexnumber = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    const regexid = /^[0-9]{4}$/;
    const regexpassword =/^.{6,8}$/;
      if (!values.firstname) {
        errors.firstname = "Full Name is required"
      
     } 
    //  else if (!regexstring.test(values.firstname)) {
    //     errors.firstname = "Are you sure you entered your name correctly"
    //     Count += 1
    //   }
    if (!values.date) {
      errors.date = "Date of Birth is required"
      Count += 1
    }

    if (!values.gender) {
      errors.gender = "Select a gender"
      Count += 1
    }
    else if (values.gender != 'Male' && values.gender != 'Female') {
      errors.gender = "Enter proper gender"
      Count += 1
    }
    if (!values.contact) {
      errors.contact = "Mobile No. is required"
      Count += 1
    } else if (!regexnumber.test(values.contact)) {
      errors.contact = "Enter the correct contact no"
      Count += 1
    }

    if (!values.email) {
      errors.email = "Email is required"
      Count += 1
    } else if (!regexemail.test(values.email)) {
      errors.email = "This is not a valid Email"
      Count += 1
    }
    if (!values.address) {
      errors.address = "Enter your address"
      Count += 1
    }
    if (!values.collegename) {
      errors.collegename = "College name is required"
      Count += 1
    }
    
    if (!values.id) {
      errors.id = "Enter your college id"
      Count += 1
    }
    else if (!regexid.test(values.id)) {

      errors.id = "Enter a proper college id"
      Count += 1

    }
    if (!values.year) {
      errors.year = "Enter your current year"
      Count += 1
    }

    if (!values.username) {
      errors.username = "User Name is required"
      Count += 1
    } 

    if (!values.password) {
      errors.password = "Password is required"
      Count += 1
    } else if (!regexpassword.test(values.password)) {
      errors.password = "Password must be more than 6 and less than 8 characters";
      Count += 1
    }
    if (!values.cpassword) {
      errors.cpassword = "This field can't be empty"
      Count += 1
    } else if (values.password !== values.cpassword) {
      errors.cpassword = "Passwords don't match"
      Count += 1
    }


    return errors;
  }
  return (
    <>
      <div className="signup">
        <div className="container1">
          <header>Register</header>
          <form action="/register" method="POST">
            <div className="form first">
              <div className="Personal Details">
                <span className="title">Personal Details</span>
                <div className="fields">
                  <div className="input-field">
                    <label>Full Name</label>
                    <input
                      onChange={handleChange}
                      value={input.firstname}
                      type="text"
                      placeholder="Enter your name"
                      required
                      name="firstname"
                    ></input>
                    <p className="text-danger" style={{ fontSize: '12px' }} >{formErrors.firstname} </p>
                  </div>

                  <div className="input-field">
                    <label>Date of Birth</label>
                    <input
                      onChange={handleChange}
                      value={input.date}
                      type="date"
                      placeholder="Enter Birth Date"
                      required
                      name="date"
                    ></input>
                    <p className="text-danger" style={{ fontSize: '12px' }} >{formErrors.date} </p>
                  </div>

                  <div className="input-field">
                    <label>Gender</label>
                    <input
                      onChange={handleChange}
                      value={input.gender}
                      type="text"
                      placeholder="Your gender"
                      required
                      name="gender"
                    ></input>
                    <p className="text-danger" style={{ fontSize: '12px' }} >{formErrors.gender} </p>
                  </div>

                  <div className="input-field">
                    <label>Contact</label>
                    <input
                      onChange={handleChange}
                      value={input.contact}
                      type="text"
                      placeholder="Mobile Number"
                      required
                      name="contact"
                    ></input>
                    <p className="text-danger" style={{ fontSize: '12px' }} >{formErrors.contact} </p>
                  </div>

                  <div className="input-field">
                    <label>Email-Id</label>
                    <input
                      onChange={handleChange}
                      value={input.email}
                      type="email"
                      placeholder="Your Email"
                      required
                      name="email"
                    ></input>
                    <p className="text-danger" style={{ fontSize: '12px' }} >{formErrors.email} </p>
                  </div>

                  <div className="input-field">
                    <label>Address</label>
                    <input
                      onChange={handleChange}
                      value={input.address}
                      type="text"
                      placeholder="Your Address"
                      required
                      name="address"
                    ></input>
                    <p className="text-danger" style={{ fontSize: '12px' }} >{formErrors.address} </p>
                  </div>
                </div>
              </div>
              <div className="Personal Details">
                <span className="title">College Details</span>
                <div className="fields">
                  <div className="input-field">
                    <label>College Name</label>
                    <input
                      onChange={handleChange}
                      value={input.collegename}
                      type="text"
                      placeholder="Your college name"
                      required
                      name="collegename"
                    ></input>
                    <p className="text-danger" style={{ fontSize: '12px' }} >{formErrors.collegename} </p>
                  </div>

                  <div className="input-field">
                    <label>Collge ID</label>
                    <input
                      onChange={handleChange}
                      value={input.id}
                      type="text"
                      placeholder="College Id number"
                      required
                      name="id"
                    ></input>
                    <p className="text-danger" style={{ fontSize: '12px' }} >{formErrors.id} </p>
                  </div>

                  <div className="input-field">
                    <label>Studying Year and Stream</label>
                    <input
                      onChange={handleChange}
                      value={input.year}
                      type="text"
                      placeholder="Your current year"
                      required
                      name="year"
                    ></input>
                    <p className="text-danger" style={{ fontSize: '12px' }} >{formErrors.year} </p>
                  </div>

                  <div className="input-field">
                    <label>
                      <i class="zmdi zmdi-account"></i> User name
                    </label>
                    <input
                      onChange={handleChange}
                      value={input.username}
                      type="text"
                      placeholder="Create user name"
                      required
                      name="username"
                    ></input>
                    <p className="text-danger" style={{ fontSize: '12px' }} >{formErrors.username} </p>
                  </div>

                  <div className="input-field">
                    <label>
                      <i class="zmdi zmdi-lock"></i> Password
                    </label>
                    <input
                      onChange={handleChange}
                      value={input.password}
                      type="password"
                      placeholder="New password"
                      required
                      name="password"
                    ></input>
                    <p className="text-danger" style={{ fontSize: '12px' }} >{formErrors.password} </p>
                  </div>

                  <div className="input-field">
                    <label>
                      <i class="zmdi zmdi-assignment-check"></i> Confirm
                      Password
                    </label>
                    <input
                      onChange={handleChange}
                      value={input.cpassword}
                      type="password"
                      placeholder="Confirm your password"
                      required
                      name="cpassword"
                    ></input>
                    <p className="text-danger" style={{ fontSize: '12px' }} >{formErrors.cpassword} </p>
                  </div>

                  <button
                    onClick={submitToBackend}
                    type="submit"
                    className="loginbutton"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
/* <button className="submit">
            <span className="submit">Submit</span> */
