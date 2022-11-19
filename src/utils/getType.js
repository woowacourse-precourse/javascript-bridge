const datatTypeConst = require("./const/dataType");
function getType(param) {
  return Array.isArray(param) ? datatTypeConst.array : typeof param;
}

module.exports = getType;
