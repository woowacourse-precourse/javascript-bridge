class App {
  play() {
    //순차적으로 진행
    //BridgeGame에서 만든 [history]를 return : move()
    //그 history를 출력 : OutputView- printMap만
    //retry: 위의 다리정보 재활용
    //시도횟수 리셋
    //move부터 다시시작.
    console.log("start");
  }
}

module.exports = App;

//구현 완료 후 지우기
const app = new App();
app.play();
