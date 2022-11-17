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
  };
  
  module.exports = Validate;
  