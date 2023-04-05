import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Userdata({ userDetails, data }) {
  console.log(userDetails);
  //   const [data, getData] = useState({});

  //   useEffect(() => {
  //     axios
  //       .get(`http://localhost:5000/${userDetails.username}`)
  //       .then((result) => {
  //         console.log(result.data);
  //         getData(result.data);
  //       });
  //   }, []);

  //   console.log(data);

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
                    Event
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Contigent
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Leader
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    participant 1
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    participant 2
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    participant 3
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    participant 4
                  </th>
                  <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    participant 5
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.length > 0
                  ? data.map((val) => (
                      <>
                        <tr>
                          <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                            {val?.category}
                          </td>
                          <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                            {val?.leader}
                          </td>
                          <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                            {val?.username}
                          </td>
                          <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                            {val?.participant1}
                          </td>
                          <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                            {val?.participant2}
                          </td>
                          <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                            {val?.participant3}
                          </td>
                          <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                            {val?.participant4}
                          </td>
                          <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                            {val?.participant5}
                          </td>
                        </tr>
                      </>
                    ))
                  : "No data Found"}
              </tbody>

              {/* <tbody> */}
              {/* EVENT 01 */}
              {/* <tr>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {val?.category}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {val?.leader}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {val?.username}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {val?.participant1}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {val?.participant2}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {val?.participant3}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {val?.participant4}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {val?.participant5}
                  </td>
                </tr> */}
              {/* EVENT 02 */}
              {/* <tr>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[1]?.category}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[1]?.leader}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[1]?.username}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[1]?.participant1}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[1]?.participant2}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[1]?.participant3}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[1]?.participant4}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[1]?.participant5}
                  </td>
                </tr> */}
              {/* EVENT 03 */}
              {/* <tr>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[2]?.category}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[2]?.leader}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[2]?.username}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[2]?.participant1}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[2]?.participant2}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[2]?.participant3}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[2]?.participant4}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[2]?.participant5}
                  </td>
                </tr> */}
              {/* EVENT 04 */}
              {/* <tr>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[3]?.category}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[3]?.leader}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[3]?.username}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[3]?.participant1}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[3]?.participant2}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[3]?.participant3}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[3]?.participant4}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[3]?.participant5}
                  </td>
                </tr> */}
              {/* EVENT 05 */}
              {/* <tr>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[4]?.category}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[4]?.leader}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[4]?.username}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[4]?.participant1}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[4]?.participant2}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[4]?.participant3}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[4]?.participant4}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[4]?.participant5}
                  </td>
                </tr> */}
              {/* EVENT 06 */}
              {/* <tr>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[5]?.category}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[5]?.leader}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[5]?.username}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[5]?.participant1}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[5]?.participant2}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[5]?.participant3}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[5]?.participant4}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                    {data[5]?.participant5}
                  </td>
                </tr> */}
              {/* </tbody> */}
            </table>
          </div>
        </div>
      </div>

      {/* <tr>
        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
          {val?.leader}
        </td>
        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
          {val?.leader}
        </td>
        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
          {val?.leader}
        </td>
        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
          {val?.leader}
        </td>
        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
          {val?.leader}
        </td>
        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
          {val?.leader}
        </td>
        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
          {val?.leader}
        </td>
        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
          {val?.leader}
        </td>
        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
          {val?.leader}
        </td>
      </tr> */}

      {/* <div className="flex">
        <h6 className="image">Contigent Name: </h6>{" "}
        <p className="image ml-2">{val?.leader}</p>
        <h4 className="image ml-5">participants: </h4>
        <p className="image ml-2 ">1.{val?.participant1}</p>
        <p className="image ml-2">2.{val?.participant2}</p>
        <p className="image ml-2 ">3.{val?.participant3}</p>
        <p className="image ml-2">4.{val?.participant4}</p>
        <p className="image ml-2">5.{val?.participant5}</p>
      </div> */}
    </div>
  );
}

export default Userdata;
