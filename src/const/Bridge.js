const Bridge = {
    MOVING_RESULT : {
        next: 'next',
        fail: 'fail',
        success: 'success'
    },

    RETRY_RESULT : {
        retry: 'retry',
        quit: 'quit'
    },

    SUCCESS_FLAG : {
        true: true,
        false: false
    }, 

    RETRY_INPUT : {
        retry: 'R',
        quit: 'Q'
    },

    MOVING_INPUT : {
        up: 'U',
        down: 'D'
    }, 

    PRINT : {
        O: 'O',
        X: 'X',
        space: ' ',
        bar: ' | '
    }
}

module.exports = Bridge;