const Error = require("./ErrorMessage.js")
const Validate = {
    BridgeLengthInput(number) {
        if(number < 3 || number >20){
            throw Error.BRIDGE_LENGTH_ERROR
        }
        else if(!!Number(number) == false){
            throw Error.BRIDGE_INPUT_ERROR
        }
    },
    MoveInput(input){
        if(input != "U" && input != "D"){
            throw Error.BRIDGE_MOVE_ERROR
        }
    },
    RetryInput(input){
        if(input != "R" && input != "Q"){
            throw Error.BRIDGE_RETRY_ERROR
        }
    }
  };
  
  module.exports = Validate;
  