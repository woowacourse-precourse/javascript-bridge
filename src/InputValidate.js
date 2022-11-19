const InputValidate =  {
  validateBridgeLength(input) {
    if(!input.match(/^[0-9]+$/g)) throw new Error("[ERROR] 다리 길이는 숫자(정수)를 입력해야 합니다.");
    else if(parseInt(input)>20 || parseInt(input)<3) throw new Error("[ERROR] 다리 길이는 3이상 20이하의 수를 입력해야 합니다.");
  }
}

module.exports = InputValidate;