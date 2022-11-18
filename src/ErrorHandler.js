const OutputView = require("../src/console/OutputView")

class ErrorHandler {
    static test(validTarget, callback , errorCallback){
        try {
            validTarget()
            callback()
        } catch(error) {
            OutputView.printLine(error.message)
            errorCallback()
        }
    }
}
module.exports = ErrorHandler
