console.log("study04");



var a = 1 ; //변수 선언 후 대입
let b = "일";
const c = true; 

console.log( typeof b ); 

console.log( typeof (a + b + c) );

console.log(`글 : ${a}` + c);


//for문

for(let i = 1; i <10; i = i + 2){
    console.log(i)
}


// if문 알아보기


if(false){             // if ( ) 안에 논리문을 넣어야함.
    console.log("참")
}
else{
    console.log("거짓")
}


if(1 =="1"){            // == : 값을 비교
    console.log("참")
}
else{
    console.log("거짓")
}



var a = 10;
if(a > 0){              // >, >=,  <, <= ,!=, %(나머지), 
    console.log("참")
}
else{
    console.log("거짓")
}



//for문 + if문

for( let i = 0; i < 10; i++){
    if(i % 2 !== 0) { // 홀수이면
        console.log("홀수 : " + i);
    }
}






