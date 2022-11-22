// [PGS] 소수 만들기 / leve1
// 난이도 :  level 1
// 풀이시간 :
// 점수 :

/*
문제
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 
다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

제한사항
nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
입출력 예
nums	result
[1,2,3,4]	1
[1,2,7,6,4]	4
입출력 예 설명
입출력 예 #1
[1,2,4]를 이용해서 7을 만들 수 있습니다.

입출력 예 #2
[1,2,4]를 이용해서 7을 만들 수 있습니다.
[1,4,6]을 이용해서 11을 만들 수 있습니다.
[2,4,7]을 이용해서 13을 만들 수 있습니다.
[4,6,7]을 이용해서 17을 만들 수 있습니다.
*/

/*
< 의사코드 >
for문으로 3개 숫자를 더해서 배열에 담는다
그 배열을 하나씩 까면서 소수인지 판별한다

1. 세 개의 요소를 더한 숫자를 담을 sumArr를 배열로 선언
2. 3중 for문으로 nums배열 요소를 일일히 더해준다
3. 더한 숫자를 newArr에 push
4. sumArr만큼의 길이만큼 for문으로 돌면서 소수 여부 확인
  2중 for문으로!
  겉의 for문은 모든 배열 검사, 안의 for문은 2부터 sumArr의 i번째 숫자까지 sumArr를 나눈다
  안에서 if문으로 sumArr[i]를 j로 나눌 시 0이 디는 경우를 sumArr의 ㅂ열에서 공백으로 replace한다
5. sumArr.length return
*/

function solution(nums) {
  let sumArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sumArr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  console.log(sumArr);
  for (let i = 0; i < sumArr.length; i++) {
    for (let j = 2; j < sumArr[i]; j++) {
      if (sumArr[i] % j === 0) {
        sumArr.splice(i, "");
        consoel.log(sumArr);
      }
    }
  }
  consoel.log(sumArr);
  return sumArr.length;
}

/*

실패..
무엇이 원인인지 알아보자

*/

function solution(nums) {
  let sumArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sumArr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  console.log("처음" + sumArr);
  for (let i = 0; i < sumArr.length; i++) {
    for (let j = 2; j < sumArr[i]; j++) {
      if (sumArr[i] % j === 0) {
        sumArr.splice(i, "");
        console.log("중간" + sumArr);
      }
    }
  }
  console.log("마지막" + sumArr);
  return sumArr.length;
}

/*
테스트 1
입력값 〉	[1, 2, 3, 4]
기댓값 〉	1
실행 결과 〉	실행한 결괏값 4이 기댓값 1과 다릅니다.
출력 〉	처음6,7,8,9
중간6,7,8,9
중간6,7,8,9
중간6,7,8,9
중간6,7,8,9
중간6,7,8,9
마지막6,7,8,9
테스트 2
입력값 〉	[1, 2, 7, 6, 4]
기댓값 〉	4
실행 결과 〉	실행한 결괏값 10이 기댓값 4과 다릅니다.
출력 〉	처음10,9,7,14,12,11,15,13,12,17
중간10,9,7,14,12,11,15,13,12,17
중간10,9,7,14,12,11,15,13,12,17
중간10,9,7,14,12,11,15,13,12,17
중간10,9,7,14,12,11,15,13,12,17
중간10,9,7,14,12,11,15,13,12,17
중간10,9,7,14,12,11,15,13,12,17
중간10,9,7,14,12,11,15,13,12,17
중간10,9,7,14,12,11,15,13,12,17
중간10,9,7,14,12,11,15,13,12,17
중간10,9,7,14,12,11,15,13,12,17
중간10,9,7,14,12,11,15,13,12,17
중간10,9,7,14,12,11,15,13,12,17
중간10,9,7,14,12,11,15,13,12,17
중간10,9,7,14,12,11,15,13,12,17
중간10,9,7,14,12,11,15,13,12,17
마지막10,9,7,14,12,11,15,13,12,17

소수가 하나도 걸러지지 않는다!
*/

function solution(nums) {
  let sumArr = [];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sumArr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  sumArr = new Set(sumArr);
  sumArr = [...sumArr];

  console.log("set" + sumArr);
  for (let i = 0; i < sumArr.length; i++) {
    for (let j = 2; j < Math.sqrt(sumArr[i]); j++) {
      if (sumArr[i] % j === 0) {
        result.push(sumArr[i]);
      }
    }
  }

  result = new Set(result);
  result = [...result];
  console.log(result);
  return result.length;
}

/*
테스트 1
입력값 〉	[1, 2, 3, 4]
기댓값 〉	1
실행 결과 〉	실행한 결괏값 4이 기댓값 1과 다릅니다.
출력 〉	set6,7,8,9
[ 6, 7, 8, 9 ]
테스트 2
입력값 〉	[1, 2, 7, 6, 4]
기댓값 〉	4
실행 결과 〉	실행한 결괏값 9이 기댓값 4과 다릅니다.
출력 〉	set10,9,7,14,12,11,15,13,17
[
  10,  9,  7, 14, 12,
  11, 15, 13, 17
]
*/

function solution(nums) {
  let sumArr = [];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sumArr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  sumArr = new Set(sumArr);
  sumArr = [...sumArr];

  console.log("set" + sumArr);
  for (let i = 0; i < sumArr.length; i++) {
    for (let j = 2; j <= Math.sqrt(sumArr[i]); j++) {
      if (sumArr[i] % j === 0) {
        result.push(sumArr[i]);
      }
    }
  }

  // result = new Set(result);
  // result = [...result];
  // console.log(result);
  return result.length;
}

/*
테스트 1
입력값 〉	[1, 2, 3, 4]
기댓값 〉	1
실행 결과 〉	실행한 결괏값 2이 기댓값 1과 다릅니다.
출력 〉	set6,7,8,9
[ 6, 8 ]
테스트 2
입력값 〉	[1, 2, 7, 6, 4]
기댓값 〉	4
실행 결과 〉	테스트를 통과하였습니다.
출력 〉	set10,9,7,14,12,11,15,13,17
[ 10, 14, 12, 15 ]
*/
