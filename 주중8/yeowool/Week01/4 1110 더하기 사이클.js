let input = Number(require('fs').readFileSync('/dev/stdin').toString());
// 입력값 가져오기
let num = input.split(); // num을 선언하여 input을 배열형태로 할당한다.
let sum = 0;  // 분리한 두 숫자를 담을 변수를 선언한다.
let i = 0;  // 최종적으로 출력할 횟수를 변수 i로 선언한다.

while (num !== input) { // 
    i++; 

    sum  = num[0] + num[1];      // sum에 num index 0과 1을 더한 값을 할당한다.
    if(sum.length === 1) {        // 만약 sum이 한자리수라면 num에 sum의 index 0번째 요소와 num의 index 1번째 요소를 더한다.
        num = sum[0] + num[1];
    } else if(sum.length === 2) { // 만약 sum이 두자리수라면 sum의 1번째 index를 가져온다
        num = sum[1] + num[1]     
    } 
    
}

console.log(i);