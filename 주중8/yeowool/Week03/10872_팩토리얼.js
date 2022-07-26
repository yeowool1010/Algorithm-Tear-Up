// 재귀 10872_팩토리얼
// 난이도 : 브론즈5
// 풀이시간 : 20분
// 메모리 : 9600 KB      
// 시간 :  120 ms      
// 코드길이 : 187 B


// 팩토리얼?
// 1! = 1
// 2! = 2*1 = 2
// 3! = 3*2*1 = 6
// 이게 바로 팩토리얼! 즉 정수를 모두 곱해주는 것이다
// 0팩토리얼은 1이다!!


// 의사코드
// 1. 0과 1은 1을 리턴하므로 if문으로 1을 리턴하도록 한다.
// 2. 이후 for문으로 2부터 input을 곱한다.

const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let result;
if(input <= 1) {
    result = i
}
for(let i = 1; i <=input; i++) {
    result *= i
}
console.log(result);


/////틀림///////


const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let result = 1;
for(let i = 1; i <=input; i++) {
    result *= i
}
console.log(result);



// 자꾸 틀려서 알아보다보니 비슷하게 풀이하신 분을 봤는데 result선언을 1로 한게 차이가 있어서
// if문을 빼고 result에 1을 초기값으로 설정해주었더니 통과했다.


