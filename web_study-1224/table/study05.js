$(document).ready(()=>{


    function view5(){
        let page = '';
        for(let i = 0; i < 25; i++){
            let css5 = "1"
            if (i % 2 === 0) css5 ="2"
            if (i === 6) css5 = "3"
            page += `<div class="bg${css5}"></div>` 
        }

        $("section").html(page);
        state = true;

    }

    var state = false;
    $("button").click(function(e){
        console.log(e.target);
        const index = $("button").index(e.target);
        if(index === 0){
            view5();
        }
        else if(index === 1){
            $("section").empty();
            state = false;
        }
        else if(index === 2){
            if(!state)
                view5();
            else{
                $("section").empty();
                state = false;
            }
        }
    });
});