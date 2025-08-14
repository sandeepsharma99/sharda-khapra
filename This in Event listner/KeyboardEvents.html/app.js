let inp = document.querySelector("input");

inp.addEventListener("keyup", function(event){
    console.log("code = ", event.code);
    
    if(event.code == "ArrowUp"){
        console.log("go up");   
    }else if(event.code == "ArrowDown"){
        console.log("go down");
    }else if(event.code == "ArrowLeft"){
        console.log("go left");
    }else if(event.code == "ArrowRight"){
        console.log("go right");
    }
})