let h1 = document.querySelector('h1');

// setTimeout(function(){
//     h1.style.color = "red";
// },1000)
// setTimeout(function(){
//     h1.style.color = "blue";
// },2000)
// setTimeout(function(){
//     h1.style.color = "green";
// },3000)

function changeColor(color, delay , nextColorChange){
   setTimeout(() => {
    h1.style.color = color
    if(nextColorChange)nextColorChange();
   }, delay);
}

//nesting call
changeColor("red",1000,()=>{
    changeColor("Orange",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("blue",1000);
        })
    })
});

//callback nesting -> callback hell












