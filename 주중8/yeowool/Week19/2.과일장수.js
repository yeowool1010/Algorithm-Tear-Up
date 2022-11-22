// [PGS] 과일 장수 / leve1
// 난이도 :  level 1
// 풀이시간 :
// 점수 : 2

/*
문제
과일 장수가 사과 상자를 포장하고 있습니다. 사과는 상태에 따라 1점부터 k점까지의 점수로 분류하며, k점이 최상품의 사과이고 1점이 최하품의 사과입니다. 사과 한 상자의 가격은 다음과 같이 결정됩니다.

한 상자에 사과를 m개씩 담아 포장합니다.
상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다.
과일 장수가 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다.(사과는 상자 단위로만 판매하며, 남는 사과는 버립니다)

예를 들어, k = 3, m = 4, 사과 7개의 점수가 [1, 2, 3, 1, 2, 3, 1]이라면, 다음과 같이 [2, 3, 2, 3]으로 구성된 사과 상자 1개를 만들어 판매하여 최대 이익을 얻을 수 있습니다.

(최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8
사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때, 과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.

제한사항
3 ≤ k ≤ 9
3 ≤ m ≤ 10
7 ≤ score의 길이 ≤ 1,000,000
1 ≤ score[i] ≤ k
이익이 발생하지 않는 경우에는 0을 return 해주세요.
입출력 예
k	m	score	result
3	4	[1, 2, 3, 1, 2, 3, 1]	8
4	3	[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]	33
입출력 예 설명
입출력 예 #1

문제의 예시와 같습니다.
입출력 예 #2

다음과 같이 사과 상자를 포장하여 모두 팔면 최대 이익을 낼 수 있습니다.
사과 상자	가격
[1, 1, 2]	1 x 3 = 3
[2, 2, 2]	2 x 3 = 6
[4, 4, 4]	4 x 3 = 12
[4, 4, 4]	4 x 3 = 12
따라서 (1 x 3 x 1) + (2 x 3 x 1) + (4 x 3 x 2) = 33을 return합니다.
*/

/*
< 의사코드 >
score 베열에서 일단 최저점수 1을 뺀 후에 오름차순으로 정렬되도롤 sort진행
sort한 새로운 배열을 큰 숫자가 있는 오른 쪽 부터 m개만큼 잘라낸다
자른 배열을 사과트럭배열에 상자가 담길 수 있도록 이중배열 사과트럭을 만든다.
초반에 sort한 배열의 인덱스번호 1번자리에 있는 숫자를 최저점수로로 정의해서 담는다
최저점수사과 * m * 사과트럭.length를 계산하여 결과값으로 담아서 출력한다.

1. score에서 1이 없어지도록 replace()로 1이 있는 곳은 ""처리하여 newScore에 담는다. => 1점도 포함해야하니 빼지 않아야 한다!
2. newScore를 오름차순으로 sort하여 재할당 한다.
3. appleBox 배열 선언한다.
4. for문으로 score의 길이만큼 돌면서 사과박스에 m개수에 맞춰서 넣는다.
5. for문으로 사과박스를 돌면서 계산
  새 배열을 반복문으로 돌려서
  j번째 배열의 길이가 m이라면
  anwser에 최저점수(j번째의 마지막 인덱스의 값)*m을 더한다.
*/

function solution(k, m, score) {
  let newScore = score.sort((a, b) => a - b);

  let appleBox = [];
  let result = 0;

  for (let i = 0; i < score.length; i += m) {
    appleBox.push(newScore.slice(i, i + m));
  }
  // console.log(appleBox); // 	[ [ 1, 1, 1, 2 ], [ 2, 3, 3 ] ]
  for (let i = 0; i < appleBox.length; i++) {
    result += appleBox[i][m - 1] * m;
  }
  // console.log(appleBox[i][m-1])
  return result;
}

/*
  래퍼런스 에러..
*/

function solution(k, m, score) {
  let result = 0;
  let newScore = score.sort((a, b) => a - b);

  let appleBox = [];

  for (let i = 0; i < score.length; i += m) {
    appleBox.push(newScore.slice(i, i + m));
  }
  // console.log(appleBox); // 	[ [ 1, 1, 1, 2 ], [ 2, 3, 3 ] ]
  for (let i = 0; i < appleBox.length; i++) {
    result += appleBox[i][m - 1] * m;
  }
  // console.log(appleBox[i][m-1])
  return result;
}

/*
  래퍼런스 에러..
*/

function solution(k, m, score) {
  let result = 0;
  let newScore = score.sort((a, b) => b - a); //1.
  let appleBox = [];
  for (let i = 0; i < score.length; i += m) {
    appleBox.push(newScore.slice(i, i + m)); //2.
  }
  for (let j = 0; j < appleBox.length; j++) {
    // 3.
    if (appleBox[j].length === m) {
      //4.
      result += appleBox[j][m - 1] * m; //5.
    }
  }
  return result;
}

/*
테스트 1 〉	통과 (0.18ms, 33.4MB)
테스트 2 〉	통과 (0.08ms, 33.5MB)
테스트 3 〉	통과 (0.16ms, 33.5MB)
테스트 4 〉	통과 (0.07ms, 33.5MB)
테스트 5 〉	통과 (0.07ms, 33.6MB)
테스트 6 〉	통과 (18.73ms, 41.2MB)
테스트 7 〉	통과 (18.47ms, 38.5MB)
테스트 8 〉	통과 (3.01ms, 36MB)
테스트 9 〉	통과 (19.31ms, 39.7MB)
테스트 10 〉	통과 (21.06ms, 39.6MB)
테스트 11 〉	통과 (224.07ms, 109MB)
테스트 12 〉	통과 (241.83ms, 107MB)
테스트 13 〉	통과 (215.05ms, 108MB)
테스트 14 〉	통과 (210.85ms, 106MB)
테스트 15 〉	통과 (211.46ms, 108MB)
테스트 16 〉	통과 (0.06ms, 33.4MB)
테스트 17 〉	통과 (0.06ms, 33.4MB)
테스트 18 〉	통과 (0.17ms, 33.5MB)
테스트 19 〉	통과 (0.16ms, 33.4MB)
테스트 20 〉	통과 (0.15ms, 33.4MB)
테스트 21 〉	통과 (0.07ms, 33.5MB)
테스트 22 〉	통과 (0.07ms, 33.6MB)
테스트 23 〉	통과 (0.07ms, 33.6MB)
테스트 24 〉	통과 (0.07ms, 33.4MB)
*/
