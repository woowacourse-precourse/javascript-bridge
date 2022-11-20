![banner_4week](https://user-images.githubusercontent.com/87642422/202839220-1728a81b-d10f-4e48-98e7-05676585d329.png)

# Week 4: 브릿지

## 파일 구조

![week_4_file](https://user-images.githubusercontent.com/87642422/202858404-86dd64a4-853a-4ae1-8c06-a58f93802f10.PNG)

```
📦src
 ┣ 📂constant
 ┃ ┗ 📜Constant.js
 ┣ 📂domain
 ┃ ┣ 📜BridgeDrawer.js
 ┃ ┣ 📜BridgeGame.js
 ┃ ┗ 📜ResultJudger.js
 ┣ 📂view
 ┃ ┣ 📜InputView.js
 ┃ ┗ 📜OutputView.js
 ┣ 📜App.js
 ┣ 📜BridgeMaker.js
 ┣ 📜BridgeRandomNumberGenerator.js
 ┣ 📜Trimmer.js
 ┗ 📜Validator.js

```

### Model

- `BridgeGame.js`: 게임 모델입니다. 사용자의 입력에 따라 다리를 건너거나 재시작할 수 있으며, 게임 진행 상황을 얻을 수 있습니다.
- `BridgeMaker.js`: 처음 게임을 시작할 때 다리에서 건너갈 수 있는 길을 랜덤으로 추첨하여 반환하는 역할을 수행합니다.
- `ResultJudger.js`: 라운드의 결과를 판단하고, 결과를 반환하는 역할을 수행합니다.
- `BridgeDrawer.js`: 라운드의 결과가 주어지면, 다리를 그린 후 반환하는 역할을 수행합니다.

### View

- `InputView.js`: 사용자에게 질문을 던지고, 입력값을 사용자로부터 받아오는 역할을 수행합니다.
- `OutputView.js`: 게임 진행 상황과 결과를 출력하는 역할을 수행합니다.

### Controller

- `App.js`: 테스트 진행 시 실행해야 하는 파일입니다. 전반적인 **게임을 진행**하는 역할을 수행합니다.

### Library

- `BridgeRandomNumberGenerator`: 다리 생성에 필요한 랜덤 값을 얻을 수 있습니다. 이 라이브러리는 처음부터 구현되어 있습니다.
- `Trimmer`: 탬플릿 형태의 문자열에서 생길 수 있는 whitespace를 제거해 줍니다.
- `Validator.js`: 데이터 검증 라이브러리입니다. 요청이 있을 경우 사용자의 입력값을 검증하고, 올바르지 않은 입력일 경우 에러를 발생시킵니다.

## 기능 목록

### Model

#### BridgeGame.js

- [ ] 다리 이동 기능 구현하기
- [ ] 게임 재시작 기능 구현하기
- [ ] 라운드 결과를 받아오는 기능 구현하기

#### BridgeMaker.js

- [x] 다리를 랜덤으로 생성하여 반환하는 기능 구현하기

#### ResultJudger.js

- [ ] 라운드의 결과를 판별하여 반환하는 기능 구현하기
  - [x] 플레이어가 게임에서 패배했는지 판별하는 기능 구현하기
  - [x] 마지막 라운드인지 판별하는 기능 구현하기

#### BridgeDrawer.js

- [x] 다리 그림을 반환하는 기능 구현하기
  - [x] 다리를 상단, 하단으로 나누어 격자로 변환하는 기능 구현하기
  - [x] 실패한 경우 실패 표식을 추가하는 기능 구현하기
  - [x] 격자를 그림 형태로 변환하는 기능 구현하기

### View

#### InputView.js

- [x] 다리의 크기를 입력받는 기능 구현하기
- [x] 이동 방향 입력받는 기능 구현하기
- [x] 실패 시 게임 재시작 여부 입력받는 기능 구현하기

#### OutputView.js

- [ ] 게임 시작 메시지 출력하는 기능 구현하기
- [ ] 라운드 결과 출력하는 기능 구현하기
- [ ] 최종 게임 결과 출력하는 기능 구현하기

### Controller

#### App.js

- [ ] `play` : 게임 시작 기능 구현하기
- [ ] `bridgeSizeInputPhase` : 다리의 길이를 묻는 단계 구현하기
- [ ] `movingInputPhase` : 이동 방향을 묻는 단계 구현하기
- [ ] `showBridgePhase` : 해당 라운드에 대해 다리의 결과를 보여주는 단계 구현하기
- [ ] `chooseResultPhase` : 실패 시 재시작 여부를 묻는 단계 구현하기
- [ ] `clearPhase` : 성공 시 최종 결과를 보여주는 단계 구현하기

### Library

#### Trimmer.js

- [x] 탬플릿 형태의 문자열의 불필요한 whitespace 제거하는 기능 구현하기

#### Validator.js

- [x] 다리의 길이가 유효하지 않을 경우 에러를 발생시키는 기능 구현하기
- [x] 이동 방향이 유효하지 않을 경우 에러를 발생시키는 기능 구현하기
- [x] 재시작 커맨드가 유효하지 않을 경우 에러를 발생시키는 구현하기
