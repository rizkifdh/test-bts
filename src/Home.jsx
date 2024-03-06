import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
const Home = () => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const token = localStorage.getItem("token");
  const [data, setdata] = useState([]);
  useEffect(() => {
    if (token) {
      axios
        .get(`${baseUrl}/checklist`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setdata(res.data.data);
        });
    }
  }, []);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex text-3xl pb-10">Checklist Item</div>
      <div className="flex">
        <ul>
          {data?.map((item, index) => (
            <li key={index} className="flex">
              <div className="pr-4">{item.id}</div>
              <div className="pr-4">{item.name}</div>
              <ul className="">
                {item.items?.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    ID: {subItem.id}, Name: {subItem.name}, Completion Status:{" "}
                    {subItem.itemCompletionStatus === false ? "false" : "true"}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
