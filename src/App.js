class App {
  play() {}
}

moduleconst fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let inputArr = [];
for (let i = 1; i < input.length; i++) {
  inputArr.push(input[i].split(" "));
}

soultion(inputArr);
function soultion(inputArr) {
  let answer = [];
  inputArr.map((el) => {
    const n = +el[0];
    const m = +el[1];
    const memo = Array.from(Array(30), () => Array(30).fill(0));

    for (let i = 1; i <= n; i++) {
      for (let j = i; j <= m; j++) {
        if (j === i) {
          memo[i][j] = 1;
        } else if (i === 1) {
          memo[i][j] = j;
        } else {
          let temp = 0;
          for (let k = 1; k < j; k++) {
            temp += memo[i - 1][k];
          }
          memo[i][j] = temp;
        }
      }
    }
    answer.push(memo[n][m]);
  });
  console.log(answer.join("\n"));
}.exports = App;
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let inputArr = [];
for (let i = 1; i < input.length; i++) {
  inputArr.push(input[i].split(" "));
}

soultion(inputArr);
function soultion(inputArr) {
  let answer = [];
  inputArr.map((el) => {
    const n = +el[0];
    const m = +el[1];
    const memo = Array.from(Array(30), () => Array(30).fill(0));

    for (let i = 1; i <= n; i++) {
      for (let j = i; j <= m; j++) {
        if (j === i) {
          memo[i][j] = 1;
        } else if (i === 1) {
          memo[i][j] = j;
        } else {
          let temp = 0;
          for (let k = 1; k < j; k++) {
            temp += memo[i - 1][k];
          }
          memo[i][j] = temp;
        }
      }
    }
    answer.push(memo[n][m]);
  });
  console.log(answer.join("\n"));
}
