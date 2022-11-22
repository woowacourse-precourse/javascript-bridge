<h1 align="middle">다리 건너기 게임</h1>

## 📋 INTRODUCE

우아한 테크코스 4주차 미션인 **다리 건너기 게임**입니다.
이 게임은 영화 '오징어게임'에 나온 '징검다리 건너기' 게임과 유사합니다.

## ✅ DOWNLOAD

> 레포지토리의 해당 브랜치를 local에 클론을 합니다.

```bash
git clone https://github.com/kangju2000/javascript-lotto/tree/kangju2000
```

> 게임에 필요한 패키지를 설치합니다.

```bash
npm install
```

> 다음 명령어를 입력해 게임을 실행합니다. (Node.js 14 이상)

```bash
node src/app.js
```

## ❓ HOW TO PLAY

1. 다리를 생성하기 위해 다리의 길이를 입력합니다.

```javaScript
  다리 건너기 게임을 시작합니다.

  다리의 길이를 입력해주세요.
  3
```

2. 이동할 칸을 입력합니다.(위: U, 아래: D)

```javaScript
  이동할 칸을 선택해주세요. (위: U, 아래: D)
  U
  [ O ]
  [   ]

  이동할 칸을 선택해주세요. (위: U, 아래: D)
  U
  [ O | X ]
  [   |   ]

```

3. 끝까지 건너기에 실패했다면 재시도 또는 종료할 수 있습니다.(재시도: R, 종료: Q)

```javaScript
  게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)
  Q
```

4. 게임을 종료했거나 게임에 성공했다면 결과를 확인할 수 있습니다.

```javaScript
최종 게임 결과
[ O | X ]
[   |   ]

게임 성공 여부: 실패
총 시도한 횟수: 1
```

## ❗ CAUTION

- 다리 길이 입력 시 3~20의 숫자를 입력해야 합니다.
- 이동할 칸 입력 시 'U' 또는 'D' 중 하나를 입력해야 합니다.
- 게임 재시작/종료 여부 입력 시 'R' 또는 'Q' 중 하나를 입력해야 합니다.

## STRUCTURE

```bash
📦javascript-bridge
 ┣ 📂docs
 ┃ ┗ 📜README.md
 ┣ 📂src
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜error.js
 ┃ ┃ ┣ 📜gameSetting.js
 ┃ ┃ ┗ 📜message.js
 ┃ ┣ 📂Controller
 ┃ ┃ ┗ 📜BridgeGameController.js
 ┃ ┣ 📂Domain
 ┃ ┃ ┣ 📜Bridge.js
 ┃ ┃ ┣ 📜BridgeGame.js
 ┃ ┃ ┗ 📜BridgeMap.js
 ┃ ┣ 📂validator
 ┃ ┃ ┣ 📜DomainValidator.js
 ┃ ┃ ┣ 📜InputValidator.js
 ┃ ┃ ┗ 📜Validator.js
 ┃ ┣ 📂View
 ┃ ┃ ┣ 📜InputView.js
 ┃ ┃ ┗ 📜OutputView.js
 ┃ ┣ 📜App.js
 ┃ ┣ 📜BridgeMaker.js
 ┃ ┗ 📜BridgeRandomNumberGenerator.js
 ┣ 📂__tests__
 ┃ ┣ 📜ApplicationTest.js
 ┃ ┣ 📜BridgeGameTest.js
 ┃ ┣ 📜BridgeMapTest.js
 ┃ ┣ 📜BridgeTest.js
 ┃ ┗ 📜ValidatorTest.js
```

UI 로직과 도메인 로직을 분리하고, 컨트롤러로 게임을 동작시킵니다.

# src/

## constants/

상수를 관리하는 폴더입니다.

- `error.js` : 에러 메시지
- `gameSetting.js` : 게임 관련 설정
- `message.js` : 입출력 메시지

## Controller/

게임을 컨트롤합니다. View와 Domain을 연결시켜주는 역할을 합니다.

- `BridgeGameController.js`
  - 게임 시작

## Domain/

도메인 로직이 담긴 폴더입니다.

- `Bridge.js` : 다리
  - 건널 수 있는지 확인 기능
  - 다리의 크기를 반환 기능
- `BridgeGame.js` : 다리 게임
  - 게임 시도 기능
  - 이동 기능
  - 다시 시도 기능
  - 시도 횟수 반환 기능
  - 이동 횟수 반환 기능
  - 게임 성공 확인 기능
- `BridgeMap.js` : 다리 맵
  - 이동 마크 추가 기능
  - 다리 맵 반환 기능
  - 다리 맵 초기화 기능

## View/

UI 로직이 담긴 폴더입니다.

- `InputView.js` : 입력 UI
  - 다리 크기 입력 기능
  - 이동할 칸 입력 기능
  - 다시 시도 여부 입력 기능
- `OutputView.js` : 출력 UI
  - 맵 출력 기능
  - 결과 출력 기능
  - 게임 시작 문구 출력 기능
  - 에러 출력 기능

## validator/

유효성 검사하는 로직이 담긴 폴더입니다.

- `Validator.js` : 기본 유효성 검사
- `DomainValidator.js` : 도메인 로직 유효성 검사
  - 유효한 다리 크기인지 확인
  - 형식에 맞는 다리인지 확인
  - 유효한 이동인지 확인
  - 이동 횟수가 숫자인지 확인
  - 이동 횟수가 다리 크기보다 큰지 확인
- `InputValidator.js` : 입력 유효성 검사
  - 유효한 다리 크기를 입력했는지 확인
  - 유효한 이동을 입력했는지 확인
  - 유효한 재시도 여부를 입력했는지 확인

## `BridgeMaker.js`

다리를 생성합니다.

## `BridgeRandomNumberGenerator.js`

다리의 위치를 랜덤으로 생성해줍니다.

## `App.js`

다리 게임 컨트롤러를 실행합니다.
