## [4주차] 우아한테크코스 프리코스 - 다리 건너기

<div style="display: flex;"><div style="display: flex; width: 100%; border-radius: 3px; border: 1px solid rgba(55, 53, 47, 0.16); background-color: transparent; padding: 16px 16px 16px 12px; color: rgb(55, 53, 47);"><div><div class="notion-record-icon notranslate notion-focusable" role="button" tabindex="0" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; justify-content: center; height: 24px; width: 24px; border-radius: 0.25em; flex-shrink: 0;"><div style="display: flex; align-items: center; justify-content: center; height: 24px; width: 24px;"><div style="height: 16.8px; width: 16.8px; font-size: 16.8px; line-height: 1; margin-left: 0px; color: black;"><img class="notion-emoji" alt="💬" aria-label="💬" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" style="width: 100%; height: 100%; background: url(&quot;/images/emoji/twitter-emoji-spritesheet-64.d3a69865.png&quot;) 47.4576% 52.5424% / 6000% 6000%;"></div></div></div></div><div style="display: flex; flex-direction: column; min-width: 0px; margin-left: 8px; width: 100%;"><div class="notranslate" spellcheck="true" placeholder="내용을 입력하세요" data-content-editable-leaf="true" contenteditable="true" style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding-left: 2px; padding-right: 2px;"><span style="font-style:italic;font-weight:600" data-token-index="0" class="notion-enable-hover">💬위아래 둘 중 하나의 칸만 건널 수 있는 다리를 끝까지 건너가는 게임이다. 3주차 공통 피드백과 추가된 요구 사항을 최대한 지키며 개발한다.</span></div><div data-block-id="528032ba-3510-4b65-9a72-2d67c708c414" class="notion-selectable notion-callout-block"></div></div></div></div>

<div style="display:flex">
<div>

### 🚀이번 주차 목표

- **TDD 방법론으로 개발코드를 작성한다.**
- **함수는 공백을 포함해서 10라인으로 제한한다.**
  (10라인이 넘어간다면 함수 분리를 고민)
- **메서드의 파라미터 개수는 최대 3개까지만 허용한다.**
- **발생할 수 있는 예외 상황에 대해 고민한다.**
- **비즈니스 로직과 UI 로직을 분리한다.**
  - MVC 디자인 패턴을 이용해 작성한다.
  - 객체지향 프로그래밍 5원칙을 고려하며 작성해본다.
- **객체의 상태 접근을 제한한다.**
  - 필드는 private class 필드로 구현한다.
  - 객체의 상태를 외부에서 직접 접근하는 방식을 최소화 한다.
- **객체는 객체스럽게 사용한다.**
  - 3주차 로또 과제에서의 `Lotto`클래스를 예를 들며 데이터를 꺼내지 말고 데이터를 가지는 객체가 일하도록 한다.
- **필드의 수를 줄이기 위해 노력한다.**
  - 필드의 수가 많은 것은 객체의 복잡도를 높이며 버그 발생 가능성을 높인다.
  - 필드에 중복이 있거나, 불필요한 필드가 없는지 확인해 필드의 수를 최소화한다.
  </div>
  <div>

### 😎 게임 규칙 및 조작법

- **위아래 두 칸으로 이루어진 다리를 건너야 한다.**
  - 다리는 왼쪽에서 오른쪽으로 건너야 한다.
  - 위아래 둘 중 하나의 칸만 건널 수 있다.
- **다리의 길이를 숫자로 입력받고 생성한다.**
  - 다리를 생성할 때 위 칸과 아래 칸 중 건널 수 있는 칸은 0과 1 중 무작위 값을 이용해서 정한다.
  - 위 칸을 건널 수 있는 경우 U, 아래 칸을 건널 수 있는 경우 D값으로 나타낸다.
  - 무작위 값이 0인 경우 아래 칸, 1인 경우 위 칸이 건널 수 있는 칸이 된다.
- **다리가 생성되면 플레이어가 이동할 칸을 선택한다.**
  - 이동할 때 위 칸은 대문자 U, 아래 칸은 대문자 D를 입력한다.
  - 이동한 칸을 건널 수 있다면 O로 표시한다. 건널 수 없다면 X로 표시한다.
- **다리를 끝까지 건너면 게임이 종료된다.**
- **다리를 건너다 실패하면 게임을 재시작하거나 종료할 수 있다.**
  - 재시도 : R / 종료 : Q
  - 재시작하면 처음에 만든 다리로 재사용한다.
  - 게임 결과의 총 시도한 횟수는 첫 시도를 포함해 게임을 종료할 때까지 시도한 횟수를 나타낸다.

</div>
</div>

<div>

---

### 💻구현 기능 목록

**0. 게임이 시작되면 게임 시작 문구를 출력한다.**

**1. 유저로부터 다리의 길이 입력을 받는다. (길이는 3~20)**

- 올바른 값이 아니면 예외 처리한다.

**2. 길이만큼 다리를 생성한다.**
**3. 라운드마다 플레이어가 이동할 칸을 입력 받는다.**

- U(위 칸), D(아래 칸) 중 하나의 문자를 입력한다.
- 올바른 값이 아니면 예외 처리한다.

**4. 사용자가 이동할 때마다 다리 건너기 결과를 출력한다.**

- 이동할 수 있는 칸을 선택한 경우 `O` 표시
- 이동할 수 없는 칸을 선택한 경우 `X` 표시
- 선택하지 않은 칸은 공백 한 칸으로 표시
- 다리의 시작은 `[`, 다리의 끝은 `]`으로 표시
- 다리 칸의 구분은 `|`(앞뒤 공백 포함) 문자열로 구분
- 현재까지 건넌 다리를 모두 출력

**5. 게임 중 사용자가 이동할 수 없는 칸을 선택할 경우 게임 재시작/종료 여부를 입력 받는다.**

- 재시도 : R / 종료 : Q
- 올바른 값이 아니면 예외 처리한다.

**6. 사용자가 재시도 `R`을 선택했을 경우**

- 시도횟수를 카운트한다.
- 다리는 처음에 만든 다리로 재사용한다.
- 게임이 종료되거나 사용자가 이동할 수 없는 칸을 선택할 때까지 3~5의 과정을 반복한다.

**7. 사용자가 종료 `Q`를 선택했을 경우 결과를 출력한다.**

- 최종 게임 결과를 출력한다.
- 게임 성공 여부를 출력한다.
- 총 시도한 횟수를 출력한다.

</div>
