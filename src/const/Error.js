const Error = {
    REGEXP: {
        space: /\s/g,
        moving: /^[UD]$/,
        retry: /^[RQ]$/
    },

    ERROR_TEXT: {
        bridgeSize: '[ERROR] 다리 길이는 3이상 20이하의 숫자로 입력해야 합니다.',
        moving: '[ERROR] 이동할 칸에 대한 입력은 U 또는 D만 입력 가능합니다.',
        retry: '[ERROR] 재시작/종료 여부 입력은 R 또는 Q만 입력 가능합니다.'
    }
}

module.exports = Error;
