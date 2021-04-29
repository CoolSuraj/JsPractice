

function validate() {
    let error=0;
    let username = document.getElementById('Emailvalid');
    let password = document.getElementById('passValid');
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if(!filter.test(username.value)  || username.value === ''){
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
    let loginbtn = document.getElementById('loginbtn');
    loginbtn.addEventListener("click",redirects);
    }
}

function redirects(){
    location.href="addDetails.html";
}