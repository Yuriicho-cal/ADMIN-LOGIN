function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if(username==="Yurricho" && password === "090201367"){
        message.style.color = "green" ;
        message.textContent = "Login successfull!";
    }
    else{
        message.style.color = "red" ;
        message.textContent = "invalid username or password!";
    }

}