const Validation = {
  checkBridgeSize(sizeInput){
    let check = /^[0-9]+$/; 
    if (!check.test(sizeInput)) {
      throw new Error("[ERROR] 다리 길이는 숫자로 입력해야 합니다.");
    }
    if(sizeInput<3 || sizeInput>20){
      throw new Error("[ERROR] 다리 길이는 3이상 20이하여야 합니다.");
    }
  },
  checkMoving(movingInput){
    if (!(movingInput==='U' || movingInput==='D')){
      throw new Error("[ERROR] 이동할 칸은 U 또는 D 로 입력해야 합니다.");
    }
  },
  checkOption(optionInput){
    if (!(optionInput==='Q' || optionInput==='R')){
      throw new Error("[ERROR] 종료 옵션은 R 또는 Q 로 입력해야 합니다.");
    }
  }
}

module.exports = Validation;