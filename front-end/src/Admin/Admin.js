// import React, { useState } from 'react'
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";

import logo from "../assets/logo.png";

export default function Admin() {
  const [matches, setMatches] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadMatches();
  }, []);

  const loadMatches = async () => {
    const result = await axios.get("http://localhost:8080/matches");
    setMatches(result.data);
  };

  const deleteMatch = async (id) => {
    await axios.delete(`http://localhost:8080/match/${id}`);
    loadMatches();
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
        <Link className='btn btn-outline-light btn-sm m-3' to="/Admin/addmatch">
              Add Matches
              </Link>
          <Link className="btn btn-outline-light btn-sm m-3" to="/">
            Logout
          </Link>
        </div>
      </nav>

        
            <table className="table shadow">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Match</th>
                  <th scope="col">Format</th>
                  <th scope="col">Location</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Total Seats</th>
                  <th scope="col">Available Seats</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                {matches.map((match, index) => (
                  <tr>
                    <th scope="row" key={index}>
                      {index + 1}
                    </th>
                    <td>{match.match}</td>
                    <td>{match.format}</td>
                    <td>{match.location}</td>
                    <td>{match.date}</td>
                    <td>{match.time}</td>
                    <td>{match.totalSeats}</td>
                    <td>{match.availableSeats}</td>
                    <td>{match.description}</td>
                    <td>
                      <Link
                        className="btn btn-primary btn-sm mx-1"
                        to={`/Admin/viewmatch/${match.id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-sm mx-1"
                        to={`/Admin/editmatch/${match.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger btn-sm mx-1"
                        onClick={() => deleteMatch(match.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
    
  );
}
