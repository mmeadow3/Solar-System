"use strict";
// You'll be creating a web page that will display important scientific data about all eight planets in our solar system.
 // The information about each planet will be separate modules.

 //////need to make new module for each planet////////
const $ = jQuery;

const Earth = require('./earth');
const Neptune = require('./neptune');
const Mars = require('./mars');

// console.log("Mars")
// console.log(Mars.name)
function outputTo(domElement) {
  $('#planets').append(`<div> ${Mars.name} is located near ${Mars.location} and has a population of ${Mars.population}</div>`);
  $('#planets').append(`<div> ${Earth.name} is located near ${Earth.location} and has a population of ${Earth.population}</div>`);
  $('#planets').append(`<div> ${Neptune.name} is located near ${Neptune.location} and has a population of ${Neptune.population}</div>`);
}
outputTo();
