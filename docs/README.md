# 우아한프리코스 4주차 미션

## 미션 - 다리 건너기

랜덤하게 구성된 다리를 생성한다. 사용자는 위로 갈지 아래로 갈지 선택하여 다리를 건넌다.  
건널 수 있는 다리를 선택하여 완주하는 것이 목표.

[깃허브 저장소](https://github.com/dragonfruitlemonade/javascript-bridge)

## 기능 목록

* [ ] InputView 사용자로부터 입력을 받는 역할
    * [ ] 다리의 길이를 입력받기 readBridgeSize()
    * [ ] 사용자가 이동할 칸을 입력받기 readMoving()
    * [ ] 다리의 길이를 입력받기 readMoving()
---
* [ ] OutputView 사용자에게 게임 진행 상황과 결과를 출력하는 역할
    * [ ] 현재까지 이동한 다리의 상태를 출력 printMap()
    * [ ] 게임의 최종 결과를 출력 printResult()
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

## 기능 테스트 목록

## 마무리

## 참고사항
[JavaScript 코드 컨벤션](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)  
[커밋 메시지 컨벤션](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)  
[MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)  
[Airbnb 자바스크립트 스타일 가이드](https://github.com/airbnb/javascript)
