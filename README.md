<h1 align="middle">프리코스 4주차 - 다리 건너기 🎱</h1>
<p align="middle">Console을 통해 작동하는 다리 건너기 게임</p>
<br>

# 📱 실행 순서

## 1. 다리 생성하기

게임을 시작하면 게임 시작 안내 문구가 출력되고, 이후 다음과 같은 문구가 출력됩니다.

```
다리의 길이를 입력해주세요.
```

다리의 길이는 3~20 사이의 숫자만 입력이 가능합니다.

입력이 완료되면 해당 길이만큼의 다리가 생성이 됩니다.

## 2. 다리 건너기

### 2-1. 이동할 칸 입력 받기

정상적으로 다리가 생성되면, 이동할 칸을 입력해야 합니다.

```
이동할 칸을 선택해주세요. (위: U, 아래: D)
```

이동할 칸은 위(U), 아래(D)만 입력해야 합니다.

### 2-2. 칸 이동 성공

이동할 칸을 입력 받으면 해당 칸으로 이동합니다.

```
이동할 칸을 선택해주세요. (위: U, 아래: D)
U
[ O ]
[   ]
```

건널 수 있는 칸이라면, 해당 칸에 O 표시가 되며 이동한 경로를 보여줍니다.

이후, 다음 이동할 칸을 입력 받습니다.

### 2-3. 칸 이동 실패

이동할 칸을 입력 받으면 해당 칸으로 이동합니다.

```
이동할 칸을 선택해주세요. (위: U, 아래: D)
D
[   ]
[ X ]
```

그러나 해당 칸이 건널수 없는 칸이면, 해당 칸에 X 표시가 되며 이동한 경로를 보여줍니다.

이후, 다리 건너기는 종료됩니다.

### 3. 재시도 혹은 종료

건널 수 없는 칸으로 이동했다면 다리 건너기가 종료되며 재시도를 할지, 게임을 종료할지 물어봅니다.

```
게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)
```

입력은 재시도 명령어(R)와 종료 명령어(Q)만 입력할 수 있습니다.

재시도 명령어를 입력한다면, 다리 건너기를 처음부터 다시 시작합니다. 이 때, 다리는 새로 생성하지 않고 기존의 다리를 건넙니다.

```
게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)
R
이동할 칸을 선택해주세요. (위: U, 아래: D)
```

종료 명령어를 입력한다면, 최종 게임 결과를 출력하고 게임을 종료합니다.

```
게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)
Q
최종 게임 결과
```

### 4. 최종 게임 결과 출력

다리를 건너는데 성공했거나, 중간에 종료 명령어를 통해 종료했다면 최종 게임 결과를 출력합니다.

다리를 건너는데 성공했다면 다음과 같이 출력됩니다.

```
최종 게임 결과
[ O |   |   ]
[   | O | O ]

게임 성공 여부: 성공
총 시도한 횟수: 2
```

다리를 건너는데 실패했다면 다음과 같이 출력됩니다.

```
최종 게임 결과
[ O | X ]
[   |   ]

게임 성공 여부: 실패
총 시도한 횟수: 1
```

최종 게임 결과로는 플레이어가 이동한 다리 경로, 게임 성공 여부, 시도한 횟수가 출력 됩니다.

<br>

# 💻 실행 결과 예시

```
다리 건너기 게임을 시작합니다.

다리의 길이를 입력해주세요.
3

이동할 칸을 선택해주세요. (위: U, 아래: D)
U
[ O ]
[   ]

이동할 칸을 선택해주세요. (위: U, 아래: D)
U
[ O | X ]
[   |   ]

게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)
R
이동할 칸을 선택해주세요. (위: U, 아래: D)
U
[ O ]
[   ]

이동할 칸을 선택해주세요. (위: U, 아래: D)
D
[ O |   ]
[   | O ]

이동할 칸을 선택해주세요. (위: U, 아래: D)
D
[ O |   |   ]
[   | O | O ]

최종 게임 결과
[ O |   |   ]
[   | O | O ]

게임 성공 여부: 성공
총 시도한 횟수: 2
```

```
다리 건너기 게임을 시작합니다.

다리의 길이를 입력해주세요.
3

이동할 칸을 선택해주세요. (위: U, 아래: D)
U
[ O ]
[   ]

이동할 칸을 선택해주세요. (위: U, 아래: D)
U
[ O | X ]
[   |   ]

게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)
Q
최종 게임 결과
[ O | X ]
[   |   ]

게임 성공 여부: 실패
총 시도한 횟수: 1
```

<br>
