# 기능구현 목록

## 상수 생성

### 진행메세지

- [x] - 다리 건너기 게임을 시작합니다.

- [x] - 다리의 길이를 입력해주세요.

- [x] - 게임을 다시 시도할지 여부를 입력해주세요.

- [x] - 이동할 칸을 선택해주세요.

### 결과 메세지

- [x] - 성공 실패

- [x] - 총 시도한 횟수

### 에러 메세지

\*[ERROR] 로 시작

- [x]- 공백

- [x] - NaN

- [x]- 범위 오류

- [x] - U&D

- [x] - R&Q

### 상수화

- [x] 다리의 길이 범위 (3~20)

- [x] 재시도: R, 종료: Q

- [x] (위: U, 아래: D)

- [x] O | X

## utils

- [x] Console.readLine Utils로 분리
- [x] Console.pirnt Utils로 분리
- [x] Console.close Utils로 분리

## 입력 validation

### 공통

- [x] trim 처리를 통해 양옆 공백 제거 ,
- [] throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지 출력후 종료가 아니라 거기서 부터 다시 시작해야됨

### 게임 재시작, 종료

- [x] R, Q 중 하나의 값을 제외한 나머지 막기

### 이동할 칸

- [x] U&D를 제외한 나머지 값 막기

### 생성할 다리 길이 입력 (checkBridgeInput)

- [x] 생성할 다리의 길이 (3~20) 범위 내의 수
- [x] NaN 예외 처리
- [x] 숫자 사이에 공백 , 공백으로 제출한다면 예외처리

## 다리 생성

\*무작위 값이 0인 경우 아래 칸, 1인 경우 위 칸이 건널 수 있는 칸이 된다.

- [x] 다리를 생성할 때 위 칸과 아래 칸 중 건널 수 있는 칸은 0과 1 중 무작위 값을 이용해서 정하고 입력 받은 길이만큼 배열생성

## 게임

appStatus를 통해 게임 진행

- [x] 다리의 길이를 입력하고 다리를 만들기까지 진행
- [] 다리를 건너다 실패하면 게임을 재시작하거나 종료하는 기능
- [] 재시작시 처음에 만든 다리 재사용(죽은 지점까지 세이브는 안된다 즉 무조건 실패시에는 X가 표시된 지도가 나오고 성공시에는 O만 있어야됨 )

- [] 시도한 횟수 저장 기능

### Bridge Maker

- [x] 0 일경우 아래(D) 1일 경우 위칸(U) 을 받은 size 만큼 생성하는 기능

### Bridge Game

- [x] move 사용자가 칸을 이동할 때 사용하는 메서드

  - [x] 입력값에 따라 만들어진 다리와 입력값을 비교하여 output과 retry에 전달할 return 값 배출 : (t/f) , input 값 , 배열 길이

  - [x] 지금이 다리의 몇번째인지 알 수 있어야됨(성공시에만 다리의길이를 늘림)

  - [x] move 를 사용할때마다 시도횟수도 올라 가야됨(성공 실패와 무관하게 move를 사용할때마다 올라감)

- [x] retry 사용자가 게임을 다시 시도할 때 사용하는 메서드

  - [x] R 게임 재시작 true (처음 만들었던 다리로 재시작)

  - [x] Q 게임종료 exit false 배출

- [x] bridge length status 길이를 올리고 저장하는 기능

- [x] 시도횟수가 늘어나고 저장되는 기능

### Bridge Map

다리건너기 맵을 관리하는 클래스

- [x] 자원들 상수로 구현

- [x] handleMap 해당 클래스의 #isFirst 멤버변수가 true 냐 false 냐에 따라 분기를 나눠 add First Map , add map 을 실행시키는 함수

- [x] add First Map boolean 과 input, 이전의 map 을 받아 맞혔을때와 못맞혔을때의 분기를 나누며 , 해당 클래스의 시작 상태 멤버변수를 false로 바꾸는 메서드

- [x] addmap move의 boolean과 input , 이전의 map을 받아 맞혔을때와 못맞혔을때의 분기를 나눠 correct 와 Incorrect를 실행시키는 메서드

- [x] add correct 메서드 move의 input 과 이전의 map , map소스를 받아 이용자가 맞췄을때 해당 자원을 추가하는 메서드

  - [x] move 값이 true 이면 input 에 따라이동한 칸을 O로 표시한다.

- [x] addIncorrect메서드 move의 input과 이전의 map 을 받아 이용자가 틀렸을때 해당 자원을 추가하는 메서드

  - [x] move값이 false 이면 input에 따라 틀린 칸을 X가 나타나고 그냥 성공했다면 계속 O만 나온다.

  - [x] 실패시 이전 다리의 X는 나타나지않고 실패한 다리의 X만 나옴

  - [x] 인자로 (move의 t/f , input) 그리고 이전 맵을 받는다.

- [x] first Map 처음 맵에 추가할때 maker로 만든 맵에 자원을 추가한다.

- [] 최종 적으로 컨트롤 된 맵을 리턴하는 기능

### Map Maker

기본 맵을 생성하는 객체

- [x] init Map 기본 맵을 생성한다. [[],[]]

## viwe

### input view

- [x] 사용자가 이동할 칸을 입력받는 기능

- [x] 다시 시도할지 종료할지 여부를 입력받는 기능

- [x] 다리의 길이를 입력 받는 기능

### output view

- [x] 게임 시작 메세지

- [] print Map

- [] 게임의 성공과 실패를 나타내는 기능

- [] 게임 종료시 저장한 시도 출력 기능

# 객체 관련 제한 사항

## InputView 객체

- 제공된 InputView 객체를 활용해 구현해야 한다.

- InputView의 파일 경로는 변경할 수 있다.

- InputView의 메서드의 인자는 변경할 수 있다.

- 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.

## OutputView 객체

- 제공된 OutputView 객체를 활용해 구현해야 한다.

- OutputView의 파일 경로는 변경할 수 있다.

- OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라
  추가하거나 변경할 수 있다.

- 값 출력을 위해 필요한 메서드를 추가할 수 있다.

## BridgeGame 클래스

- 제공된 BridgeGame 클래스를 활용해 구현해야 한다.

- BridgeGame에 필드(인스턴스 변수)를 추가할 수 있다.

- BridgeGame의 파일 경로는 변경할 수 있다.

- BridgeGame의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.

- 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.

## BridgeMaker 객체

- 제공된 BridgeMaker 객체를 활용해 구현해야 한다.

- BridgeMaker에 프로퍼티를 추가할 수 없다.

- BridgeMaker의 파일 경로는 변경할 수 없다.

- BridgeMaker의 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.

## BridgeRandomNumberGenerator 객체

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
