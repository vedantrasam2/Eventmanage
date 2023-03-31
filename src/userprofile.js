import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const userprofile = ({ userDetails, data }) => {
  return (
    <div className="ml-10">
      <div className="student-details">
        <p className="text-plain image">UserId : {userDetails?._id}</p>

        <h1 className="image">Profile : {userDetails?.firstname}</h1>
        <p className="image">Date : {userDetails?.date}</p>
        <p className="image">Gender : {userDetails?.gender}</p>
        <p className="image">Username : {userDetails?.username}</p>
        <p className="image">Year : {userDetails?.year}</p>
        <p className="image">Email : {userDetails?.email}</p>
        <p className="image">Contact : {userDetails?.contact}</p>
        <h1 className="image">Events : </h1>
        {console.log(data)}

        
        {data[0]?.category === null ? (
          <p>"No event registered"</p>
        ) : (
          <>
            <h4 className="image">event 1: {data[0]?.category}</h4>
          </>
        )}
      </div>
      <div className="flex">
        <h6 className="image">Contigent Name: </h6>{" "}
        <p className="image ml-2">{data[0]?.leader}</p>
        <h4 className="image ml-5">Players: </h4>
        <p className="image ml-2 ">1.{data[0]?.player1}</p>
        <p className="image ml-2">2.{data[0]?.player2}</p>
        <p className="image ml-2 ">3.{data[0]?.player3}</p>
        <p className="image ml-2">4.{data[0]?.player4}</p>
        <p className="image ml-2">5.{data[0]?.player5}</p>
      </div>

      <h4 className="image">event 2: {data[1]?.category}</h4>
      <div className="flex">

        <h6 className="image">Contigent Name: </h6>{" "}
        <p className="image ml-2">{data[1]?.leader}</p>
        <h4 className="image ml-5">Players: </h4>
        <p className="image ml-2 ">1.{data[1]?.player1}</p>
        <p className="image ml-2">2.{data[1]?.player2}</p>
        <p className="image ml-2 ">3.{data[1]?.player3}</p>
        <p className="image ml-2">4.{data[1]?.player4}</p>
        <p className="image ml-2">5.{data[1]?.player5}</p>
      </div>


      <h4 className="image"> event 3 {  (data[2]?.category)}</h4>
      <div className="flex">

        <h6 className="image">Contigent Name: </h6>{" "}
        <p className="image ml-2">{data[2]?.leader}</p>
        <h4 className="image ml-5">Players: </h4>
        <p className="image ml-2 ">1.{data[2]?.player1}</p>
        <p className="image ml-2">2.{data[2]?.player2}</p>
        <p className="image ml-2 ">3.{data[2]?.player3}</p>
        <p className="image ml-2">4.{data[2]?.player4}</p>
        <p className="image ml-2">5.{data[2]?.player5}</p>
      </div>




    </div>
  );
};
export default userprofile;
