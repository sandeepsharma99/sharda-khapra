let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{
    let fact = await getData();
    // console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
})


let url = "https://catfact.ninja/fact"

async function getData(){
    try{
        let res = await axios.get(url);
        return res.data.fact;

    }catch(e){
        console.log("error - ", e);
        return "no Data found"
    }
}