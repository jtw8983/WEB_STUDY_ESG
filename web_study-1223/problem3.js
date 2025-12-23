/** 3) 지뢰 찾기 (안전 지대 확인) O은 안전한 곳, X는 지뢰가 매설된 곳, 지뢰의 위치 좌표[행,열]를 출력하세요
 * 출력값 :
 * 지뢰가 발견되었습니다. 
 * 위치 > [0,1], [2,0], [2,2]
 ****************/
  const LandMineMap = [
    ['O','X','O'],
    ['O','O','O'],
    ['X','O','X']
  ];

  let mine = "";
  for (let i = 0; i < LandMineMap.length; i++){
    for(let j = 0; j < LandMineMap[i].length; j++){
        if(LandMineMap[i][j] === 'X') continue;
            mine += `[${i},${j}], `;
    }
  }

  console.log(`지뢰가 발견되었습니다! 위치: ${mine.substring(0, mine.length-2)}`)