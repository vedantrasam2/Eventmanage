import React, { useState, useEffect } from "react";
import axios from "axios";
import ConfettiExplosion from "react-confetti-explosion";
import Sidenav from "./sidenav";

const Result = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    axios.get("http://localhost:5000/result").then((result) => {
      // console.log(result.data);
      setInfo(result.data);
    });
  }, []);
  return (
    <>
      <ConfettiExplosion
        force={0.8}
        duration={7000}
        particleCount={250}
        width={3600}
      />
      <Sidenav></Sidenav>
      <div className="allevents">
        <h1>Result</h1>
      </div>
      <div className="allevents">
        {/* map out the data and then show which event has the winner , second place and then 3rd place */}
        <div className="flex">
          <div className="flex wrap">
            {info?.length > 0
              ? info?.map((val) => (
                  <>
                    <div
                      style={{ marginLeft: "10px", transform: "scale(0.8)" }}
                      className="list-group font-bold"
                    >
                      <h6>Category:</h6>
                      <h4>{val?.eventname}</h4>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action result"
                        style={{ background: "#000000", color: "#fff" }}
                      >
                        Winner :{" "}
                        <h4 style={{ color: "#fff" }}>{val?.firstwinner}</h4>
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action result"
                      >
                        2nd : <h4>{val?.secondwinner}</h4>
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action result"
                      >
                        3rd : <h4>{val?.thirdwinner}</h4>
                      </a>
                    </div>
                  </>
                ))
              : "No data Found"}
          </div>
        </div>
        {/* {console.log(data.firstwinner)} */}
      </div>
      <div className="allevents">
        <div className="ml-10 congo">
          <h1>🎉🎉🎊🎊 Congratualtions 🎉🎉🎊🎊 </h1>
        </div>
      </div>
    </>
  );
};

export default Result;
