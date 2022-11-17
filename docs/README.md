# 미션 - 다리 건너기

## 기능 목록

- [ ] [출력] 게임 시작 문구를 출력한다.| OutputView#printStartMessage()
- [ ] [입력] 자동으로 생성할 다리 길이를 입력 받는다.| InputView#readBridgeSize()
  - [ ] [예외처리] 입력받은 값이 3 이상 20 이하 숫자가 아니면 예외 처리한다.| InputValidator#validateBridgeSize(size)
- [ ] 다리를 생성한다.| BridgeMaker#makeBridge(size, generate)
  - [ ] 다리를 생성할 때 위 칸과 아래 칸 중 건널 수 있는 칸은 0과 1 중 무작위 값을 이용해서 정한다.| BridgeRandomNumberGenerator#generate()
    - [ ] [예외처리] 무작위 값이 0 또는 1이 아닌 경우 예외 처리한다.
- [ ] [입력] 플레이어가 이동할 칸을 선택한다.| InputView#readMoving()
  - [ ] [예외처리] 입력받은 값이 U 또는 D가 아닌 경우 예외 처리한다.| InputValidator#validateMoving()
- [ ] 플레이어가 칸을 이동한다.| BridgeGame#move()
- [ ] [출력] 다리 건너기 결과를 출력한다.| OutputView#printMap()
- 다리를 끝까지 건너면 게임이 종료된다.
  - [ ] [출력] 게임 종료 문구를 출력한다.| OutputView#printResult()
- [ ] [입력] 다리를 건너다 실패하면 게임 재시작/종료 여부를 입력 받는다.| InputView#readGameCommand()
  - [ ] [예외처리] 입력받은 값이 R 또는 Q가 아닌 경우 예외 처리한다.| InputValidator#validateGameCommand()
- [ ] 입력 받은 값이 R인 경우 게임을 재시작한다.| BridgeGame#retry()
- [ ] 입력 받은 값이 Q인 경우 게임을 종료한다.
  - [ ] [출력] 게임 종료 문구를 출력한다.| OutputView#printResult()

## 추가적으로 신경 쓸 사항

기능 요구 사항

- 재시작해도 처음에 만든 다리로 재사용한다.
- 게임 결과의 총 시도한 횟수는 첫 시도를 포함해 게임을 종료할 때까지 시도한 횟수를 나타낸다.
- 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

프로그래밍 요구 사항

- JavaScript 코드 컨벤션을 지키면서 프로그래밍 한다.
- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
- Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
- else를 지양한다.
  - 힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
  - 때로는 if/else, switch문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
- 도메인 로직에 단위 테스트를 구현해야 한다. 단, UI(Console.readLine, Console.print) 로직에 대한 단위 테스트는 제외한다.
  - 핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분한다.

## 도메인 로직

BridgeGame // 사용자가 칸을 이동할 때 사용하는 메서드

- move() // 사용자가 칸을 이동할 때 사용하는 메서드
- retry() // 사용자가 게임을 다시 시도할 때 사용하는 메서드

BridgeMaker // 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.

- makeBridge()

BridgeRandomNumberGenerator

- generate()

+InputValidator

- +validateBridgeSize()
- +validateMoving()
- +validateGameCommand()

## UI 로직

InputView // 사용자로부터 입력을 받는 역할을 한다.

- readBridgeSize() // 다리의 길이를 입력받는다.
- readMoving() // 사용자가 이동할 칸을 입력받는다.
- readGameCommand() // 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.

OutputView // 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.

- +printStartMessage() // 게임 시작 문구를 출력한다. MESSAGE.START
- printMap() // 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
- printResult() // 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.

## 상수

const WORDS = {
START_SIZE: 3,
END_SIZE: 20,
UP: "U",
DOWN: "D",
RETRY: "R",
QUIT: "Q",
UP_NUMBER: "1",
DOWN_NUMBER: "0",
SUCCESS = "성공"
FAILURE = "실패"
};

const MESSAGE = {
ERROR: {
BRIDGE_SIZE: `[ERROR] 다리 길이는 ${WORDS.START_SIZE}부터 ${WORDS.END_SIZE} 사이의 숫자여야 합니다.`,
MOVING: `[ERROR] ${WORDS.UP} 또는 ${WORDS.DOWN}여야 합니다.`,
GAME_COMMAND: `[ERROR] ${WORDS.RETRY} 또는 ${WORDS.QUIT}여야 합니다.`,
},
INPUT: {
BRIDGE_LENGTH: "다리의 길이를 입력해주세요.",
MOVING: `이동할 칸을 선택해주세요. (위: ${WORDS.UP}, 아래: ${WORDS.DOWN})`,
RESTART: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${WORDS.RETRY}, 종료: ${WORDS.QUIT})`,
},
OUTPUT: {
START: "다리 건너기 게임을 시작합니다.",
RESULT: "최종 게임 결과",
SUCCESS_OR_FAILURE: "게임 성공 여부",
NUMBER_OF_ATTEMPTS: "총 시도한 횟수",
},
};
