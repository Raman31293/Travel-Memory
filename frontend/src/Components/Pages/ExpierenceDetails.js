import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../url";

export default function ExpierenceDetails(props) {
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(`${baseURL}/trip/${id}`).then((res) => setData(res.data));
  }, [id]);
  if (data) {
    return (
      <div style={{ margin: "2%" }}>
        <div className="row">
          {/* give 2 col empty space*/}
          <div className="col-2"></div>
          <div className="col-8" style={{ textAlign: "center" }}>
            <h1>{data.tripName}</h1>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          {/* give 2 col empty space*/}
          <div className="col-2"></div>
          <div className="col-8" style={{ textAlign: "center" }}>
            <img
              src={data.image}
              alt="Image Here"
            ></img>
          </div>
          <div className="col-2"></div>
        </div>
        {/* add a line break */}
        <br />
        {/* creating container to add some info in it */}
        <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6 border bg-light">
              <div className="row">
                <div className="col-12">Name of Hotel : {data.nameOfHotels}</div>
                <div className="row">
                  <div className="col-6">Start Date : {data.startDateOfJourney}</div>
                  <div className="col-6">End Date : {data.endDateOfJourney}</div>
                </div>
                <div className="row">
                  <div className="col-12">
                    Places Visited : {data. placesVisited}
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">Trip Type : {data.tripType}</div>
                  <div className="col-6">Trip Cost : {data.totalCost}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10" style={{ textAlign: "justify" }}>{data. experience}
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    );
  } else {
    return <>Loading...</>;
  }
}
