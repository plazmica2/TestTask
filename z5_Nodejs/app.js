const https = require("https");

let url = "https://reqres.in/api/users?page=2";

https.get(url, (res) => {
  let rawData = "";

  res.on("data", (chunk) => {
    rawData += chunk;
  });

  res.on("end", () => {
    const parsedData = JSON.parse(rawData);
    console.log(parsedData.data);
  });
});
