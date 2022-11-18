function checkBridgeSize(size){
  if(isNaN(size)) throw new Error("[ERROR] 숫자를 입력해주세요.");
  if(size < 3 || size > 20) throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
}

module.exports = {checkBridgeSize};
