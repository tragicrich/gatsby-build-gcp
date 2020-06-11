const config = { keyFilename: "./serviceAccount.json" };
const builder = require("./build.js")(config);



module.exports.buildGatsby = function buildGatsby(req, res) {

  const options = {
    requestBody: { branchName: "master" },
    triggerId: "[ENTER TRIGGER ID]"
  };

  builder.runTrigger(options, function(err, resp) {
    if (err) {
      console.log(err)
    }

    console.log(resp)
  });

};