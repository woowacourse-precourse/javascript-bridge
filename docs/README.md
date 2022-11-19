<!-- prettier-ignore-start -->

## 이번 과제의 목표
- 클래스 객체를 분리하는 연습
- 도메인 로직에 대한 단위테스트를 작성하는 연습
- 리팩터링

## 구현 기능 목록

- ### 게임시작
    - ✅ '다리 건너기 게임을 시작합니다.' 메세지를 출력한다.
- ### 다리의 길이를 숫자를 입력받고 생성한다.
    - ✅ 다리의 길이를 입력받는다.
    - ✅ [예외] 숫자인지 체크한다.
    - ✅ [예외] 3이상 20이하의 숫자인지 체크한다.
    - ✅ 사용자에게 입력받은 수 만큼 BridgeRandomNumberGenerator 객체를 이용하여 U 또는 D 가 저장된 배열을 만든다. 
<br/> <br/>
- ### 다리가 생성되면 플레이어가 이동할 칸을 선택한다.
    - ✅ 사용자에게 U 또는 D 를 입력받는다.
    - ✅ [예외] 정규표현식 사용하여 U 또는 D가 아닐경우 예외처리
    - ✅ 이동한 칸을 건널 수 있다면 O로 표시한다. 건널 수 없다면 X로 표시한다.
    ```
    const upperBridge = ''
    const lowerBridge = ''
    
    if (turn > 1) {
        upperBridge+='|'
        lowerBridge+='|'
    }
    if (bridge[turn] === 'U' && answer === 'U') {
        upperBridge+=' O '
        lowerBridge+='   '
        return 
    }
    if (bridge[turn] === 'U' && answer === 'D') {
        upperBridge+='   '
        lowerBridge+=' X '
        return 
    }
    if (bridge[turn] === 'D' && answer === 'U') {
        upperBridge+=' X '
        lowerBridge+='   '
        return 
    }
    if (bridge[turn] === 'D' && answer === 'D') {
        upperBridge+='   '
        lowerBridge+=' O '
        return 
    }
    
    ```
    - ✅ 사용자에게 해당 턴에대한 결과를 출력한다. (앞뒤 [ ] 추가해야한다.)
<br/> <br/>
- ### 다리를 끝까지 건너면 게임이 종료된다.
    - ✅ turn이 다리갯수 보다 커지면 다리를 끝까지 건넌 것으로 간주한다.
    - ✅ 최종 게임 결과를 출력한다. (아마 upperBridge, lowerBridge 그대로 출력하면 될 것 같다.)
<br/> <br/>
- ### 다리를 건너다 실패하면 게임을 재시작하거나 종료할 수 있다
    - ✅ 사용자에게 시작 여부를 묻는다. (게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q))
    - ✅ [예외] 정규표현식 사용하여 R 또는 Q가 아닐경우 예외처리
    - **R 일경우** 
    - ✅ 총 시도 횟수를 증가시킨다.
    - ✅ upperBridge와 lowerBridge, turn 을 초기화 시킨다.
    - ✅ 플레이어가 이동할 칸을 선택한다. 단계를 반복한다.
    - **D 일경우**
    - ✅ 최종 게임 결과를 출력한다. (아마 upperBridge, lowerBridge 그대로 출력하면 될 것 같다.)
<br/> <br/>


## 프로그래밍 유의사항
  - #### Package json 변경금지
  - indent 2 이하
  - 함수 또는 메서드 10라인 이하
  - 함수는 한가지 일만 하도록 구현한다.
  - 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.
  - else 를 지양한다. (단 if else 를 사용할 수 밖에 없다면 사용해도 된다.)
  - 단위 테스트
  - 통합 테스트
  - 메서드의 파라미터 개수는 최대 3개까지만 허용한다.
  - 예외처리는 throw문을 발생 [ERROR]로 시작하는 에러메세지를 생성한다.

### InputView 객체
- 제공된 InputView 객체를 활용해 구현해야 한다.
- 파일 경로는 변경 O
- 메서드 인자 변경 O
- 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
- InputView 에서만 MissionUtils의 Console.readLine() 을 이용해 사용자의 입력을 받을 수 있다.

### OutputView 객체
- 제공된 OutputView 객체를 활용해 구현해야 한다.
- OutputView의 파일 경로는 변경 O
- OutputView의 메서드의 이름은 변경 X, 인자는 필요에 따라 추가하거나 변경 O
- 값 출력을 위해 필요한 메서드를 추가할 수 있다.

### BridgeGame 클래스

- 제공된 `BridgeGame` 클래스를 활용해 구현해야 한다.
- `BridgeGame`에 필드(인스턴스 변수)를 추가할 수 있다.
- `BridgeGame`의 파일 경로는 변경할 수 있다.
- `BridgeGame`의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
- 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.

### BridgeMaker 객체

- 제공된 `BridgeMaker` 객체를 활용해 구현해야 한다.
- `BridgeMaker`에 프로퍼티를 추가할 수 없다.
- `BridgeMaker`의 파일 경로는 변경할 수 없다.
- `BridgeMaker`의 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.

### BridgeRandomNumberGenerator 객체

- Random 값 추출은 제공된 `BridgeRandomNumberGenerator`의 `generate()`를 활용한다.
- `BridgeRandomNumberGenerator`의 코드는 변경할 수 없다.

<!-- prettier-ignore-end -->
