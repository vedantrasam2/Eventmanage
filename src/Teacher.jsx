import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./Images/logo.png";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";
import Details from "./Details";
import AddStudentInfo from "./AddStudentInfo";

import { MDBContainer } from "mdbreact";
import Cards from "./Cards";
import Results from "./Results";
import Sidenav from "./sidenav";

const Teacher = () => {
  const [addInfo, setAddInfo] = useState(false);
  const [myDetails, setMyDetails] = useState(true);
  const [changePass, setChangePass] = useState(false);
  const [data, getData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/admin").then((res) => {
      console.log(res.data);
      getData(res.data);
    });
  }, []);

  return (
    <>
      {/* SIDEBAR */}
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="black"
          variant="dark"
          color="white"
        >
          <NavLink to="/">
            <Navbar.Brand className="logo">
              {" "}
              <img src={logo}></img>
            </Navbar.Brand>
          </NavLink>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navi1">
                <NavLink className="navlink" to="/about us">
                  About us
                </NavLink>
                <NavLink className="navlink" to="/topevents">
                  Top Events
                </NavLink>
                <NavLink className="navlink" to="/allevents">
                  All Events
                </NavLink>
                <NavLink className="navlink" to="/prdesk">
                  PR Desk
                </NavLink>
                <NavLink className="navlink" to="/result">
                  Result
                </NavLink>
              </Nav>
              <Nav className="navi2">
                <NavLink className="navlink" to="/">
                  Logout
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* SIDEBAR ENDS */}

      <div className="flex teacher">
        <div className="sidebar justify-self-start  px-4 w-[300px] h-screen overflow-y-auto text-center bg-gray-800">
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600" />
              <h1 className="font-bold text-gray-200 text-[15px] ml-3">
                Teacher Panel
              </h1>
            </div>
            <div className="my-2 bg-gray-400 h-[1px]" />
            <div className=" grid grid-cols-2 gap-1 p-4 w-full h-26 bg-gray-100 rounded-md ">
              <span className="text-[15px] ml-4 text-gray-700 font-bold">
                Name
              </span>
              <span className=" font-bold ml-1 text-[12px] bg-blue-500 px-4 py-1 rounded-full text-slate-100">
                Teacher
              </span>
            </div>
          </div>

          <button
            className=" w-full p-2.5 mt-8 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-blue-600 text-black"
            onClick={() => {
              setMyDetails(true);
              setAddInfo(false);
              setChangePass(false);
            }}
          >
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Student details
            </span>
          </button>
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-green-500 text-black"
            onClick={() => {
              setAddInfo(true);
              setMyDetails(false);
            }}
          >
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Event Stats
            </span>
          </div>

          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-green-500 text-black"
            onClick={() => {
              setChangePass(true);
              setAddInfo(false);
              setMyDetails(false);
            }}
          >
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Add Result
            </span>
          </div>
          <Link to="/">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-500 hover:bg-red-400 text-black">
              <i className="bi bi-box-arrow-in-right" />
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Logout
              </span>
            </div>
          </Link>
        </div>

        {myDetails && (
          <div>
            {/* BOX 01 */}
            {<Details data={data} />}
          </div>
        )}

        {addInfo && <Cards data={data} />}
        {changePass && <Results />}
      </div>
    </>
  );
};

export default Teacher;
