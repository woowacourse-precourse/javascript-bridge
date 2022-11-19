const InputValidate =  {
  validateBridgeLength(bridgeLengthInput) {
    if(!bridgeLengthInput.match(/^[0-9]+$/g)) throw new Error("[ERROR] 다리 길이는 숫자(정수)를 입력해야 합니다.");
    else if(parseInt(bridgeLengthInput)>20 || parseInt(bridgeLengthInput)<3) throw new Error("[ERROR] 다리 길이는 3이상 20이하의 수를 입력해야 합니다.");
  },

  validateDirection(directionInput) {
    if (!['U','D'].includes(directionInput)) throw new Error("[ERROR] U 혹은 D를 입력해야 합니다.");
  },


}

module.exports = InputValidate;