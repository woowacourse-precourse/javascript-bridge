const MissionUtils = require('@woowacourse/mission-utils')
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    return new Promise((resolve)=>{
      MissionUtils.Console.readLine('다리의 길이를 입력해주세요.',(input)=>{
        this.bridgeSizeInputCheck(input)

        const parsedInput = parseInt(input, 10)

        resolve(parsedInput)
      })
    })
  },
  bridgeSizeInputCheck(input){
    try{
      const parsedInput = parseInt(input, 10)
            
      if(isNaN(parsedInput))throw new Error('[ERROR]: 숫자를 입력해주세요')
      if(parsedInput < 3 || 20 < parsedInput)throw new Error('[ERROR]: 3 이상 20 이하여야합니다')
    } catch (error) {
      MissionUtils.Console.print(error)
    }
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    return new Promise((resolve)=>{
      MissionUtils.Console.readLine('이동할 칸을 선택해주세요.',(input)=>{
        this.movingInputCheck(input)

        resolve(input)
      })
    })
  },
  movingInputCheck(input){
    try{
      if(!(input === 'U' || input === 'D'))throw new Error('[ERROR]: U 또는 D로 방향을 입력해주세요')
    }catch(error){
      MissionUtils.Console.print(error)
    }
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    return new Promise((resolve)=>{
      MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',(input)=>{
        this.gameCommandInputCheck(input)

        resolve(input)
      })
    })
  },
  gameCommandInputCheck(input){
    try{
      if(!(input === 'R' || input === 'Q'))throw new Error('[ERROR]: R(재시작) 또는 Q(끝내기)를 입력해주세요')
    }catch(error){
      MissionUtils.Console.print(error)
    }
  }
};

module.exports = InputView;
