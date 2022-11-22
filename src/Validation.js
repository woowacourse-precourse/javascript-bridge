const checkBridgeSize = (size) => {
  if(isNaN(size)) throw new Error("[ERROR] 숫자를 입력해주세요.");
  if(size < 3 || size > 20) throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
};

const checkSideInput = (side) => {
  if(side !== "U"  || side !== "D") throw new Error("[ERROR] U 또는 D를 입력해주세요.");
};

const checkRetryKey = (key) => {
  if(key !== "R"  || key !== "Q") throw new Error("[ERROR] R 또는 Q를 입력해주세요.");
}

module.exports = {checkBridgeSize, checkSideInput};
