// utils 말고 validation이라던지 파일명을 변경해야할듯..?
// constraints(제한 사항)를 가져와서 "판별, 판단"하는거니까
// 클래스명도 validation 관련해서 단어를 넣어야할 것 같음
const {
  SizeConstraints,
  MoveConstraints,
  CommandConstraints,
} = require("./Constraints");

class BridgeSizeValidation {
  #size;

  constructor(size) {
    this.checkBridgesizeConstraints(size);
    this.#size = size;
  }

  checkBridgesizeConstraints(size) {
    const sizeConstraints = new SizeConstraints(size);
    sizeConstraints.checkOnlyNumber();
    sizeConstraints.checkNumberRange();
    sizeConstraints.checkStartZero();
  }

  makeStringToNumber() {
    return Number(this.#size);
  }
}

class MoveInputValidation {
  constructor(wantGo) {
    this.checkMoveInput(wantGo);
  }

  checkMoveInput(wantGo) {
    const moveConstraints = new MoveConstraints(wantGo);
    moveConstraints.checkInputUorD();
  }
}

class CommandInputValidation {
  constructor(command) {
    this.checkCommandInput(command);
  }

  checkCommandInput(command) {
    const commandConstraints = new CommandConstraints(command);
    commandConstraints.checkInputRorQ();
  }
}

module.exports = {
  BridgeSizeValidation,
  MoveInputValidation,
  CommandInputValidation,
};
