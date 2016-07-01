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