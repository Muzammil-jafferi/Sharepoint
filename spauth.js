const spauth = require("node-sp-auth");
const request = require("request-promise");

spauth
  .getAuth("https://team.effem.com/sites/GlobalTPM", {
    username: "muzammil.jafferi@effem.com",
    password: "Concordia@4321",
    online: true
    // domain: "[domain (on premise)]"
  })
  .then(data => {
    var headers = data.headers;
    headers["Accept"] = "application/json;odata=verbose";

    request
      .get({
        url:
          "https://team.effem.com/sites/GlobalTPM/_api/web/getfolderbyserverrelativepath(decodedurl='/sites/GlobalTPM/UK')/folders",
        headers: headers,
        json: true
      })
      .then(response => {
        console.log(response.d);
      });
  });
