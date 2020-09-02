var spsave = require("spsave").spsave;
var fs = require("fs");
var coreOptions = {
  // siteUrl: "https://fractalanalytic.sharepoint.com/sites/concordia-dev",
  siteUrl: "https://team.effem.com/sites/GlobalTPM",
  notification: true
  //checkin: true,
  //checkinType: 1
};
// var coreOptions = {
//   siteUrl: 'https://tenant.sharepoint.com/sites/yoursite',
//   notification: true,
//   // path to document library or in this case the master pages gallery
//   folder: "_catalogs/masterpage/Display Templates/",
//   flatten: false

// };
var creds = {
  username: "concordia@fractal.ai",
  password: "Unifi@2018",
  // domain: "[domain (on premise)]"
};

// const spauth = require("node-sp-auth");
// const request = require("request-promise");

// spauth
//   .getAuth("https://fractalanalytic.sharepoint.com/sites/concordia-dev/", {
//     username: "concordia@fractal.ai",
//     password: "Unifi@2018"
//   })
//   .then(data => {
//     var headers = data.headers;
//     headers["Accept"] = "application/json;odata=verbose";

//     request
//       .get({
//         url:
//           "https://fractalanalytic.sharepoint.com/sites/concordia-dev/_api/web/getfolderbyserverrelativepath(decodedurl='/sites/concordia-dev/Shared%20Documents')/listitemallfields",
//         headers: headers,
//         json: true
//       })
//       .then(response => {
//         console.log(JSON.stringify(response.d));
//       });
//   });
const { parseAsync } = require("json2csv");

const fields = ["a", "l", "b", "c", "d"];
const opts = { fields };

var myData = [{ a: "a1" }, { l: "a1" }, { b: "a1" }, { c: "a1" }, { d: "a1" }];
let data;
parseAsync(myData, opts)
  .then(csv => {
    console.log(csv);
    var fileOptions = {
      folder: "Global Template/test",
      fileName: "file.csv",
      fileContent: csv
    };
    spsave(coreOptions, creds, fileOptions)
      .then(function() {
        console.log("saved");
      })
      .catch(function(err) {
        console.log(err);
      });
  })
  .catch(err => console.error(err));
