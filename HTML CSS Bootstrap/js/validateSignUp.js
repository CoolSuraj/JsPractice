

function validateSignUp() {
    let error=0; //to count errors
 
    //To get Element Instances
    let username = document.getElementById('Emailvalid');
    let password = document.getElementById('passValid');
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let phone = document.getElementById('ph');

    //to show the Error message
    let reqErrorfname = document.getElementById('requiredfname');
    let reqErrorlname = document.getElementById('requiredlname');
    let reqErrorphone = document.getElementById('requiredphno');
    let reqErrorUser = document.getElementById('requireduser');
    let reqErrorpass = document.getElementById('requiredpass');
    
    //Regex filters
    let numbers = /^[0-9]+$/;
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    
    //actual logic for validation
    if(fname.value.indexOf(' ') >= 0||fname.value===''){
        //alert('Please enter valid firstname do not add space');
        reqErrorfname.innerHTML="Enter first name without spaces";
        fname.focus();
        fname.style.border = '1px solid red';
        error++;
    }
    if(lname.value.indexOf(' ') >= 0 || lname.value===''){
        //alert('Please enter valid Lastname do not add space');
        reqErrorlname.innerHTML="Enter Last name without spaces";
        lname.focus();
        lname.style.border = '1px solid red';
        //return;
        error++;
    }
    if(phone.value.length < 10 || !numbers.test(phone.value)){
        //alert('Please enter 10 digit phone number');
        reqErrorphone.innerHTML="Please enter 10 digit phone number";
        phone.focus();
        phone.style.border = '1px solid red';
     //   return;
    error++;
    }
    if(!filter.test(username.value)  || username.value === ''){
    // Window.alert('Please enter valid email');
    // document.getElementById('Emailvalid').innerText = "Please add valid mail address";
    reqErrorUser.innerHTML="Please enter valid email";
    username.focus();
    username.style.border = '1px solid red';
    //   return;
    error++;
    }
    
    if(passValid.value.length < 5 || passValid.value === '') {
    //alert('Please enter valid password');
    reqErrorpass.innerHTML="Please enter min 5 characters pass";
    password.focus();
    password.style.border = '1px solid red';
    //return;
    error++;
    }
    if(error === 0){
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
}    //as I need to check every text box so I kept only if and not else if
}

function redirects(){
    location.href="signin.html";
}
