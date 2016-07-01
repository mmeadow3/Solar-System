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