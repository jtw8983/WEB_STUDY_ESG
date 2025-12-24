
function load(){
    var page = "";

for (let i= 0 ; i < 25; i++){
    let css1 = "1"
    if (i % 2 === 0) css1 ="2"
    if (i === 6) css1 = "3"
    page += `<div class="bg${css1}"></div>`

    document.getElementsByTagName("section")[0].innerHTML = page;
    state = true;
}
}

function clean(){
    document.getElementsByTagName("section")[0].innerHTML = "";
    state = false;
}

var state = false;
function btnToggle(){
    if(!state){
        load();
    }
    else{
        clean();
    }
}







