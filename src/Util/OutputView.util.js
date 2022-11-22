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
const makeMap = (input, obj) => {
  const length = Math.min(input.length, Object.keys(obj).length);
  const firstFloor = [];
  const secondFloor = [];
  for (let i = 0; i < length; i++) {
    if (validationMakeMapObjProps(input[i])) {
      throw new Error("[ERROR] input은 0과 1로 이루어져야합니다.");
    }
    if (typeof obj[i] !== "boolean") {
      throw new Error("[ERROR] obj의 value는 boolean 타입이어야합니다.");
    }
    const target = input[i] === 0 ? firstFloor : secondFloor;
    const other = input[i] === 0 ? secondFloor : firstFloor;
    target.push(obj[i] ? " O " : " X ");
    other.push("   ");
  }

  return `[${firstFloor.join("|")}]
[${secondFloor.join("|")}]`;
};

exports.validationMakeMapObjProps = validationMakeMapObjProps;
exports.makeMapObj = makeMapObj;
exports.makeMap = makeMap;
