// 응답에 사용한 정보 유형!(3가지 유형)
const contentList = [
  { 'Content-Type': 'text/plain; charset=utf-8' },
  { 'Content-Type': 'text/html; charset=utf-8' },
  { 'Content-Type': 'application/json; charset=utf-8' }
]; 

// page1은 글자 리턴
function page1() {
  return "html 입니다.";
}

//page2는 파라미터까지 가려고 했고 getParam1으로 가서 돌림
function page2(req) {
  return getParams1(req);
}

//page3는 파라미터까지 가려고 했고 getParam2으로 가서 돌림.
// 다만 데이터 형식이 JSON이기 떄문에 문자가 아닌 객체(Object) 형식으로
function page3(req) {
  return getParams2(req);
}

function getUrl(req) {
  let url = req.url;
  const index = req.url.lastIndexOf("?");
  if(index > 0) url = req.url.substring(0, index);
  return url;
}

function getParams1(req) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let html = ""; 
  for(const [key, value] of url.searchParams){
    html += `<h2>${value}</h2>`; //하나는 태그형식으로 받음
  }
  return html;
}

function getParams2(req) {
  const index = req.url.lastIndexOf("?");
  const obj = {};
  if(index > 0) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log(url?.searchParams);
    for(const [key, value] of url.searchParams){
      obj[key] = value;
    }
    return JSON.stringify(obj);
  }
  return "{}";
}

export default function Main(req, res) {
  
  let url = getUrl(req);
  
  let html = "";
  let contents = {};
  if(url === "/a") {
    html = page2(req);
    contents = contentList[1];
  } else if(url === "/b") {
    html = page3(req);
    contents = contentList[2];
  } else {
    html = page1();
    contents = contentList[0]; //
  }
  res.writeHead(200, contents); // 응답으로 보내면 데이터 형식으로 바뀌어서 출력됨.
  res.end(html);
}
