const validationMakeMapObjProps = (answer) => answer > 1 || answer < 0;

const makeMapObj = (answer, input) => {
  const length = Math.min(answer.length, input.length);
  const map = {};
  for (let i = 0; i < length; i++) {
    if (
      validationMakeMapObjProps(answer[i]) ||
      validationMakeMapObjProps(input[i])
    ) {
      throw new Error("[ERROR] 인자는 0과 1로 이루어져야합니다.");
    }
    const value = answer[i] === input[i];
    map[i] = value;
  }
  return map;
};
const makeMap = (input, obj) => {};

exports.validationMakeMapObjProps = validationMakeMapObjProps;
exports.makeMapObj = makeMapObj;
exports.makeMap = makeMap;
