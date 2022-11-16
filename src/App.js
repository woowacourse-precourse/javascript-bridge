// package.json을 변경할 수 없고 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다. 순수 Vanilla JS로만 구현한다.
// JavaScript 코드 컨벤션을 지키면서 프로그래밍 한다
// 프로그램 종료 시 process.exit()를 호출하지 않는다.
// 프로그램 구현이 완료되면 ApplicationTest의 모든 테스트가 성공해야 한다. 테스트가 실패할 경우 0점 처리한다.
// 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.
// indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
// 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
// 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
// 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
// Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
// else를 지양한다.
// 힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
// 때로는 if/else, switch문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
// 도메인 로직에 단위 테스트를 구현해야 한다. 단, UI(Console.readLine, Console.print) 로직에 대한 단위 테스트는 제외한다.
// 핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분한다.


// 추가된 요구 사항
// 함수(또는 메서드)의 길이가 10라인을 넘어가지 않도록 구현한다.
// 함수(또는 메서드)가 한 가지 일만 잘하도록 구현한다.
// 메서드의 파라미터 개수는 최대 3개까지만 허용한다.
// 아래 있는 InputView, OutputView, BridgeGame, BridgeMaker 클래스(또는 객체)의 요구사항을 참고하여 구현한다.
// 각 클래스(또는 객체)의 제약 사항은 아래 클래스별 세부 설명을 참고한다.
// 이외 필요한 클래스(또는 객체)와 메서드는 자유롭게 구현할 수 있다.
// InputView 에서만 MissionUtils의 Console.readLine() 을 이용해 사용자의 입력을 받을 수 있다.
// BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.

const OutputView = require('./OutputView')
const InputView = require('./InputView')

class App {
  play() {
    OutputView.printStart()
    InputView.readBridgeSize()
  }
}

module.exports = App;
