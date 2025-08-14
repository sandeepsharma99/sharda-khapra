h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolved("color changed!")
        },delay)
    })
}




function getNum(){
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let num = Math.floor(Math.random()*10)+1;
        console.log(num);
        resolve();
        },1000)
    })
}
async function demo(){
    await getNum();
    await getNum();
    await getNum();
}
