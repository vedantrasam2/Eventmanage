import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const userprofile = ({ userDetails, data }) => {
  // NO USE COMPONENT
  // NO USE COMPONENT
  // NO USE COMPONENT
  // NO USE COMPONENT
  // NO USE COMPONENT
  // NO USE COMPONENT
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
      </div>

      <h1 className="image">Events : </h1>

      <div classname="table w-full">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Nos
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Contigent
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Leader
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Player 1
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Player 2
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Player 3
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Player 4
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Player 5
                  </th>
                </tr>
              </thead>
              {/* <tbody>
                {data?.map((itr, index) => (
                  <tr>
                    <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                      {itr?.category}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                      {itr?.leader}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                      {itr?.username}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                      {itr?.player1}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                      {itr?.player2}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                      {itr?.player3}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                      {itr?.player4}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                      {itr?.player5}
                    </td>
                  </tr>
                ))}
              </tbody> */}
            </table>
          </div>
        </div>
      </div>

      {/* <tr>
        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
          {index + 1}
        </td>
        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
          {itr?.category}
        </td>
        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
          {itr?.leader}
        </td>
        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
          {itr?.username}
        </td>
        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
          {itr?.player1}
        </td>
        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
          {itr?.player2}
        </td>
        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
          {itr?.player3}
        </td>
        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
          {itr?.player4}
        </td>
        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
          {itr?.player5}
        </td>
      </tr> */}

      {/* <div className="flex">
        <h6 className="image">Contigent Name: </h6>{" "}
        <p className="image ml-2">{data[0]?.leader}</p>
        <h4 className="image ml-5">Players: </h4>
        <p className="image ml-2 ">1.{data[0]?.player1}</p>
        <p className="image ml-2">2.{data[0]?.player2}</p>
        <p className="image ml-2 ">3.{data[0]?.player3}</p>
        <p className="image ml-2">4.{data[0]?.player4}</p>
        <p className="image ml-2">5.{data[0]?.player5}</p>
      </div> */}
    </div>
  );
};
export default userprofile;
