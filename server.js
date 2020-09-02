var spsave = require("spsave").spsave;
var fs = require("fs");
var coreOptions = {
  siteUrl: "URL",
  notification: true,
};

var creds = {
  username: "USERNAME",
  password: "PASSWORD",
  online: true,
  // domain: "[domain (on premise)]"
};

const { parseAsync } = require("json2csv");

const fields = ["a", "l", "b", "c", "d"];
const opts = { fields };

var myData = [{ a: "a1" }, { l: "a1" }, { b: "a1" }, { c: "a1" }, { d: "a1" }];
let data;
parseAsync(myData, opts)
  .then((csv) => {
    console.log(csv);
    var fileOptions = {
      folder: "FOLDER PATH",
      fileName: "FILENAME",
      fileContent: csv,
    };
    spsave(coreOptions, creds, fileOptions)
      .then(function () {
        console.log("saved");
      })
      .catch(function (err) {
        console.log(err);
      });
  })
  .catch((err) => console.error(err));
