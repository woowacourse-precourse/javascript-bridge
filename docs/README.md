# 다리 건너기 게임 도큐먼트 📄

## 기능 목록 📝

1. 게임 시작 문구 출력
2. 다리의 길이를 입력받는다.
   - 3 이상 20 이하의 정수여야 합니다.
3. 랜덤값을 통하여 다리를 생성한다.
4. 이동할 칸을 입력받는다.
   - 'U' 또는 'D'를 입력받는다.
5. 이동할 수 있는 곳이라면 다리가 끝날 때까지 입력받는다.
6. 이동할 수 없는 곳이라면 게임 다시 시도 여부를 입력받는다.
7. 만약 다리가 끝나거나 이동할 수 없는 곳에서 종료를 선택했다면 최종 게임 결과를 출력한다.
8. 재시도를 선택할 경우 다리는 이전 다리와 똑같이 두고 게임을 다시 시작한다.

**예외사항 처리❗️**

- throw를 통하여 예외 반환
- 예외 상황에서는 에러 문구를 출력해야 함
- 에러 문구는 “[ERROR]”로 시작해야 함

## 폴더 구조 🗂

> MVC 패턴을 적극적으로 활용해보았습니다

```
📦 src
 ┣ 📂 Controller
 ┃ ┣ 📜 BridgeGame.js -> 전체적인 게임 프로세스 관리
 ┃ ┣ 📜 BridgeMapFormatter.js -> 다리를 출력 가능한 값으로 format 해주는 역할
 ┃ ┗ 📜 UserInput.js -> 유저의 입력값 프로세스 관리
 ┣ 📂 CustomError
 ┃ ┗ 📜 index.js
 ┣ 📂 Model
 ┃ ┗ 📜 index.js
 ┣ 📂 View
 ┃ ┣ 📜 InputView.js
 ┃ ┣ 📜 OutputView.js
 ┃ ┗ 📜 index.js
 ┣ 📂 utils
 ┃ ┣ 📂 constants
 ┃ ┃ ┣ 📜 ErrorMessage.js
 ┃ ┃ ┗ 📜 GameSystem.js
 ┃ ┗ 📂 services
 ┃ ┃ ┣ 📜 map.js -> 다리에 관련된 서비스 함수 모음
 ┃ ┃ ┣ 📜 system.js
 ┃ ┃ ┗ 📜 validate.js -> 유효성 관련된 서비스 함수 모음
 ┣ 📜 App.js
 ┣ 📜 BridgeMaker.js
 ┗ 📜 BridgeRandomNumberGenerator.js
```

