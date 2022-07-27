const form = document.querySelector(".form");
const email = document.querySelector("#email-input"), username = document.querySelector("#username-input"), password = document.querySelector("#password-input"), confirmPassword = document.querySelector("#confirm-password-input"), termsAndConditions = document.querySelector("#terms-checkbox");
const errorContainer  = document.querySelector(".error-message-container");

form.addEventListener("submit", (e)=>{
    errorContainer.innerHTML = "";
    email.style.borderBottom = "1px solid rgb(0,0,0,0.4)";
    username.style.borderBottom = "1px solid rgb(0,0,0,0.4)";
    password.style.borderBottom = "1px solid rgb(0,0,0,0.4)";
    confirmPassword.style.borderBottom = "1px solid rgb(0,0,0,0.4)";

    //VALIDATING
    //check email empty or not
    if(email.value == ""){
        let em = document.createElement("p");
        em.innerHTML = "email can't be empty!";
        errorContainer.appendChild(em);
        email.style.borderBottom = "1px solid rgb(255,0,0,0.6)";
        e.preventDefault();
    }   
    
    //check username length 
    if(username.value == ""){
        let em = document.createElement("p");
        em.innerHTML = "username can't be empty!";
        errorContainer.appendChild(em);
        username.style.borderBottom = "1px solid rgb(255,0,0,0.6)";
        e.preventDefault();
    }else if(username.value.length <5){
        let em = document.createElement("p");
        em.innerHTML = "username can't be shorter than 5 letters!";
        errorContainer.appendChild(em);
        username.style.borderBottom = "1px solid rgb(255,0,0,0.6)";
        e.preventDefault();
    }

    //check password length
    if(password.value.length < 10){
        let em = document.createElement("p");
        em.innerHTML = "password must atleast have 10 letters!";
        errorContainer.appendChild(em);
        password.style.borderBottom = "1px solid rgb(255,0,0,0.6)";
        e.preventDefault();
    }
    
    //check password letter contain alphanumeric
    for(let i = 0; i<password.value.length; i++){
        let temp = password.value.charCodeAt(i);
        if(!(temp>=48 && temp<=57) && !(temp>=65 && temp<=90) && !(temp>=97 && temp<=122)){
            let em = document.createElement("p");
            em.innerHTML = "password can only contain alphanumeric letters!";
            errorContainer.appendChild(em);
            password.style.borderBottom = "1px solid rgb(255,0,0,0.6)";
            e.preventDefault();
            break;
        }
    }

    //check if confirm password is the same as password
    if(password.value!=confirmPassword.value){
        let em = document.createElement("p");
        em.innerHTML = "password inserted are not the same!";
        errorContainer.appendChild(em);
        password.style.borderBottom = "1px solid rgb(255,0,0,0.6)";
        confirmPassword.style.borderBottom = "1px solid rgb(255,0,0,0.6)";
        e.preventDefault();
    }

    //check if terms and conditions has been checked
    if(!termsAndConditions.checked){
        let em = document.createElement("p");
        em.innerHTML = "you must agree to the terms and conditions!";
        errorContainer.appendChild(em);
        termsAndConditions.style.border = "1px solid rgb(255,0,0,0.6)";
        e.preventDefault();
    }
});