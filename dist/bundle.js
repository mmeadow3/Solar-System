(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./earth":2,"./mars":3,"./neptune":4}],2:[function(require,module,exports){
"use strict";

let Earth = {};

Earth.populate = function () {

}



 function outputTo(domElement) {
  $('#planets').append(Earth);
}

module.exports = Earth; 
},{}],3:[function(require,module,exports){
"use strict";

let Mars = {};
	
Mars.populate = function () {

}
Mars.populate.prototype.addName = function(name) {
	this.name = "Mars"
};

Mars.name = "mars"

 function outputTo(domElement) {
  $('#planets').append(Mars);
}

module.exports = Mars; 
},{}],4:[function(require,module,exports){
"use strict";

let Neptune = {};

Neptune.populate = function () {
	
}






module.exports = Neptune; 
},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
