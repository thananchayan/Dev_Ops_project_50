import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";
import logo from "../assets/logo.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
  });



  const { name, email, userName, password, confirm_password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (!name || !email || !userName || !password || !confirm_password) {
      toast.error("All the fields should be filled. Please fill all the fields.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (password !== confirm_password) {
      toast.error("Passwords do not match. Password and confirm password should be matched.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      return true;
    }
    return false;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (handleClick()) {
      try {
        await axios.post("http://localhost:8080/user", user);
        toast.success("Successfully Registered your account.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          onClose: () => {
            navigate("/");
          },
        });
        navigate("/");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-navy">
        <a className="navbar-brand" href="../assets/logo.png">
          <img src={logo} alt="" width="80" height="80" />
        </a>
        <div
          style={{
            marginLeft: "10px",
          }}
        >
          <h1 style={{ margin: 0 }}>
            <span
              style={{
                color: "#FFD700",
                fontSize: "2em",
                fontFamily: "Times New Roman",
              }}
            >
              Cric
            </span>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: "1.2em",
                fontFamily: "Times New Roman",
              }}
            >
              TicketHub
            </span>
          </h1>
        </div>

        <div className="ml-auto">
          <Link className="btn btn-outline-light m-2" to="/">
            Log In
          </Link>
        </div>
      </nav>

      <div className="custom-background-for-signup">
        <div className="signupcontainer">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="header">
              <div className="text">Sign Up</div>
              <div className="underline"></div>
            </div>

            <div className="inputs">
              <div className="input">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="input">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
          
              </div>

              <div className="input">
                <input
                  type="text"
                  placeholder="User Name"
                  name="userName"
                  value={userName}
                  onChange={(e) => onInputChange(e)}
                />
         
              </div>

              <div className="input">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => onInputChange(e)}
                />
         
              </div>

              <div className="input">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm_password"
                  value={confirm_password}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>

            <div className="submit-container">
              <button type="submit" className="btn btn-outline-primary">
                Sign Up
              </button>
              <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
              <Link className="btn btn btn-primary" to="/">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
