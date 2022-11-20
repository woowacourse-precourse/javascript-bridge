const ErrorWithPrifix = require("./CustomError");
const varTypeConst = require("./utils/const/varType");
const ErrorMessage = require("./utils/const/errorMessage");
const getVarType = require("./utils/func/getVarType");

class ValidationCheck {
  isNumber(target) {
    if (!(typeof target === "number" || typeof target === "string"))
      throw new ErrorWithPrifix(ErrorMessage.notNumber);
    if (target === "") throw new ErrorWithPrifix(ErrorMessage.notNumber);
    if (Number.isNaN(Number(target)))
      throw new ErrorWithPrifix(ErrorMessage.notNumber);
    return true;
  }
  isExactVarType(varType, target) {
    if (typeof varType !== "string")
      throw new ErrorWithPrifix(ErrorMessage.varTypeIsNotString);

    const targetVarType = Array.isArray(target)
      ? varTypeConst.array
      : typeof target;

    if (varType !== targetVarType)
      throw new ErrorWithPrifix(ErrorMessage.varTypeIsNotExactForTarget);

    return true;
  }

  isNumberIntheRange(numRange, targetNumber) {
    if (typeof targetNumber !== "number")
      throw new ErrorWithPrifix(ErrorMessage.notNumber);
    if (!Array.isArray(numRange) || numRange.length !== 2)
      throw new ErrorWithPrifix(ErrorMessage.numRangeIsNotNumberArray);
    if (typeof numRange[0] !== "number" || typeof numRange[1] !== "number")
      throw new ErrorWithPrifix(ErrorMessage.notNumber);
    if (numRange[0] > numRange[1])
      throw new ErrorWithPrifix(ErrorMessage.notCorrectRange);
    if (targetNumber < numRange[0] || targetNumber > numRange[1])
      throw new ErrorWithPrifix(ErrorMessage.notInRange);
    return true;
  }

  isStringIntheList(stringList, targetString) {
    if (!Array.isArray(stringList))
      throw new ErrorWithPrifix(ErrorMessage.notArray);
    if (typeof targetString !== "string")
      throw new ErrorWithPrifix(ErrorMessage.notString);
    for (let item of stringList) {
      if (typeof item !== "string")
        throw new ErrorWithPrifix(ErrorMessage.notString);
      if (item === targetString) return true;
    }

    throw new ErrorWithPrifix(ErrorMessage.stringIsNotInList);
  }
  isExactObjectStructure(object, targetObject) {
    const creteriaKeys = Object.keys(object);
    const compareKeys = Object.keys(targetObject);

    if (creteriaKeys.length !== compareKeys.length)
      throw new ErrorWithPrifix(ErrorMessage.notSamePropertyCounts);

    Object.keys(object).forEach((keys) => {
      if (!targetObject.hasOwnProperty(keys))
        throw new ErrorWithPrifix(ErrorMessage.notHasProperty);
      if (getVarType(object[keys]) !== getVarType(targetObject[keys]))
        throw new ErrorWithPrifix(ErrorMessage.varTypeIsNotExactForTarget);
    });

    return true;
  }
}

module.exports = ValidationCheck;
