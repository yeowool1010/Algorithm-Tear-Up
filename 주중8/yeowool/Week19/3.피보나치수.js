// [PGS] 피보나치 수 / leve2
// 난이도 :  leve2
// 풀이시간 :
// 점수 :

/*
문제
피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

예를들어

F(2) = F(0) + F(1) = 0 + 1 = 1
F(3) = F(1) + F(2) = 1 + 1 = 2
F(4) = F(2) + F(3) = 1 + 2 = 3
F(5) = F(3) + F(4) = 2 + 3 = 5
와 같이 이어집니다.

2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

제한 사항
n은 2 이상 100,000 이하인 자연수입니다.
입출력 예
n	return
3	2
5	5
입출력 예 설명
피보나치수는 0번째부터 0, 1, 1, 2, 3, 5, ... 와 같이 이어집니다.
/*
<의사코드>
피보나치 수 구하기
1. fibonacci를 선언하여 초기값이 [0 , 1]인 배열을 할당
   피보나치 수의 계산은 2번째 자리부터, 0번째 수와 1번째 수의 덧셈
2. 2번째 자리부터 n까지 1씩 증가하는 for문으로 돌 때 마다 추력되는 값을 배열의 마지막 요소호 추가
*/

function solution(n) {
  let fibonacci = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
  }
  console.log(fibonacci);
  return fibonacci;
}

/*
테스트 1
입력값 〉	3
기댓값 〉	2
실행 결과 〉	실행한 결괏값 undefined가 기댓값 2과 다릅니다.
출력 〉	[ 0, 1, 1, 2 ]
테스트 2
입력값 〉	5
기댓값 〉	5
실행 결과 〉	실행한 결괏값 undefined가 기댓값 5과 다릅니다.
출력 〉	[ 0, 1, 1, 2, 3, 5 ]
 */

function solution(n) {
  let fibonacci = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
  }
  console.log(fibonacci % 1234567);
  return fibonacci % 1234567;
}

/*
배열에서 바로 나누면 안대지 멍충아..
테스트 1
입력값 〉	3
기댓값 〉	2
실행 결과 〉	실행한 결괏값 null이 기댓값 2과 다릅니다.
출력 〉	NaN
테스트 2
입력값 〉	5
기댓값 〉	5
실행 결과 〉	실행한 결괏값 null이 기댓값 5과 다릅니다.
출력 〉	NaN
 */

function solution(n) {
  let fibonacci = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
  }

  return fibonacci[n] % 1234567;
}

/*
테스트 1 〉	통과 (2.15ms, 33.5MB)
테스트 2 〉	통과 (3.21ms, 33.6MB)
테스트 3 〉	통과 (2.13ms, 33.5MB)
테스트 4 〉	통과 (2.19ms, 33.5MB)
테스트 5 〉	통과 (2.15ms, 33.5MB)
테스트 6 〉	통과 (2.13ms, 33.5MB)
테스트 7 〉	실패 (2.41ms, 33.7MB)
테스트 8 〉	실패 (3.73ms, 33.5MB)
테스트 9 〉	실패 (2.24ms, 33.5MB)
테스트 10 〉	실패 (2.38ms, 33.7MB)
테스트 11 〉	실패 (2.29ms, 33.6MB)
테스트 12 〉	실패 (2.28ms, 33.6MB)
테스트 13 〉	실패 (9.30ms, 39.5MB)
테스트 14 〉	실패 (6.25ms, 39.5MB)
*/
