const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const { generateRandomNumber } = require("./BridgeMaker");
const BridgeMaker  = require('./BridgeMaker');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const  InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

   async readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요. : ', 
     async input => {
      if (Number.isNaN(input)) {
        throw new Error ("[ERROR] 숫자만 입력해주세요");
      }
  
      if ( input< 1 ||  input >20 ) {
        throw new Error("[ERROR] 한정된 숫자를 넣어주세요");
      }
        
      let BridgeArray = BridgeMaker.makeBridge(input);
      
      for(let i=0; i<BridgeArray.length; i++){
        console.log(BridgeArray[i]);
      }

      console.log(BridgeArray);
      
      return BridgeArray;
      
    })

    


  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(UpOrDown) {
    if(UpOrDown !='U' && UpOrDown !='D'){
      throw new Error ("[ERROR] 정확한 오더를 내려주세요");
    }
    let GameStart = new BridgeGame(UpOrDown);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
