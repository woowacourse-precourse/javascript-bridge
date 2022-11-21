const Validation = {
  checkBridgeLength(bridgeSize) {
    if (!(bridgeSize >= 3 && bridgeSize <= 20))
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  },
  checkMoveInput(moveAnswer) {
    if (!(moveAnswer === 'U' || moveAnswer === 'D')) 
      throw new Error("[ERROR] U와 D중 하나의 문자를 입력해주세요.");  
  },
  checkRestartInput(retryAnswer) {
    if (!(retryAnswer === 'R' || retryAnswer === 'Q')) 
      throw new Error("[ERROR] R과 Q중 하나의 문자를 입력해주세요.");
  },
}

module.exports = Validation;