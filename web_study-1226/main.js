// let cnt = 0;

// function event1(){
//     console.log("호출");
//     cnt = cnt + 1;
//     return cnt;
// }


export function text(){
    let html = "";


    html += "<h1>html 입니다.</h1>"
    html += "<p>Node Service...</p>"

    return html;
}

export function controller(req){
    
    let html = "";
    let url = req.url;
    const index = req.url.lastIndexOf("?");
    if(index >0);  url = req.url.substring(0, index);  // 예외 처리 완료
    if(url === "/a"){
    
        const parameters = new URL(req.url,'http://$req.headers.host);')
        //console.log(parameters.searchParams.get("name"));
        //console.log(parameters.searchParams.get("age"));
       
        for (const [key, value] of parameters.searchParams){
            console.log(`${key} : ${value}`);
            html += `<h2>${value}</h2>`;
       }
       // html = "<h2>A 주소 화면 입니다.</h2>"
    }
    else if(url === "/b"){
        html = "<h2>B 주소 화면 입니다.</h2>"
    }
    else {
    html = text();
    }
    return html;
}
// 이런 식으로 쓰면 되는 거구나라고 알고 있으면 됨........

//const a = true;
//const b = false;

//module.exports = { a, b };
// export
//module.exports = { count: 1, hello() {} };
//exports.count = 1;
