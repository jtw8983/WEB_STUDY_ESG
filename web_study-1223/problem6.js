/** 6) 다음 배열의 각 행 별 합계를 구하시오.
 * 출력값 :
 * 26
 * 16 
 * 19
 ****************/
const arr = [
  [9,4,6,7],
  [1,3,7,5],
  [5,8,2,4],
];

const arrSum =[];

for(let i=0; i<arr.length; i++){
    let sum = 0;    // 여기에다가 let sum= 0 을 두어야 행이 바뀔 때마다 sum을 0으로 초기화 가능, 만약 전역변수로 선언 시 전체 합이 됨.
    for(let j=0; j<arr[i].length; j++){
        sum += arr[i][j];
    }
    arrSum.push(sum);
}
console.log(arrSum);
