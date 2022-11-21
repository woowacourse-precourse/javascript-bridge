
const User = {
    move(size, generateRandomNumber) {
        let bridageStatus = [];

        while(size){
            const randomNumber = generateRandomNumber();
            if(randomNumber == 0) { bridageStatus.push('D') } 
            if(randomNumber == 1) { bridageStatus.push('U') }
            size -= 1;
        }

        return bridageStatus;
        },
    };
    
    module.exports = User;
