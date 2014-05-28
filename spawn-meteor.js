var child_process = require("child_process");
var args = [
  "test-packages",
  "success",
  "--driver-package",
  "test-in-console"
]

var child = child_process.spawn("meteor", args);

child.stdout.setEncoding("utf8");

child.stderr.setEncoding("utf8");

child.stdout.on("data", function(data) {
    return process.stdout.write(data);
});

child.stderr.on("data",function(data) {
    return process.stderr.write(data);
});


setTimeout(function () {
  console.log("Timeout test.js");
  child.kill("SIGINT");
//  process.exit(0);
}, 30000);