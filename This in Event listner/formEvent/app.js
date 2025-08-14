let form = document.querySelector("form");

form.addEventListener("submit",function(event){

    event.preventDefault();

    console.dir(form);

    let user = this.element[0]; // this.element[0] = form.element[0] both means same this is refering to form
    let pass = this.element[1];

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");

    // console.log(user.value);
    // console.log(pass.value);
})

