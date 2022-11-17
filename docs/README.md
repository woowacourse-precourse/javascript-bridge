# 우아한프리코스 4주차 미션

## 미션 - 다리 건너기

랜덤하게 구성된 다리를 생성한다. 사용자는 위로 갈지 아래로 갈지 선택하여 다리를 건넌다.  
건널 수 있는 다리를 선택하여 완주하는 것이 목표.

[깃허브 저장소](https://github.com/dragonfruitlemonade/javascript-bridge)  

## 게임 진행 과정

* (출력) 다리 건너기 게임을 시작합니다.
* (출력) 다리의 길이를 입력해주세요.
* (입력) 3이상 20이하의 숫자
* (출력) 이동할 칸을 선택해주세요. (위: U, 아래: D)
    * (입력) U 또는 D
    * (출력) 건넌 다리의 상태(성공했을경우 O, 실패했을경우 X)
* (O 성공했을 경우) 
    * (다리를 다 건넜을 경우)
        * (출력) 최종 게임 결과
        * (출력) 결과 맵
        * (출력) 게임성공 여부: 성공
        * (출력) 총 시도한 횟수: {count of attempts}
        * (게임종료)
    * (이동) 입력된 다리의 숫자 만큼 '이동할 칸을 선택해주세요.' 로 이동
* (X 실패했을 경우)
    * (출력) 게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)
    * (입력) R 또는 Q
* (R을 입력했을 경우)
    * (이동) '이동할 칸을 선택해주세요.' 로 이동 단, 처음 만든 다리로 재사용.
* (D을 입력했을 경우)
    * (출력) 최종 게임 결과
    * (출력) 결과 맵
    * (출력) 게임성공 여부: 실패
    * (출력) 총 시도한 횟수: {count of attempts}
    * (게임종료)

## 기능 목록

* [x] InputView 사용자로부터 입력을 받는 역할
    * [x] 다리의 길이를 입력받기 readBridgeSize()
    * [x] 사용자가 이동할 칸을 입력받기 readMoving()
    * [x] 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다. readMoving()
---
* [ ] OutputView 사용자에게 게임 진행 상황과 결과를 출력하는 역할
    * [ ] 현재까지 이동한 다리의 상태를 출력 printMap()
    * [x] 게임의 최종 결과를 출력 printResult()
    * [x] 게임 성공 여부 출력 printWin()
    * [x] 게임 실패 여부 출력 printFail()
    * [x] 총 시도한 횟수 출력 printAttemptCount()
    * [x] 게임 시작 메세지 출력 printStart()
---
* [ ] BridgeRandomNumberGenerator
    * [ ] 변경불가
---
* [ ] BridgeMaker 다리의 길이를 입력 받아서 다리를 생성해주는 역할
    * [ ] 다리의 길이를 입력받아서 다리를 생성 makeBridge()
---
* [ ] BridgeGame 다리 건너기 게임을 관리하는 클래스
    * [ ] 다리 이동시키기 move
    * [ ] 게임 다시 시도 retry
---
* [ ] App
---
* [x] Message
    * [x] 다리 건너기 게임을 시작합니다.
    * [x] 다리의 길이를 입력해주세요.
    * [x] 이동할 칸을 선택해주세요. (위: U, 아래: D)
    * [x] 게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)
    * [x] 최종 게임 결과
    * [x] 게임 성공 여부: 성공
    * [x] 게임 성공 여부: 실패
    * [x] 총 시도한 횟수: {Number of attempts}

  
## 예외사항

* [ ] (예외사항) 다리 건너기 게임을 시작합니다.
    * [ ] 빈값일 경우
    * [ ] 숫자가 아닐 경우
    * [ ] 3~20 사이의 숫자가 아닐 경우
    * [ ] 형식이 이상할 경우
* [ ] (예외사항) 이동할 칸을 선택해주세요.
    * [ ] 빈값일 경우
    * [ ] 한가지 값이 아닐 경우
    * [ ] 입력값이 U 또는 D 가 아닐 경우
* [ ] (예외사항) 게임을 다시 시도할지 여부를 입력해주세요.
    * [ ] 빈값일 경우
    * [ ] 한가지 값이 아닐 경우
    * [ ] 입력값이 R 또는 Q 가 아닐 경우

## 신경써야 할점  

* [ ] InputView
    * 제공된 InputView 객체를 활용해 구현해야 한다.
    * InputView의 파일 경로는 변경할 수 있다.
    * InputView의 메서드의 인자는 변경할 수 있다.
    * 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
* [ ] OutputView
    * 제공된 OutputView 객체를 활용해 구현해야 한다.
    * OutputView의 파일 경로는 변경할 수 있다.
    * OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
    * 값 출력을 위해 필요한 메서드를 추가할 수 있다.
* [ ] BridgeRandomNumberGenerator
    * Random 값 추출은 제공된 BridgeRandomNumberGenerator의 generate()를 활용한다.
    * BridgeRandomNumberGenerator의 코드는 변경할 수 없다.
    * 사용 예시
    * 다리 칸을 생성하기 위한 Random 값은 아래와 같이 추출한다.
    * const number = generateRandomNumber();
* [ ] BridgeMaker
    * 제공된 BridgeMaker 객체를 활용해 구현해야 한다.
    * BridgeMaker에 프로퍼티를 추가할 수 없다.
    * BridgeMaker의 파일 경로는 변경할 수 없다.
    * BridgeMaker의 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.
* [ ] BridgeGame
    * 제공된 BridgeGame 클래스를 활용해 구현해야 한다.
    * BridgeGame에 필드(인스턴스 변수)를 추가할 수 있다.
    * BridgeGame의 파일 경로는 변경할 수 있다.
    * BridgeGame의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
    * 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.  

## 기능 테스트 목록

## 마무리

## 참고사항
[JavaScript 코드 컨벤션](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)  
[커밋 메시지 컨벤션](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)  
[MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)  
[Airbnb 자바스크립트 스타일 가이드](https://github.com/airbnb/javascript)
