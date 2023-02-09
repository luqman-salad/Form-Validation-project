// selecting all inputs

const userName = document.querySelector("#userName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const form = document.querySelector("#form");

const showError = (input,message) =>{
    let parentElement = input.parentElement;
    parentElement.classList = "formControl error";
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];

    errorIcon.style.visibility = "visible";
    successIcon.style.visibility = "hidden";
    small.innerText = message;

}

const showSuccess = (input) =>{
    let parentElement = input.parentElement;
    parentElement.classList = "formControl success";
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];

    errorIcon.style.visibility = "hidden";
    successIcon.style.visibility = "visible";
    

}


const checkEmpty = (elements) =>{
    elements.forEach(element => {
        if(element.value === ""){
            showError(element,'Input required')
        }
        else{
            showSuccess(element);
        }
    });
}

const checkPassword = (input,min,max) => {
    if(input.value.length < min){
        showError(input,`Password at least ${min} character`)
    }else if(input.value.length > max){
        showError(input,`password maximun ${max} characters`)
    }
}


const checkEmail = (email) => {
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(reg.test(email.value)){
        showSuccess(email);
    }else{
        showError(email);
    }
}


form.addEventListener("submit", (event)=> {
    event.preventDefault();

    checkEmpty([userName,email,password,confirmPassword]);
    checkEmail(email);
    checkPassword(password,6,20)
    checkPassword(confirmPassword,6,20)


})