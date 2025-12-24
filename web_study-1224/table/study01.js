console.log("스터디01");


function load() {
    var html= "";

    //반복문 실행
    for(let i= 0 ;i < 25; i++){
    //    <따로 따로 사용- '변수 지정'> 
    //     let css1 = "1"
    //     if(i%2===0) css1 ="2"
    //     if(i === 6) css1 ="3"
    //     html += `<div class="bg${css1}"></div>`;>
    //    <삼항 연산자 사용>
        html += `<div class="bg${i === 6 ? "3": i % 2 === 0 ? "2" : "1"}"></div>`
    }
    
    /* 사용이유 */
    document.getElementsByTagName("section")[0].innerHTML = html;
    /* 1. Javascript에서 만든 HTML 문자열을 실제 화면(홈페이지)에 출력하기 위해서 사용*/
    /* 2. 하나씩 풀어보면 */
    /* 3. document => 현재 웹페이지 전체(HTML문서)를 의미 */
    /* 4. getElementsbyTagName("section") => 페이지에 있는 모든 <section> 태그를 '배열 형태'로 가져옴
        -> 여러 개의 <section>을 담은 묶음(배열 같은 것)을 반환
    /* 5. [0] => 그 중 첫 번쨰 <section> 요소를 선택함.
         -> <section></section>
         -> <section></section>
         -> <section></section>
         이렇게 묶음이 있었다면 [0]이 없다면 오류 발생하는 것이 
         어떤 section으로 묶였는지 알 수 없음
    /* 6. .innerHTML = html => 선택한 <section> 안의 내용을 변수 html에 저장된 문자열로 통째로 바꿉니다.*/


    state = true;
    
}

function clean(){
    document.getElementsByTagName("section")[0].innerHTML = "";
    state = false;
} 

var state = false;
function btnToggle(){
    if(!state){
        load();
    } else{
        clean();
    }
    // state = !state;   -> 토글 역할(true이면 false, false이면 true)
}

//전역변수로 인해서 state= !state;를 없애고 btnToggle() 실행시
// load() 함수 호출 후 state가 true여야 그리기 작동이 되고
// clean() 함후 호출 후 state가 false여야 비우기 작동이 되는 식으로 해야
// 겹치지 않고 동작이 작동이 잘됨.

    