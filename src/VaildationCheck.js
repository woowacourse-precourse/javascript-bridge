const ErrorWithPrifix = require("./CustomError");
const dataTypeConst = require("./utils/const/dataType");
const ErrorMessage = require("./utils/const/errorMessage");
const getType = require("./utils/getType");

class ValidationCheck {
  isExactDataType(dataType, target) {
    if (typeof dataType !== "string")
      throw ErrorWithPrifix(ErrorMessage.dataTypeIsNotString);

    const targetDataType = Array.isArray(target)
      ? dataTypeConst.array
      : typeof target;

    if (dataType !== targetDataType)
      throw ErrorWithPrifix(ErrorMessage.dataTypeIsNotExactForTarget);

    return true;
  }

  isNumberIntheRange(numRange, targetNumber) {
    if (typeof targetNumber !== "number")
      throw ErrorWithPrifix(ErrorMessage.notNumber);
    if (!(Array.isArray(numRange) && numRange.length == 2))
      throw ErrorWithPrifix(ErrorMessage.numRangeIsNotNumberArray);
    if (!(typeof numRange[0] === "number" && typeof numRange[1] === "number"))
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
    if (!typeof targetString === "string")
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
      if (!(getType(object[keys]) === getType(targetObject[keys])))
        throw ErrorWithPrifix(ErrorMessage.dataTypeIsNotExactForTarget);
    });

    return true;
  }
}

module.exports = ValidationCheck;
