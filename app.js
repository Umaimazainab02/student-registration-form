let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function () {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let course = document.querySelector("#course1").value;
    if (name === "" || email === "" || password === ""){
        console.log("fill all the field");
    return;
    }
    console.log ("name:",name);
    console.log("password",password);
    console.log("email",email,);
    console.log("course",course,);
    alert("registration successfull")
})