import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

export default function AddMatches() {
  let navigate = useNavigate();
  // const [date,setDate]=useState();

  const [matches, setMatches] = useState({
    match: "",
    format: "",
    location: "",
    date: "",
    time: "",
    totalSeats: "",
    availableSeats: "",
    description: "",
  });

  const {
    match,
    format,
    location,
    date,
    time,
    totalSeats,
    availableSeats,
    description,
  } = matches;

  const onInputChange = (e) => {
    setMatches({ ...matches, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/match", matches);
    navigate("/Admin/Admin");
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
          <Link className="btn btn-outline-light m-3" to="/">
            Logout
          </Link>
        </div>
      </nav>
      
        <div className="form-background">
          <div className="col-md-6 offset-md-3 border rounded p-4 shadow custom-form">
            <h2 className="text-center m-4">Add Match</h2>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Match
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter the match"
                  name="match"
                  value={match}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Format
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Format"
                  name="format"
                  value={format}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Location
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter the location"
                  name="location"
                  value={location}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Date
                </label>
                <input
                  type={"date"}
                  className="form-control"
                  placeholder="Enter the match date"
                  name="date"
                  value={date}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Time
                </label>
                <input
                  type={"time"}
                  className="form-control"
                  placeholder="Enter the match time"
                  name="time"
                  value={time}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Total Seats
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Enter the total no of seats"
                  name="totalSeats"
                  value={totalSeats}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Available Seats
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Enter the available seats"
                  name="availableSeats"
                  value={availableSeats}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Description
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter the match description"
                  name="description"
                  value={description}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <button type="submit" className="btn btn-outline-primary ">
                Submit
              </button>
              <Link
                type="submit"
                className="btn btn-outline-danger mx-2"
                to="/Admin/Admin  "
              >
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
  );
}
