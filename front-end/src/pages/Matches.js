import React,{ useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Matches.css";

import logo from "../assets/logo.png";

export default function Matches()
 {
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
        <Link className="btn btn-primary btn-sm color-dark m-3" to="/home">
            Home
          </Link>
          <Link className="btn btn-outline-light btn-sm m-3" to="/">
            Logout
          </Link>
        </div>
      </nav>

      <div className="Matches-custom-background">

      <div className="container">
          {/* <div className=""> */}
            <table className="table custom-table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Match</th>
                  <th scope="col">Format</th>
                  <th scope="col">Location</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Description</th>
                  <th scope="col"></th>
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
                    <td>{match.description}</td>
                    <td>
                      <Link
                        className="btn btn-primary btn-sm mx-2"
                        to={`/viewmatch/${match.id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-sm mx-2"
                        to={`/booking/${match.id}`}
                      >
                        Book Now
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      
    // </div>
  );
 };

