var model = require('../index.js')();

if (model) {
  console.log("Model is " + model);
} else {
  // for debugging, get the hardware versions so we can add ths into index.js
  var fs = require('fs');
  var CPU_INFO_FILE_PATH = "/proc/cpuinfo";
  var cpu_info = fs.readFileSync(CPU_INFO_FILE_PATH).toString();
  cpu_info = cpu_info.slice(cpu_info.lastIndexOf("Revision") , cpu_info.length);
  revision = cpu_info.slice(cpu_info.indexOf(":")+1 , cpu_info.indexOf("\n")).trim();
  console.log("Unknown revision " + revision);
}

