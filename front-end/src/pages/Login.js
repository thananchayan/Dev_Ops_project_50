import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import user from "../assets/account-profile.png";
import Lock from "../assets/password-icon.jpg";
import logo from "../assets/logo.png";

const Login = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const handleClick = () => {
    if (!loginUserName || !loginPassword) {
      toast.error("Login Fail!,Please provide both username and password. ", {
        position: "top-center",
        autoClose: 3000,
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

      return;
    }

    const foundUser = users.find(
      (user) =>
        user.userName === loginUserName && user.password === loginPassword
    );

    if (foundUser && foundUser.userName === "admin") {
      toast.success("Successfully Logged in as Admin!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      new Promise((resolve) => setTimeout(resolve, 5000));
      navigate("/Admin/Admin");
    } else if (foundUser) {
      toast.success("Successfully Logged in!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        onClose: () => {
          navigate("/home");
        },
      });
    } else {
      toast.error(
        "Login Fail!,Please provide correct username and password. ",
        {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-navy ">
        <a class="navbar-brand" href="../assets/logo.png">
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
         
          <Link className="btn btn-outline-light m-2" to="/Signup">
            Sign Up
          </Link>
        </div>
      </nav>

      <div className="login-background">
        <div className="logincontainer">
          <div className="header">
            <div className="text">Log In</div>
            <div className="underline"></div>
          </div>

          <div className="inputs">
            <div className="input">
              <img src={user} alt="" />
              <input
                type="text"
                placeholder="User Name"
                name="loginUserName"
                value={loginUserName}
                onChange={(e) => setLoginUserName(e.target.value)}
              />
            </div>

            <div className="input">
              <img src={Lock} alt="" />
              <input
                type="password"
                placeholder="Password"
                name="loginPassword"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="forgot-password" style={{color:"black"}}>
            If you don't have an account?{" "}
            <span>
              <Link to="/signup">Create</Link>
            </span>
          </div>

          <div className="submit-container" style={{marginLeft:"210px"}}>
            <button className="btn btn-primary" onClick={handleClick}>
              Log In
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
