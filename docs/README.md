# 디렉토리 구조

```
├── __test__
│    ├── Validation
│    │  ├─── BridgeTest.js
│    │  ├─── ControlTest.js
│    │  └─── MoveTest.js
│    ├── ApplicationTest.js
│    ├── BridgeGameTest.js
│    └── ResultMakerTest.js
├── docs
│    └── README.md
└── src
     ├── Constant
     │   └── constant.js
     ├── Validation
     │   ├─── BridgeValidation.js
     │   ├─── ControlValidation.js
     │   ├─── CustomError.js
     │   └─── MoveValidation.js
     ├── View
     │   ├─── InputView.js
     │   └─── OutputView.js
     ├── App.js
     ├── Bridge.js
     ├── BridgeGame.js
     ├── BridgeMaker.js
     ├── BridgeRandomNumberGenerator.js
     └── ResultMaker.js
```

# UML 클래스 다이어그램 및 설계

<img src="./uml.png">

App을 컨트롤러로 사용하여 BridgeGame과 Bridge의 Model을 View와 연결시켜주었습니다. BridgeGame에서 실행되는 각 함수마다 Validation 함수를 통해 Custom Error를 throw하고 App에서 catch하여 처리해주었습니다.

# 기능명세

1. [x] 다리 길이를 입력 받는 기능
2. [x] 다리를 생성하는 기능
3. [x] 이동할 칸을 입력받는 기능
4. [x] 플레이어를 이동시키는 기능
5. [x] 이동 후 출력하는 기능
6. [x] 게임이 끝난 경우, 재시작, 끝내는 입력받는 기능
7. [x] 게임의 최종 결과를 출력하는 기능
8. [x] 게임을 재시작, 종료를 관리하는 기능

# 예외처리

1. [x] 예외를 받아서 출력하고, 해당 input을 재실행하는 기능
2. [x] 다리길이가 3이상 20이하가 아닌 경우
3. [x] 다리 길이가 숫자가 아닌경우
4. [x] 이동할 칸이 U 또는 D가 아닌 경우
5. [x] 게임 재시작/종료 여부에서 R 또는 Q가 아닌 경우
