# Week 4: 오징어게임(다리 건너기)

## 파일 구조

📦src
┣ 📂controllers
┃ ┗ 📜BridgeGameController.js
┣ 📂models
┃ ┗ 📜BridgeGame.js
┣ 📂utils
┃ ┗ 📜constants.js
┣ 📂views
┃ ┣ 📜InputView.js
┃ ┗ 📜OutputView.js
┣ 📜App.js
┣ 📜BridgeMaker.js
┣ 📜BridgeRandomNumberGenerator.js
┣ 📜Validators.js
┗ 📜index.js

## 구현 기능 목록 🦑

1. 게임 시작

- [x] `다리 건너기 게임을 시작합니다.` 문구를 출력한다.

2. 길이 입력 받기

- [x] `다리의 길이를 입력해주세요.` 문구를 출력한 뒤 사용자에게 3~20사이 숫자를 입력받는다.
  - [x] 빈 값이 입력되었다면 `[ERROR] 다리 길이를 입력해주세요.` 문구를 출력한다.
  - [x] 3 미만의 값이 입력되었다면 `[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.` 문구로 예외처리한다.
  - [x] 20 초과의 값이 입력되었다면 `[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.` 문구로 예외처리한다.
  - [x] 숫자가 아닌 값이 입력되었다면 `[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.` 문구로 예외처리한다.

3. 입력된 길이로 랜덤으로 다리 생성

- [x] 입력된 다리 길이로 건널 수 있는 칸과 건널 수 없는 칸을 랜덤으로 생성한다.
  - [x] 무작위 값이 0인 경우 아래칸, 1인 경우 위 칸이 건널 수 있는 칸이 된다.

4. 사용자에게 이동 입력 받기

- [x] `이동할 칸을 선택해주세요. (위: U, 아래: D)` 문구를 출력한 뒤 사용자에게 U 혹은 D 문자를 입력받는다.
  - [x] 빈 값이 입력되었다면 `[ERROR] 이동할 칸을 입력해주세요.` 문구로 예외처리한다.
  - [x] U 혹은 D가 아닌 다른 값이 입력되었다면 `[ERROR] U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력할 수 있습니다.` 문구로 예외처리한다.

5. 입력 값에 따라 O,X 꼴로 format 변경

- [x] 사용자가 입력한 값과 랜덤으로 생성된 값으로 이동한 칸을 건널 수 있다면 O, 아니면 X로 표시한다.
  - [x] 선택하지 않은 칸은 공백 한 칸으로 표시한다.
  - [x] 다리의 시작은 `[`, 다리의 끝은 `]`으로 표시한다.
  - [x] 다리 칸의 구분은 `|`(앞뒤 공백 포함) 문자열로 구분한다.
  - [x] 현재까지 건넌 다리를 모두 출력한다.

6. 재시작 여부 입력 받기

- [x] 다리를 끝까지 건너거나 실패할 경우 `게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)` 문구를 출력한 뒤 R 혹은 Q 문자를 입력받는다.
  - [x] 빈 값이 입력되었다면 `[ERROR] 게임을 다시 시도할지 여부를 입력해주세요.` 문구로 예외처리한다.
  - [x] R 혹은 Q가 아닌 다른 값이 입력되었다면 `[ERROR] R(재시도)와 Q(종료) 중 하나의 문자를 입력할 수 있습니다.` 문구로 예외처리한다.

7. 최종 결과 생성 및 출력

- [x] 만약 종료하거나 다리 건너기가 성공했을 경우 `최종 게임 결과`, `게임 성공 여부`, `총 시도한 횟수`를 출력한다.

8. 재시작 시 기존 다리로 게임(새로생성x)

- [x] 만약 다시한다면 기존에 랜덤으로 생성된 값으로 다시 다리 건너기를 시도한다.

## 개발 시 필요한 목록 ⛏

- [x] prepare-commit-msg 규칙 등록

  - 커밋 컨벤션에 맞추기 위해 `.git/hooks` 기능을 사용한다.
    - `cd .git/hooks` 를 사용해 git 에서 제공하는 hooks 에 접근한다.
  - 파일에 있는 기존 코드를 지운다.
    - `cat /dev/null > vim prepare-commit-msg.sample`
  - `prepare-commit-msg.sample` 파일에 아래 코드를 작성한다.
    - `vim prepare-commit-msg.sample` 로 파일 열기 -> `i` 눌러 수정모드 -> 코드 복사 붙여넣기 -> `:wq` 저장후 나오기
  - `prepare-commit-msg`로 파일명을 변경하여 사용한다.

    - `mv prepare-commit-msg.sample prepare-commit-msg`

  - ```bash
      #!/bin/bash

      firstLine=`head -2 $1 | tail -1`
      if [[ $firstLine == \#* ]]; then # Testing that the file starts with a comment, not yet a real commit ;)
        echo '<type>(<component>): <subject>' > .prepare-commit-msg-temp
        echo '' >> .prepare-commit-msg-temp
        echo '<body>' >> .prepare-commit-msg-temp
        echo '' >> .prepare-commit-msg-temp
        echo '# types: feat, fix, docs, style, refactor, test, chore(mantean)' >> .prepare-commit-msg-temp

        { cat .prepare-commit-msg-temp; cat $1; } > .prepare-commit-msg-temp2
        cat .prepare-commit-msg-temp2 > $1
        rm .prepare-commit-msg-temp .prepare-commit-msg-temp2
      fi
    ```

  [출처](https://gist.github.com/armand1m/103ca2b8c9820e216727336f303ea712#file-prepare-commit-msg)

- [x] eslint airbnb 규칙 등록
  - `npm init @eslint/config` 로 초기 설정한다.
  - `npx install-peerdeps --dev eslint-config-airbnb`로 airbnb 규칙을 초기 세팅한다.
  - 요구사항의 `max-depth`, `max-lines-per-function` 규칙 추가한다.
  - test 파일엔 다양한 예외처리를 위해 `max-lines-per-function` 규칙을 꺼둔다.
- [x] prettier 설정
  - `npm install --save-dev --save-exact prettier`로 prettier를 설치한다.
  - `echo {}> .prettierrc.json`로 prettier 규칙을 작성할 파일을 생성한다.
  - eslint와 충돌할 것을 대비하여 `npm install --save-dev eslint-config-prettier` 를 설치한 뒤 eslint 규칙 설정 파일의 extends에 `"prettier"`를 추가한다. ([출처](https://prettier.io/docs/en/integrating-with-linters.html))

---
