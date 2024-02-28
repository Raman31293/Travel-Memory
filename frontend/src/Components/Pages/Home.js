import React, { useState, useEffect } from "react";
import Card from "../UIC/Card";
import FeaturedCard from "../UIC/FeaturedCard";
import axios from "axios";
import { baseURL } from "../../url";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${baseURL}/trip/`).then((res) => setData(res.data));
  }, []);
  console.log(data)
   // return statment in if block to avoid undefined output
  // in else statment shows loading // loader
  if (data) {
    return (
      <div style={{ margin: "5%" }}>
        {data.map((e) => {
          if (e.featured) {
            return <FeaturedCard
              title={e.tripName}
              tripType ={e.tripType}
              description = {e.shortDescription}
              id = {e._id}
            />;
          } else {
            return null;
          }
        })}
        {data.map((e) => {
          if (!e.featured) {            
            return <Card
             title={e.tripName}
              tripType = {e.tripType}
              description = {e.shortDescription}
              id = {e._id}
            />;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return <>Loading...</>;
  }
}
