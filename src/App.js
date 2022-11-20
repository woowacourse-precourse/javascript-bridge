const { Console } = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')
const BridgeGame = require('./BridgeGame')
class App {
  bridge = []

  play() {
    Console.print('다리 건너기 게임을 시작합니다.\n')
    Console.readLine('다리의 길이를 입력해주세요.\n', (answer) => {
    // 랜덤 다리 생성하기 (게임 종료 전까지 변경되지 않아야 한다)
    // BridgeRandomNumberGenerator.generate()
      for (let i = 0; i < answer; i++) {
        (this.bridge).push(BridgeRandomNumberGenerator.generate())
      }
      console.log('bridge', this.bridge)
      this.inputMove(this.bridge)
      // Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (answer) => {
      // // function game controller 건넌 다리에 O, X 남기기
      // // BridgeGame.move()
      // // OutputView.printMap()

      // })  
    });
  }

  inputRetry (bridge) {
    Console.readLine('\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (answer) => {
      if (answer === 'R') {
        this.inputMove(bridge)
      }
  
      if (answer === 'Q') {
        // 게임 결과 print하기
        Console.close()
        console.log('게임실패')
      }
    })
  }
  
  // 0이면 아래, 1이면 위에가 건널 수 있는 칸
  inputMove (bridge) {
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (answer) => {
      const bridgeGame = [...bridge]
      const cell = bridgeGame.shift()
      console.log(this.bridge)
      console.log(bridgeGame,'bridgeGame')
  
      if (bridgeGame.length === 0) {
        // 게임 결과 print하기
        Console.close()
        console.log('game over')
        return
      }
      if (answer === 'U' && cell === 1) {
        this.inputMove(bridgeGame)
      }
      if (answer === 'U' && cell === 0) {
        this.inputRetry(bridge)
      }
      if (answer === 'D' && cell === 0) {
        this.inputMove(bridgeGame)
      }
      if (answer === 'D' && cell === 1) {
        this.inputRetry(bridge)
      }
      // 게임 결과 출력
    })
  }
}


const app = new App
app.play()

module.exports = App;



// Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (answer) => {
//   // 건넌 다리에 O, X 남기기
//   // if (건넌 다리 === 'X')
//   // BridgeGame.move()
//   // OutputView.printMap()
//   // BridgeGame.retry()
//     Console.readLine('\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (answer) => {
//     // if (answer === 'R')
//       Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (answer) => {
//     // if (answer === 'Q')
//     // print(게임 최종 결과, 게임 성공 여부, 총 시도한 횟수)
//     // OutputView.printResult()
//       Console.close()
//       })
//     })
//   })