const fs = require("fs");
const { CsvFileProcessor } = require("./src/classes/csv_file_processor");

//Index
function checkFileExist(fileName, extention, shapeType) {
  const fileNameExt = fileName + extention;
  const pathFile = `./inputFiles/${fileNameExt}`;

  fs.access(pathFile, fs.F_OK, (err) => {
    if (err) {
      console.error("This file does not exist! Please checked out.");
      return;
    }

    callFileProcessor(pathFile, extention, shapeType);
  });
}

function callFileProcessor(pathFile, extention, shapeType) {
  let fileProcessor;

  switch (extention) {
    case '.csv': {
      fileProcessor = new CsvFileProcessor(pathFile, shapeType);
      fileProcessor.readStreamProcess();
      break;
    }
    default: {
      console.error("There is not created a process for this file extention.");
      return;
    }
  }
}

//Testing
checkFileExist("input", ".csv", "square");