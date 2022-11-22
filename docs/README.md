# 🦑 미션 - 다리 건너기

## 🦴 구조

```sh
├── App.js
├── BridgeGame.js # 다리 건너기 게임을 관리하는 파일
├── BridgeMaker.js # 다리를 만드는 파일
├── BridgeRandomNumberGenerator.js # 랜덤하게 다리 숫자를 만드는 파일
├── Error.js # 에러 발생에 대한 파일
├── InputView.js # 입력값을 받는 파일
├── OutPutView.js # 결과를 도출해내는 파일
│
├── constant
│      └── constant.js # 상수 파일
│
└── validate
       └── validate.js # 유효성 검사 파일
```

## 📌 세부 구현 사항

- [x] indent depth `2`까지 허용
- [x] 함수(또는 메소드)는 한 가지 역할만 수행하도록 설계, `10라인` 이내 구현
- [x] 잘못된 입력 => `throw`를 이용해 처리 후 그 부분부터 다시 입력 받기
- [x] 도메인 로직에 단위 테스트 구현
- [x] else 지양해 구현
- [x] 다리의 길이는 3이상 20이하로 받기
- [x] InputView 에서만 사용자의 입력을 받기
- [x] BridgeGame 에서 InputView, OutputView 사용하지 않기
- [x] 메서드의 파라미터 개수는 최대 3개까지만 사용하기 

```sh

    [ERROR] 숫자를 입력해야 합니다.
    [ERROR] 3에서 20사이의 숫자를 입력해야 합니다.

```
- [x] 이동할 칸을 입력 받기
```sh

    [ERROR] U 또는 D를 입력해야 합니다.


```
- [x] 게임 재시작을 물어보는 입력 받기

```sh

    [ERROR] R또는 Q를 입력해야 합니다.

```

- [x] 사용자가 입력할 때마다 결과를 출력하기
- [x] 다리를 다 건너거나 게임을 종료하면 최종 게임 결과 출력하기

## 🍌 기타

[4주차 미션 정리하기](https://jade-gasoline-2a3.notion.site/e8f4818240ad4c1cb021cea10ef9189f)