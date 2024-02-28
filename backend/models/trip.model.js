// const {model} = require("mongoose");
const db = require("../connection");
const mongoose = require("../connection").mongoose;

const tripSchema = mongoose.Schema({
  tripName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  startDateOfJourney: {
    type: String,
    required: true,
  },
  endDateOfJourney: {
    type: String,
    required: true,
  },
  nameOfHotels: {
    type: String,
  },
  placesVisited: {
    type: String,
  },
  totalCost: { 
    type: Number 
  },
  tripType: { 
    type: String, 
    enum: ["bagpacking", "leisure", "business"] 
  }, //enum validation takes array and check through them   
  experience:{
    type: String,
  },
  image: { 
    type: String 
  },
  shortDescription: {     
    type: String, 
    required: true,
  },
  featured: {
    type: Boolean, default: false },
  //set default value of date to current date
});

const Trip = mongoose.model('tripDetails',tripSchema)
module.exports = {Trip}