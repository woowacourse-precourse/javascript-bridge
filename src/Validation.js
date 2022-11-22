const Validation = {
    checkBridgeSize(size) {
      if (isNaN(size))
        return { errorMsg: new Error('\n[ERROR] 숫자만 입력할 수 있습니다.\n') };
      
      if(!(size % 1 === 0)) return {
        errorMsg:new Error('\n[ERROR] 숫자는 정수만 입력가능합니다.')
      };
      if (size < 3 || size > 20)
        return {
          errorMsg:new Error('\n[ERROR] 3 이상 20 이하의 숫자만 입력할 수 있습니다.\n')
        };
  
      return { errorMsg: undefined };
    },
  
    checkDirection(direction) {
      if (direction === 'U' || direction === 'D') return { errorMsg: undefined };
  
      return { errorMsg: new Error('\n[ERROR] U 또는 D만 입력할 수 있습니다.') };
    },
  
    checkCommandOption(commandOption) {
      if (commandOption === 'R' || commandOption === 'Q') return { errorMsg: undefined };
  
      return { errorMsg: new Error('\n[ERROR] R 또는 Q만 입력할 수 있습니다.') };
    },
  };
  
  module.exports = Validation;