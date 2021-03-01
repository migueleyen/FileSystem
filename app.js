const fs = require("fs");

fs.writeFile("./text.txt", "Async Editing text Waiting ...", function (err) {
  if (!err) {
    fs.readFile("./text.txt", function (err, data) {
      if (!err) {
        console.log(data.toString());
      }
    });
  }
});

// fs.readFile("./text.txt", function (err, data) {
//   if (!err) {
//     console.log(data.toString());
//   }
// });

fs.writeFileSync("./text.txt", "Sync Editing Text");

var reading = fs.readFileSync("./text.txt");

console.log(reading.toString());
