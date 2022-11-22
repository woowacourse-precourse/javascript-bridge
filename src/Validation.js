const checkBridgeSize = (size) => {
  const isNumber = !isNaN(size);
  const isValidRange = size >= 3 && size <= 20;

  if(isNumber === false) throw new Error("[ERROR] 숫자를 입력해주세요.");
  if(isValidRange === false) throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
};

const checkSideInput = (side) => {
  const isMove = side === 'U' || side === 'D';

  if(isMove === false) throw new Error("[ERROR] U 또는 D를 입력해주세요.");
};

const checkRetryKey = (key) => {
  const toRetry = key === 'R' || key === 'Q';
  
  if(toRetry === false) throw new Error("[ERROR] R 또는 Q를 입력해주세요.");
}

module.exports = {checkBridgeSize, checkSideInput, checkRetryKey};
