const constant = {
    UP: 'U',
    DOWN: 'D',
    DOWN_INDEX: 0,
    O : 'O',
    X : 'X',
    CONTAIN_LOW : 3,
    CONTAIN_HIGH : 20,
    RETRY : 'R',
    QUIT : 'Q',

    ERROR : {
        CONTAIN_STRING : "[ERROR] 문자가 포함 되있습니다.",
        NOT_CONTAIN_NUMBER : "[ERROR] 3 ~ 20 숫자에 포함되지 않습니다.",
        NOT_CONTAIN_U_D : "[ERROR] U와 D 외의 문자는 사용할 수 없습니다.",
        NOT_CONTAIN_Q_R : "[ERROR] Q와 R 외의 문자는 사용할 수 없습니다."
    }
}

module.exports = constant;