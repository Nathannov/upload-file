const { Square } = require("./square");

// this class allows adding new shape classes without affecting the already implemented ones
class ShapeManager {
	constructor(shape) {
		this.shape = shape;
	}

	createShape(number) {
		let newShape;
		switch (this.shape) {
			case "square":
				newShape = new Square(number);
				break;
			default:
				throw new Error("This shape is not implemented");
		}
		return newShape;
	}
}

module.exports = {
	ShapeManager
}