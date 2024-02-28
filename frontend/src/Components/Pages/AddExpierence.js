import React, { useState, useEffect } from "react";
import { baseURL } from "../../url";
import axios from "axios"

export default function AddExpierence() {
  const [formdata, setFormdata] = useState({
    tripName: "",
    startDateOfJourney: "",
    endDateOfJourney: "",
    nameOfHotels: "",
    placesVisited: "",
    totalCost: 0,
    tripType: "",
    experience: "",
    image: "",
    shortDescription: "",
    featured: false,
  });
  const submitForm = () => {
    axios.post(`${baseURL}/trip`, formdata)
  };
  return (
    <div style={{ margin: "2%" }}>
      <div className="mb-3">
        <label for="tripName" className="form-label">
          Trip Name
        </label>
        <input
          type="text"
          className="form-control"
          id="tripName"
          placeholder="Enter Trip Name Here"
          value={formdata.tripName}
          onChange={(e) =>
            setFormdata({ ...formdata, tripName: e.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label for="tripDate" className="form-label">
          Trip Date
        </label>
        <div className="row">
          {/* this will using grid system of 12 columnes and here we define col length to 6 grid */}
          <div className="col-6">
            <input
              type="date"
              className="form-control"
              id="startDate"
              value={formdata.startDateOfJourney}
              onChange={(e) =>
                setFormdata({ ...formdata, startDateOfJourney: e.target.value })
              }
            />
          </div>
          <div className="col-6">
            <input
              type="date"
              className="form-control"
              id="endtDate"
              value={formdata.endDateOfJourney}
              onChange={(e) =>
                setFormdata({ ...formdata, endDateOfJourney: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label for="nameOfHotels" className="form-label">
          Hotels Names
        </label>
        <input
          type="text"
          className="form-control"
          id="nameOfHotels"
          placeholder="Enter  Name Of Hotel Here"
          value={formdata.nameOfHotels}
          onChange={(e) =>
            setFormdata({ ...formdata, nameOfHotels: e.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label for="placesVisited" className="form-label">
          Visited Places
        </label>
        <input
          type="text"
          className="form-control"
          id="placesVisited"
          placeholder="Enter Visited Places Here"
          value={formdata.placesVisited}
          onChange={(e) =>
            setFormdata({ ...formdata, placesVisited: e.target.value })
          }
        />
      </div>
      <div className="row">
        <div className="col-6">
          <label for="totalCost" className="form-label">
            Trip Total Cost
          </label>
          <input
            type="number"
            className="form-control"
            id="totalCost"
            placeholder="Enter Cost Of Trip Here"
            value={formdata.totalCost}
            onChange={(e) =>
              setFormdata({ ...formdata, totalCost: e.target.value })
            }
          />
        </div>
        <div className="col-6">
          <label for="tripType" className="form-label">
            Trip Type
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            value={formdata.tripType}
            onChange={(e) =>
              setFormdata({ ...formdata, tripType: e.target.value })
            }
          >
            <option selected>Select Trip Type</option>
            <option value="bagpacking">Bagpacking</option>
            <option value="leisure">Leisure</option>
            <option value="business">Business</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label for="image" className="form-label">
          Trip Images
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          placeholder="Insert Trip Images Here"
          value={formdata.image}
          onChange={(e) => setFormdata({ ...formdata, image: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label for="featured" className="form-label">
          Featured Trip
        </label>
        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="true"
              value={true}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  featured: JSON.parse(e.target.value),
                })
              }
              checked={formdata.featured === true}
            />
            <label className="form-check-label" for="true">
              True
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="false"
              value={false}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  featured: JSON.parse(e.target.value),
                })
              }
              checked={formdata.featured === false}
            />
            <label className="form-check-label" for="false">
              False
            </label>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label for="shortDescription" className="form-label">
          Trip short Description
        </label>
        <textarea
          className="form-control"
          placeholder="Enter Short Description About Your Trip Here"
          id="shortDescription"
          rows="2"
          value={formdata.shortDescription}
          onChange={(e) =>
            setFormdata({ ...formdata, shortDescription: e.target.value })
          }
        ></textarea>
      </div>
      <div className="mb-3">
        <label for="expierence" className="form-label">
          Trip Expierence
        </label>
        <textarea
          className="form-control"
          placeholder="Enter Your Expierence Here"
          id="expierence"
          rows="4"
          value={formdata.experience}
          onChange={(e) =>
            setFormdata({ ...formdata, experience: e.target.value })
          }
        ></textarea>
      </div>
      <div className="mb-3" style={{ textAlign: "center" }}>
        <button type="button" className="btn btn-primary" onClick={submitForm}>
          Submit
        </button>
      </div>
    </div>
  );
}
