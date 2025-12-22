// const 기호 = "■";
//     let 값 = "";
//     for (let i = 0; i< 10; i++)
//     {
//         값 += 기호;
//     }
//     console.log(값);
    





// const 기호1 = "O"
// const 기호2 = "x"


// for(let i=1 ; i< 9 ;i++)
// {   if(i % 2 == 1)
//         {기호1}
//     else {기호2}
//     값 = 기호1+ 기호2
//     console.log(값);
// }

// // 출력 예시 : 
// // O
// // OX 
// // OXO
// // OXOX
// // OXOXO
// // OXOXOX
// // OXOXOXO
// // OXOXOXOX
// // OXOXOXOXO



// const symbol1 = "O"
// const symbol2 = "x"
// let 값 ="";

// for(let i=0 ; i< 9 ;i++)
// {   if( i % 2 !==0){
//     값 = 값+ symbol2
//     }   
//     else{
//     값 = 값+ symbol1
//     console.log(값);
//     }
    
//     console.log(값);
// }

// // 출력 예시 : 
// // O
// // OX 
// // OXO
// // OXOX
// // OXOXO
// // OXOXOX
// // OXOXOXO
// // OXOXOXOX
// // OXOXOXOXO




// const symbol1 = "O"
// const symbol2 = "x"

// for(let i = 0 ; i < 9 ; i++)
// {   
    
//  값 = (i % 2 !== 0) ? 값 + symbol2: 값 + symbol1;
//  console.log(값);
// }


// let 값 = "";
// const symbol1 = "O";
// const symbol2 = "x";
// for( let i = 0; i < 9 ; i++ )
// {
//   // if(i % 2 !== 0){
//   //   값 = 값 + symbol2;
//   // } else {
//   //   값 = 값 + symbol1;
//   // }
//   값 = (i % 2 !== 0) /*조건식 */ ? 값 + symbol2 /* 참 */ : 값 + symbol1; /*거짓 */
//   console.log(값);
// }



// let 값 = "";
// const symbol1 = "O";
// const symbol2 = "x";

// for ( let i= 1; i< 10; i++){
//     if(i % 2 !== 0)
//         값 = 값 + symbol1;
//     else{
//         값 = 값 + symbol2;
//     }
//     console.log(값);
// }


// const symbol1 = "O";
// const symbol2 = "X";
// let 값 = "";

// for( i= 0 ; i < 9 ; i++) {

//     값= (i % 2 !== 0) ? 값 + symbol1 : 값 + symbol2; // 삼항연산자
//     console.log(값)

// }


// const symbol1 = "O";
// const symbol2 = "X"; let 값 = "";

// for( i= 0 ; i < 9 ; i++) {

// 값= (i % 2 !== 0) ? 값 + symbol2 : 값 + symbol1; // 삼항연산자
// console.log(값)

// }


// const symbol1 = "O";
// const symbol2 = "X"; let 값 = "";

// for( i= 1 ; i < 10 ; i++) {

// 값= (i % 2 !== 0) ? 값 + symbol1 : 값 + symbol2; // 삼항연산자
// console.log(값)

// }

const symbol1 = "O";
const symbol2 = "X"; let 값 = "";

for( i= 1 ; i < 10 ; i++) {

값 += (i % 2 !== 0) ? symbol1 : symbol2; // 삼항연산자
console.log(값)

}











