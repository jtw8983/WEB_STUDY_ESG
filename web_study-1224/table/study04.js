$(document).ready(()=> {

function view4(){
    let page ="";
    for (let i = 0; i < 25; i++){
        let css1 = "1"
        if (i % 2 === 0) css1 ="2"
        if (i === 6) css1 = "3"
        page += `<div class="bg${css1}"></div>`
    }

    $("section").html(page);
    state = true;
    
    }
    

    var state = false;
    $("button").off().on("click",function(e){
        console.log(e.target);
        const index = $("button").index(e.target);
        if(index === 0){
            view4();
        }
        else if(index === 1){
            $("section").empty();
            state = false;
        }
        else if(index === 2){
            if(!state)
                view4();
            else{
                $("section").empty();
                state = false;
            }
        }     
    });
});
