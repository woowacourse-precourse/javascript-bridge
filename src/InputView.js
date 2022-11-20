const {Console} = require("@woowacourse/mission-utils");
const Validation = require("./Validation");

const InputView = {
  readBridgeSize(app) {
    Console.readLine(`다리의 길이를 입력해주세요.\n`, (size)=>{
      Validation.checkBridgeSize(size);
      app.init(size);
    })
  },

  readMoving(bridgePlay) {
    Console.readLine(`이동할 칸을 선택해주세요. (위: U, 아래: D)\n`, (moving)=>{
      Validation.checkMoving(moving);
      bridgePlay.playRound(moving);
    })
  },

  readGameCommand(bridgePlay) {
    Console.readLine(`게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n`, (option)=>{
      Validation.checkOption(option);
      bridgePlay.quitOrRetry(option);
    })
  },
};

module.exports = InputView;
