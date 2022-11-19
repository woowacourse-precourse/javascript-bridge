const ERROR_NOT_NUMBER = `주어진 값이 number가 아닙니다.`;
const ERROR_NOT_ARRAY = `주어진 값이 Array가 아닙니다.`;
const ERROR_NOT_STRING = `주어진 값이 string이 아닙니다.`;
const ERROR_NOT_CORRECT_RANGE = `범위 설정이 잘못되었습니다.`;
const ERROR_NOT_IN_RANGE = `범위 안의 숫자가 아닙니다.`;
const ERROR_NOT_HAS_PROPERTY = `해당 프로퍼티가 없습니다`;
const ERROR_NOT_SAME_PROPERTY_COUNTS = "두 객체의 프로퍼티 숫자가 다릅니다";
const ERROR_DATATYPE_IS_NOT_EXACT_FOR_TARGET = `dataType으로 온 값의 타입과 파라미터로 온 값의 타입이 다릅니다.`;
const ERROR_DATATYPE_IS_NOT_STRING = `dataType으로 온 값이 string이 아닙니다.`;
const ERROR_NUMBERRANGE_IS_NOT_NUMBUR_ARRAY = `numRange 값이 숫자 배열이 아닙니다.`;
const ERROR_STRING_IS_NOT_IN_LIST = "리스트 안에 해당 스트링 값이 없습니다";
module.exports = {
  notNumber: ERROR_NOT_NUMBER,
  notArray: ERROR_NOT_ARRAY,
  notString: ERROR_NOT_STRING,
  notCorrectRange: ERROR_NOT_CORRECT_RANGE,
  notInRange: ERROR_NOT_IN_RANGE,
  notHasProperty: ERROR_NOT_HAS_PROPERTY,
  notSamePropertyCounts: ERROR_NOT_SAME_PROPERTY_COUNTS,
  dataTypeIsNotString: ERROR_DATATYPE_IS_NOT_STRING,
  dataTypeIsNotExactForTarget: ERROR_DATATYPE_IS_NOT_EXACT_FOR_TARGET,
  numRangeIsNotNumberArray: ERROR_NUMBERRANGE_IS_NOT_NUMBUR_ARRAY,
  stringIsNotInList: ERROR_STRING_IS_NOT_IN_LIST,
};
