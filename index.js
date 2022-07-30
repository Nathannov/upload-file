const fs = require("fs");
const { parse } = require("csv-parse");
const { ShapeManager } = require("./src/class_files/square");
// get time here

// fs.createReadStream() to create a readable stream. Streams let you work with large amounts of data by allowing you to access it in chunks.
const readStream = fs.createReadStream("./input.csv");

// This will wait until we know the readable stream is actually valid before piping
readStream.on("open", () => { 
  console.log("open");
  // This just pipes the read stream to the response object (which goes to the client)
  readStream.pipe(parse({ from_line: 2 }))
    .on("error", function (error) {
      console.log(error.message);
    })
    .on("data", function (row) {
      //console.log(row);
      const sm = new ShapeManager("square");
      const shape = sm.createShape(+row[0]);
      console.log(shape.calculateArea());
    })
    .on("end", function () {
      console.log("end");
    })
    .on("close", () => {
      // get time here
      console.log("file processed");
    })
});