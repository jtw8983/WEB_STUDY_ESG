function a(){
    console.log("a");
}
// function fn(){}
// // callback(또는 익명) 함수 (){}

// $(function(){
//     //드디어 JQuery 영역!!
//     console.log("study02.js");
//     function b(){
//         console.log("b()");
//     }
// });

// $(fn);

// const fn2 = () => {}
// // arrow 함수


// $(() => {
//     //드디어 JQuery 영역!!
//     console.log("study02.js");
//     function b(){
//         console.log("b()");
//     }
// });

// const fn2 = () => {}(arrow 함수)
// const만 함수 사용 시 arrow 함수
// function () {} (익명함수)
// 두 개 다 동일한 함수





// JQUERY 사용 -> study01과 동일하게 결과물

$(document).ready(()=> {
    //드디어 JQUERY 영역!!


   function view1(){
    let page =" "
    for(let i= 0 ;i < 25; i++){
     page += `<div class="bg${i === 6 ? "3": i % 2 === 0 ? "2" : "1"}"></div>`
    }

    $("section").html(page); // Jquery함수 사용해서 html문서에서 모든 <section> 태그를 선택한다.
                             //-> <section></section>
                             // document.getElementsByTagName("section")[0].innerHTML = page; javascript로 작성한 부분과 동일
    state = true;
   } 
 

   var state = false;
   $("button").off().on("click",function(e){ // 만약 $("button").click(function(e))이 위에 적혀져있는 데 중복으로 실행 시 click할 떄 중첩되어 나오는데 그러면
                                             // off()와 on()의 함수를 적용하여 초기화 시킬 수 있게 해준다. 
    console.log(e);
    const index = $("button").index(e.target);
    if(index === 0){
      view1();
    }
    else if(index === 1){
        $("section").empty();
        state = false;
    }
    else if(index === 2)
        if(!state) 
            view1();
        else {
        $("section").empty();
            state = false;
        }
    });
});



