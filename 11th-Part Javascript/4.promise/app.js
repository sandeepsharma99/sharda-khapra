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



    //   Promise 

// function savetoDb(data, success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1)
//     if(internetSpeed>5){
//         success();
//     }else{
//         failure();
//     }
// }

// savetoDb("sandeep sharma", ()=>{
//     console.log("data saved");
//         savetoDb("web Developer",()=>{
//             console.log("Success2");
//         },()=>{
//             console.log("Failure2");
//         });
// },()=>{
//     console.log("data not saved");
// });

// function savetoDb(data){
//     return new Promise((success,failure)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1
//         if(internetSpeed>5){
//             success(" success data saved");
//         }else{
//             failure("Failure weak connection");
//         }
//     });
// }

// savetoDb('sandeep learnig promise')
//     .then(()=>{
//         console.log("success");
//         console.log(request);
        
//     })
//     .catch(()=>{
//         console.log("failure");
//         console.log(request);
//     })

//    // Promise Chaining

// savetoDb("sandeep sharma")
// .then((result)=>{
//     console.log("sucess data is save");
//     return savetoDb("hello world")  
// })
// .then((result)=>{
//     console.log("Sucsess data 2 is saved");
// })
// .catch((error)=>{
//     console.log("failure data not saved");
// })

   



















