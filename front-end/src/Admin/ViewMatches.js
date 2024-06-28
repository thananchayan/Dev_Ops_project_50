import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import './ViewMatches.css'

import logo from "../assets/logo.png";

export default function ViewMatches() {

  const [matches, setMatches]=useState({
        match: "",
        format: "",
        location: "",
        date: "",
        time:"",
        totalSeats:"",
        availableSeats:"",
        description:""
    })

  const { id } = useParams();

  useEffect(()=>{
    loadMatches();
   }, [])

  const loadMatches = async () => {
    const result = await axios.get(`http://localhost:8080/match/${id}`);
    setMatches(result.data);
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
        <Link className="btn btn-primary color-dark m-3" to="/matches">
            Matches
          </Link>
          <Link className="btn btn-outline-light m-3" to="/">
            Logout
          </Link>
        </div>
      </nav>
      <div className="card shadow">
            <div className="card-header">
              <h2 className="text-center">Match Details</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <span className="detail-label">Match : </span> {matches.match}
                </li>
                <li className="list-group-item">
                  <span className="detail-label">Format : </span> {matches.format}
                </li>
                <li className="list-group-item">
                  <span className="detail-label">Location : </span> {matches.location}
                </li>
                <li className="list-group-item">
                  <span className="detail-label">Date : </span> {matches.date}
                </li>
                <li className="list-group-item">
                  <span className="detail-label">Time : </span> {matches.time}
                </li>
                <li className="list-group-item">
                  <span className="detail-label">Total Seats : </span> {matches.totalSeats}
                </li>
                <li className="list-group-item">
                  <span className="detail-label">Available Seats : </span> {matches.availableSeats}
                </li>
                <li className="list-group-item">
                  <span className="detail-label">Description : </span> {matches.description}
                </li>
              </ul>
            </div>
            <div className="card-footer text-center">
              <Link className="btn btn-primary" to={"/Admin/Admin"}>
                Back 
              </Link>
            </div>
          </div>

    </div>
    
  
  );
}