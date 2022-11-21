const { KEY } = require("./constant");

const Validate={
  bridgeSizeValidate(bridgeLength){
    if(Number(bridgeLength)<3||Number(bridgeLength)>20){
      throw Error;
    }
  },

  movingValidate(move){
    if(move!==KEY.MOVE_UP||move!==KEY.MOVE_DOWN){
      throw Error;
    }
  },

  restartValidate(restart){
    if(restart!==KEY.RESTART||restart!==KEY.END){
      throw Error;
    }
  },
};

module.exports=Validate;