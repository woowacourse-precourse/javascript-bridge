# 🚶 다리 건너기 구현 기능 목록

- [ ] `다리 건너기 게임을 시작합니다.` 문구를 출력한다.
- [x] `다리의 길이를 입력해주세요.` 문구를 출력한 뒤 사용자에게 한 자리 숫자를 입력받는다.
  - [ ] 빈 값이 입력되었다면 `[ERROR] 다리 길이를 입력해주세요.` 문구를 출력한다.
  - [ ] 3 미만의 값이 입력되었다면 `[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.` 문구로 예외처리한다.
  - [ ] 20 초과의 값이 입력되었다면 `[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.` 문구로 예외처리한다.
  - [ ] 숫자가 아닌 값이 입력되었다면 `[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.` 문구로 예외처리한다.
- [x] 입력된 다리 길이로 건널 수 있는 칸과 건널 수 없는 칸을 랜덤으로 생성한다.
  - [x] 무작위 값이 0인 경우 아래칸, 1인 경우 위 칸이 건널 수 있는 칸이 된다.
- [ ] `이동할 칸을 선택해주세요. (위: U, 아래: D)` 문구를 출력한 뒤 사용자에게 U 혹은 D 문자를 입력받는다.
  - [ ] 빈 값이 입력되었다면 `[ERROR] 이동할 칸을 입력해주세요.` 문구로 예외처리한다.
  - [ ] U 혹은 D가 아닌 다른 값이 입력되었다면 `[ERROR] U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력할 수 있습니다.` 문구로 예외처리한다.
- [ ] 사용자가 입력한 값과 랜덤으로 생성된 값으로 이동한 칸을 건널 수 있다면 O, 아니면 X로 표시한다.
  - [ ] 선택하지 않은 칸은 공백 한 칸으로 표시한다.
  - [ ] 다리의 시작은 `[`, 다리의 끝은 `]`으로 표시한다.
  - [ ] 다리 칸의 구분은 `|`(앞뒤 공백 포함) 문자열로 구분한다.
  - [ ] 현재까지 건넌 다리를 모두 출력한다.
- [ ] 다리를 끝까지 건너거나 실패할 경우 `게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)` 문구를 출력한 뒤 R 혹은 Q 문자를 입력받는다.
  - [ ] 빈 값이 입력되었다면 `[ERROR] 게임을 다시 시도할지 여부를 입력해주세요.` 문구로 예외처리한다.
  - [ ] R 혹은 Q가 아닌 다른 값이 입력되었다면 `[ERROR] R(재시도)와 Q(종료) 중 하나의 문자를 입력할 수 있습니다.` 문구로 예외처리한다.
- [ ] 만약 종료하거나 다리 건너기가 성공했을 경우 `최종 게임 결과`, `게임 성공 여부`, `총 시도한 횟수`를 출력한다.
- [ ] 만약 다시한다면 기존에 랜덤으로 생성된 값으로 다시 다리 건너기를 시도한다.

## 개발 시 필요한 목록

- [x] prepare-commit-msg 규칙 등록

  - 커밋 컨벤션에 맞추기 위해 `.git/hooks` 기능을 사용한다.
  - `prepare-commit-msg.sample` 파일에 아래 코드를 작성한 뒤 `prepare-commit-msg`로 파일명을 변경하여 사용한다.
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

- [x] eslint airbnb 규칙 등록
  - `npm init @eslint/config` 로 초기 설정한다.
  - `npx install-peerdeps --dev eslint-config-airbnb`로 airbnb 규칙을 초기 세팅한다.
  - 요구사항의 `max-depth`, `max-lines-per-function` 규칙 추가한다.
  - test 파일엔 다양한 예외처리를 위해 `max-lines-per-function` 규칙을 꺼둔다.
- [x] prettier 설정
  - `npm install --save-dev --save-exact prettier`로 prettier를 설치한다.
  - `echo {}> .prettierrc.json`로 prettier 규칙을 작성할 파일을 생성한다.
  - eslint와 충돌할 것을 대비하여 `npm install --save-dev eslint-config-prettier` 를 설치한 뒤 eslint 규칙 설정 파일의 extends에 `"prettier"`를 추가한다. ([출처](https://prettier.io/docs/en/integrating-with-linters.html))
