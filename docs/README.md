# 기능구현 목록

이미 만들어져 있는 BridgeRandomNumberGenerator 를 제외하고

파일 순서대로 , 함수 작성 순서대로 작성하였습니다

- [x] 객체 공통 Object.freeze 로 상태접근 제한

## 상수화

### Constant 객체

- [x] (위: U, 아래: D)

\*\* 그 밖에 나머지 상수는 최대한 해당 객체에서 사용하게끔 분리 적용하였습니다.

## App 클래스

App 총괄기능

status 별 상수

1. 다리만들기 질문
2. 다리 이동 질문
3. 게임 결과 질문

input view 기준으로 기능 구현 작성

- [x] 다리의 길이를 입력하고 다리를 만들기까지 진행기능

- [x] 다리의 움직일 값을 입력 받고 이동하여 지도만들어지기까지 진행기능

- [x] 게임을 다시 할건지 입력 받고 게임을 다시 실행시키는 기능

- [x] 멤버 변수 초기화 기능

- [x] 게임 종료 (앱 종료) 판별 -[x] 질문을 받아 input 검증에서 예외발생시 status 대로 error handle 기능 구현

### Bridge Game.js

### initBridgeLengthStatus

- [x] 해당 인스턴스의 다리길이상태를 초기화 하는 기능

### getBridgeLengthStatus

- [x] 해당 인스턴스의 다리길이 상태를 얻는 기능

### getNumberOfTry

- [x] 해당 인스턴스의 게임을 시도한 횟수를 얻는 기능

### incrementBridgeLengthStatus

- [] 해당 인스턴스의 다리길이 상태의 값을 1 늘리는 기능

### move

- [x] 사용자의 input과 다리를 받아 사용자의 입력에 따른 정답을 t/f로 리턴하는 기능

### retry

- [x] 사용자의 input이 게임옵션과 일치하는지 비교하여 t/f로 처리하는 기능

## Bridge Maker 객체

- [x] 0 일경우 아래(D) 1일 경우 위칸(U) 을 받은 size 만큼 생성하는 기능

## Bridge Map 클래스

다리 건너기 맵을 관리하는 클래스

- [x] 자원들 상수로 구현

### getMap

- [x] 해당 인스턴스의 맵을 리턴하는 기능

### initBridgeMap

- [x] 해당 인스턴스의 맵과 isFirst 멤버변수를 초기화 시키는 기능

### handleMap

- [x] 해당 클래스의 #isFirst 멤버변수가 true 냐 false 냐에 따라 분기를 나눠 add First Map , add map 을 실행시키는 기능

### addMap

- [x] move의 실행 결과 boolean과 input을 받아 처음일 때와 아닐때에 따라서 맞혔을때와 못맞혔을때의 분기를 나눠 correct 와 Incorrect를 실행시키는 기능

### addCorrect

- [x] input과 map소스를 받아 이용자가 맞췄을때 해당 자원을 맵에 추가하는 기능

### addIncorrect

- [x] move의 input과 이전의 map 을 받아 이용자가 틀렸을때 해당 자원을 추가하는 기능

## input view 객체

### readBridgeSize

- [x] 사용자가 이동할 칸을 입력받는 기능

### readMoving

- [x] 다시 시도할지 종료할지 여부를 입력받는 기능

### readGameCommand

- [x] 다리의 길이를 입력 받는 기능

## Map Maker 객체

기본 맵을 생성하는 객체

- [x] init Map 기본 맵을 생성한다. [[],[]]

## output view 객체

### printStart

- [x] 게임 시작 메세지 출력

### printMap

- [x] 인자로 BridgeMap 에서 생성된 맵을 받아 개행처리하여 위 아래를 나눠 프린트하는 기능

### printResult

- [x] 게임성공여부 , 시도한 횟수 , map 을 인자로 받아 게임의 최종 결과물을 출력하는 기능

## utils 객체

- [x] Console.readLine Utils로 분리
- [x] Console.pirnt Utils로 분리
- [x] Console.close Utils로 분리

## Validator 객체

- [x] trim 처리를 통해 양옆 공백 제거 ,
- [x] throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지 출력후 종료가 아니라 거기서 부터 다시 시작해야됨

### checkSpace

- [x] input을 받아 해당 input의 사이에 공백이 있는지 검증 하는 기능

### checkNan

- [x] input을 받아 해당 input을 number로 형변환했을때 isNaN 함수에 의해 NaN 검증을 하는 기능

### confirmOfCondition

- [x] input과 조건을 인자로 받아 해당하는 condition의 checkCondition함수 실행하는 기능

### checkConition

- [x] input 과 error 메세지를 인자 로 받아 해당하는 2개의 문자열에 대한 검증을 하는 기능

### checkRange

- [x] input 을 받아 해당 input이 3 이상 20 이하 내의 숫자인지 판별하는 기능

### checkBridgeInput

다리를 생성할때 필요한 검증들을 실행하는 기능

- [x] 생성할 다리의 길이 (3~20) 범위 내의 수
- [x] NaN 예외 처리
- [x] 숫자 사이에 공백 , 공백으로 제출한다면 예외처리

# 테스트 코드

# 객체 관련 제한 사항

## InputView 객체 V

- 제공된 InputView 객체를 활용해 구현해야 한다.

- InputView의 파일 경로는 변경할 수 있다.

- InputView의 메서드의 인자는 변경할 수 있다.

- 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.

## OutputView 객체 V

- 제공된 OutputView 객체를 활용해 구현해야 한다.

- OutputView의 파일 경로는 변경할 수 있다.

- OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라
  추가하거나 변경할 수 있다.

- 값 출력을 위해 필요한 메서드를 추가할 수 있다.

## BridgeGame 클래스 V

- 제공된 BridgeGame 클래스를 활용해 구현해야 한다.

- BridgeGame에 필드(인스턴스 변수)를 추가할 수 있다.

- BridgeGame의 파일 경로는 변경할 수 있다.

- BridgeGame의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.

- 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.

## BridgeMaker 객체 V

- 제공된 BridgeMaker 객체를 활용해 구현해야 한다.

- BridgeMaker에 프로퍼티를 추가할 수 없다.

- BridgeMaker의 파일 경로는 변경할 수 없다.

- BridgeMaker의 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.

## BridgeRandomNumberGenerator 객체 V

- Random 값 추출은 제공된 BridgeRandomNumberGenerator의 generate()를 활용한다.

- BridgeRandomNumberGenerator의 코드는 변경할 수 없다.

- 다리 칸을 생성하기 위한 Random 값은 아래와 같이 추출한다.

const number = generateRandomNumber();

# 추가 요구 사항

- 함수(또는 메서드)의 길이가 10라인을 넘어가지 않도록 구현한다.
- 함수(또는 메서드)가 한 가지 일만 잘하도록 구현한다.
- 메서드의 파라미터 개수는 최대 3개까지만 허용한다.
- 객체 관련 요구사항을 참고하여 구현한다.
- InputView 에서만 MissionUtils의 Console.readLine() 을 이용해 사용자의 입력을 받을 수 있다.
- BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.

# 사용 외부 라이브러리

MissionUtils 라이브러리 Console 기능

# node version

14.20
