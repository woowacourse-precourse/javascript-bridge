class ErrorHandler {
    static test(validTarget, callback , errorCallback){
        try {
            validTarget()
            callback()
        } catch(error) {
            console.log(error.message)
            errorCallback()
        }
    }
}
module.exports = ErrorHandler
