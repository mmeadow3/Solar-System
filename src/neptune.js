"use strict";

let Neptune = {};

Neptune.populate = function () {
	this.name = "Neptune";
	this.population = 0;
	this.location = "far from earth";
};
Neptune.populate(Neptune);




module.exports = Neptune; 