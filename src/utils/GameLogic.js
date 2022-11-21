const InputView = require("../InputView");
const OutputView = require("../OutputView");
const BridgeMaker = require("../BridgeMaker");
const RandomGenerator = require("../BridgeRandomNumberGenerator");

/**
 * 객체
 * 게임 핵심 로직
 */

const GameLogic = {
  // getBridge(resolved, values, result){
  //   const bridge = BridgeMaker.makeBridge(resolved, RandomGenerator);
  //   InputView.readMoving(bridge, values, result)
  // }




  // step() {
  //   //InputView 실행 결과 (U,.. D,.. ) return
  // },

  // compare(bridge, stepArray, index) {
  //   console.log(bridge, stepArray, index);
  //   // BridgeMaker에서 가져오기: bridgeArray // 0100010
  //   // step() 과 비교
  // },

  // readBridge(resolved, values, result) {
  //   const bridge = BridgeMaker.makeBridge(resolved, RandomGenerator);
  //   InputView.readMoving(bridge, values, result);
  // },

  returnHistory() {
    //없어질 것 같음
    //history 인자 받아서
    //위 compare() 같아서 O 나오면 upper나 lower에 추가 후, count ++
    //history return
    // X 나오면 RQ선택지 로직 부름 <-select(){}
  },

  select() {
    //만약 compare 최종 결과가 X면
    //InputView 띄우기: RQ 선택지
  },

  integrateResult() {
    //종료 결과 종합하기
    //이기든 지든
    //최종 게임결과 : output의 printMap 띄우고, 메시지, 카운트 data return
  },

  terminate() {
    //게임종료 라이브러리
  },
};

module.exports = GameLogic;
