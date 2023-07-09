const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const matricNum = document.getElementById("matricNum");
const department = document.getElementById("department");
const faculty = document.getElementById("faculty");
const dateOfBirth = document.getElementById("dob");
const sex = document.getElementById("sex");
const password = document.getElementById("password");
const passwordConf = document.getElementById("passwordConf");

//Show Error Message
function showErr(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-item error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show Success
function showValid(input){
    formControl = input.parentElement;
    formControl.className = "form-item success";
}

// function isValidEmail(email){
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[\]\\.,;:\s@\"]+);
//     return re.test(email)
// }

function ValidateEmail(email) {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    //Validate name
    if (username.value === ""){
        showErr(username, "Username is required")
    } else {
        showValid(username)
    }

    //Validate Email
    if (email.value === ""){
        showErr(email, "Email is required")
    } else if (!ValidateEmail(email.value)){
        showErr(email, "Email address is invalid")
    }else {
        showValid(email)
    }

    //Validate Phone number
    if (phone.value === ""){
        showErr(phone, "Phone Number is required")
    } else {
        showValid(phone)
    }

    if (matricNum.value === ""){
        showErr(matricNum, "Matric number is required")
    } else {
        showValid(matricNum)
    }

    if (faculty.value === ""){
        showErr(faculty, "Faculty is required")
    } else {
        showValid(faculty)
    }

    if (password.value === ""){
        showErr(password, "Password is required")
    } else {
        showValid(password)
    }

    if (passwordConf.value === ""){
        showErr(passwordConf, "Please confirm password")
    } else {
        showValid(passwordConf)
    }
})