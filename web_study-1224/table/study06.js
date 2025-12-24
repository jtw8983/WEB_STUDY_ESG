$(document).ready(() => {

    function view6(){
        let page= ""
        for(i= 0; i<25;i++){
            let css6 = "1"
            if(i%2 === 0)
                css6 = "2"
            if(i === 6)
                css6 = "3"
        page += `<div class="bg${css6}"></div>`

        }
        
        $("section").html(page);
        state = true;
    
    }

    var state = false;
    $("button").click(function(e){
        console.log(e) 
        const index = $("button").index(e.target);
        if(index === 0){
            view6();
        }
        if(index === 1){
            $("section").empty();
            state = false;
        }
        if(index === 2){
            if(!state)
                view6();
            else{
                $("section").empty();
                state = false;
            }
        }
    } 
});