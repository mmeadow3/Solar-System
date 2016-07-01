(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./earth":2,"./mars":3,"./neptune":4}],2:[function(require,module,exports){
"use strict";

let Earth = {};

Earth.populate = function () {
	this.name = "Earth";
	this.population = 6000000;
	this.location = "Earth";
};
Earth.populate();



module.exports = Earth; 
},{}],3:[function(require,module,exports){
"use strict";

let Mars = {};
	
Mars.populate = function () {
	this.name = "Mars";
	this.population = 0;
	this.location = "next to Earth";
};
Mars.populate(Mars);

// console.log(Mars)



module.exports = Mars; 
},{}],4:[function(require,module,exports){
"use strict";

let Neptune = {};

Neptune.populate = function () {
	this.name = "Neptune";
	this.population = 0;
	this.location = "far from earth";
};
Neptune.populate(Neptune);




module.exports = Neptune; 
},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
