// 문제5)for문 이용하여 출력하세요, 단 ***continue*** 사용하세요.

const start = 1;
const end1 = 10;
const end2= 20;
const str = "javascript";
const keyword = "a"


// 5-1) 1부터 10까지 숫자 중 짝수만 출력하세요.


// for ( let i = start; i <= end1 ; i++ ){
//     if(i % 2 !== 0)
//         continue;
//     else {
//         console.log(i);
//     }
// }



// for ( let i = 1; i <= 10 ; i++ ){
//     if(i % 2 !== 0)
//         continue;
//     else {
//         console.log(i);
//     }
// }


// 5-2) 1부터 20까지 숫자 중 3의 배수를 출력에 제외하세요.

// for (let i= start; i<= end2; i++){
//     if(i % 3 == 0 )
//         continue;
//     else{
//         console.log(i);
//     }
// }

// 5-3) 문자열 "javascript"의 각 문자를 한 줄씩 출력 중 'a'만 제외하세요.

// for (let ch of str){
//     if (ch === 'a'){
//         continue;   
//     }
//     console.log(ch);
// }

for (const keyword of str){
    if(keyword === 'a')
        continue;
    console.log(keyword);
}


