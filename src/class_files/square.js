const { ShapeInterface } = require("../interface/shape_interfaces");

// this class override the methods created on shape interface
class Square extends ShapeInterface {
	constructor(length) {
		super();
		this.length = length;
	}

	calculateArea() {
		return Math.pow(this.length, 2);
	}
}

module.exports = {
	Square
}
