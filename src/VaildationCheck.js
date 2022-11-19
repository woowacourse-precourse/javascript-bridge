const ErrorWithPrifix = require("./CustomError");
const varTypeConst = require("./utils/const/varType");
const ErrorMessage = require("./utils/const/errorMessage");
const getVarType = require("./utils/getVarType");

class ValidationCheck {
  isExactVarType(varType, target) {
    if (typeof varType !== "string")
      throw ErrorWithPrifix(ErrorMessage.varTypeIsNotString);

    const targetVarType = Array.isArray(target)
      ? varTypeConst.array
      : typeof target;

    if (varType !== targetVarType)
      throw ErrorWithPrifix(ErrorMessage.varTypeIsNotExactForTarget);

    return true;
  }

  isNumberIntheRange(numRange, targetNumber) {
    if (typeof targetNumber !== "number")
      throw ErrorWithPrifix(ErrorMessage.notNumber);
    if (!Array.isArray(numRange) || numRange.length !== 2)
      throw ErrorWithPrifix(ErrorMessage.numRangeIsNotNumberArray);
    if (typeof numRange[0] !== "number" || typeof numRange[1] !== "number")
      throw ErrorWithPrifix(ErrorMessage.notNumber);
    if (numRange[0] > numRange[1])
      throw ErrorWithPrifix(ErrorMessage.notCorrectRange);
    if (targetNumber < numRange[0] || targetNumber > numRange[1])
      throw ErrorWithPrifix(ErrorMessage.notInRange);
    return true;
  }

  isStringIntheList(stringList, targetString) {
    if (!Array.isArray(stringList))
      throw ErrorWithPrifix(ErrorMessage.notArray);
    if (typeof targetString !== "string")
      throw ErrorWithPrifix(ErrorMessage.notString);
    for (let item of stringList) {
      if (typeof item !== "string")
        throw ErrorWithPrifix(ErrorMessage.notString);
      if (item === targetString) return true;
    }

    throw ErrorWithPrifix(ErrorMessage.stringIsNotInList);
  }
  isExactObjectStructure(object, targetObject) {
    const creteriaKeys = Object.keys(object);
    const compareKeys = Object.keys(targetObject);

    if (creteriaKeys.length !== compareKeys.length)
      throw ErrorWithPrifix(ErrorMessage.notSamePropertyCounts);

    Object.keys(object).forEach((keys) => {
      if (!targetObject.hasOwnProperty(keys))
        throw ErrorWithPrifix(ErrorMessage.notHasProperty);
      if (getVarType(object[keys]) !== getVarType(targetObject[keys]))
        throw ErrorWithPrifix(ErrorMessage.varTypeIsNotExactForTarget);
    });

    return true;
  }
}

module.exports = ValidationCheck;
