var fs = require('fs');

var CPU_INFO_FILE_PATH = "/proc/cpuinfo";

var ras_tab = {
  "0002"   : "Model_B_Revision_1.0",
  "0003"   : "Model_B_Revision_1.0_ECN0001",
  "0004"   : "Model_B_Revision_2.0",
  "0005"   : "Model_B_Revision_2.0",
  "0006"   : "Model_B_Revision_2.0",
  "0007"   : "Model_A",
  "0008"   : "Model_A",
  "0009"   : "Model_A",
  "0010"   : "Model_B+",
  "900032" : "Model_B+_Revision_1.2",
  "0011"   : "Compute_Module",
  "0012"   : "Model_A+",
  "900021" : "Model_A+_Revision_1.1",
  "0013"   : "Model_B+_Revision_1.2",
  "0014"   : "Compute_Module",
  "000d"   : "Model_B_Revision_2.0",
  "000e"   : "Model_B_Revision_2.0",
  "000f"   : "Model_B_Revision_2.0",
  "a020a0" : "Compute_Module_3",
  "a01040" : "Model_B_PI_2",
  "a01041" : "Model_B_PI_2_Revision_1.1",
  "a21041" : "Model_B_PI_2",
  "a02082" : "Model_B_PI_3",
  "a22042" : "Model_B_PI_2_Revision_1.2",
  "a22082" : "Model_B_PI_3",
  "a32082" : "Model_B_PI_3",
  "a52082" : "Model_B_PI_3",
  "a020d3" : "Model_B+_PI_3", 
  "900092" : "Model_PiZero_Revision_1.2",
  "900093" : "Model_PiZero_Revision_1.3",
  "920093" : "Model_PiZero_Revision_1.3",
  "9000c1" : "Model_PiZeroW_Revision_1.1",
  "9020e0" : "Model_A+_PI_3"
};



module.exports = function(){
  var cpu_info = fs.readFileSync(CPU_INFO_FILE_PATH).toString();
  cpu_info = cpu_info.slice(cpu_info.lastIndexOf("Revision") , cpu_info.length);
  revision = cpu_info.slice(cpu_info.indexOf(":")+1 , cpu_info.indexOf("\n")).trim();
  return ras_tab[revision]
}

