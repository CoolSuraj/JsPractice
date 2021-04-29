

function validateSignUp() {
    let error=0;
    let username = document.getElementById('Emailvalid');
    let password = document.getElementById('passValid');
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let phone = document.getElementById('ph');
    let numbers = /^[0-9]+$/;
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if(fname.value.indexOf(' ') >= 0){
        alert('Please enter valid firstname do not add space');
        fname.focus();
        fname.style.border = '1px solid red';
    }
    else if(lname.value.indexOf(' ') >= 0){
        alert('Please enter valid Lastname do not add space');
        lname.focus();
        lname.style.border = '1px solid red';
    }
    else if(phone.value.length < 10 || !numbers.test(phone.value)){
        alert('Please enter 10 digit phone number');
        phone.focus();
        phone.style.border = '1px solid red';
    }
    else if(!filter.test(username.value)  || username.value === ''){
    // Window.alert('Please enter valid email');
    // document.getElementById('Emailvalid').innerText = "Please add valid mail address";
    alert('Please enter valid email');
    username.focus();
    username.style.border = '1px solid red';
    return;
    }
    
    else if(passValid.value.length < 5 ){
    alert('Please enter valid password');
    password.focus();
    password.style.border = '1px solid red';
    }
    else{
    username.style.border = '1px solid';
    password.style.border = '1px solid';
    fname.style.border = '1px solid ';
    lname.style.border = '1px solid ';
    phone.style.border = '1px solid ';
    let signup = document.getElementById('signupbtn');
    if(confirm('The info you entered will be saved press cancel to edit')){
        signup.addEventListener("click",redirects);
    }
    else{
        fname.value='';
        lname.value='';
        phone.value='';
        username.value='';
        password.value='';
    }
}
}

function redirects(){
    location.href="signin.html";
}