"use strict";
// You'll be creating a web page that will display important scientific data about all eight planets in our solar system.
 // The information about each planet will be separate modules.

 //////need to make new module for each planet////////
const $ = jQuery;

const Earth = require('./earth');
const Neptune = require('./neptune');
const Mars = require('./mars');



 function outputTo(domElement) {
  $('#planets').append(mars.name);
}
outputTo();
