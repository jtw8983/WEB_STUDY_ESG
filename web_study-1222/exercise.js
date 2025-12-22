// 2025.12.22일 전체 출석 체크

let attend = [
    [1, 0, 1, 1, 0 ,0],
    [1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0, 1]
]; 

let totalattend = 0;

for(let i = 0 ; i < attend.length; i++){
    for(let j = 0 ; j < attend[i].length; j++){
        if(attend[i][j] === 1){
        totalattend++;
        }
    }
}
console.log(`전체 출석 수 :`, totalattend);