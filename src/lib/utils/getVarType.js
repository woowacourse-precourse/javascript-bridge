const varTypeConst = require("../../lib/const/varType");
function getVarType(param) {
  return Array.isArray(param) ? varTypeConst.array : typeof param;
}

module.exports = getVarType;
