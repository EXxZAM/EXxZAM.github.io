const signupBtn = document.getElementById("signUpBtn");
const loginBtn = document.getElementById("loginBtn");

const signinConfirm = document.getElementById("signinConfirm");
const inputsDiv = document.getElementById("inputs");
var login = true;
var signup = false;
const messageFailed = ` <center> <div id="messageFailed" class="message" style="margin-top: 30px; color: white ; background-color: red; border:none; border-radius: 5px; width: 80%  ">Failed</div> </center>`;
const messageSuccess =
  ' <center> <div id="messageSuccess" class="message" style="margin-top: 30px; color: white ; background-color: green; border:none; border-radius: 5px; width: 80%  ">Successful</div> </center>';
const loginForm = `<input type="text" id="username" name="username" placeholder="Username" class="userInput" />
<input type="password" id="password" name="password" placeholder="Password" class="passInput" />
<br>
<div class="accInfo">
    <input type="checkbox" id="remember" name="remember" class="rememberMe">
    <label for="remember" class="rememberLabel">Remember Me</label>
    <a href="" class="forgetPass">Forget Password?</a>
</div>
<div class="lastPart">
    <button class="signinBtn normalSign" id='signinConfirm' onClick="logIn()">SIGN IN</button>
  
    

    <a style="text-decoration: none;" href=""><p class="lastLine" > Continue without siging in</p></a>
</div>`;
const signupForm = ` <input type="text" id="username" name="username" placeholder="Username" class="userInput" />
<input type="email" id="email" name="email" placeholder="Email" class="passInput" />
<input type="password" id="password" name="password2" placeholder="Password" class="userInput" />

<br>
<div class="accInfo">
    <input type="checkbox" id="remember" name="remember" class="rememberMe">
    <label for="remember" class="rememberLabel">Remember Me</label>
    
</div>
<div class="lastPart">
    <button class="signinBtn normalSign" id="signupConfirm"  onclick="signUp() ">SIGN UP</button>
  

    <a style="text-decoration: none;" href=""><p class="lastLine" > Continue without siging in</p></a>
</div>`;

signupBtn.addEventListener("click", () => {
  inputsDiv.innerHTML = signupForm;
  loginBtn.classList.remove("active");
  signupBtn.classList.add("active");
  signup = true;
  login = false;
});
loginBtn.addEventListener("click", () => {
  inputsDiv.innerHTML = loginForm;
  signupBtn.classList.remove("active");
  loginBtn.classList.add("active");
  login = true;
  signup = false;
});

function signUp() {
  if (signup == true) {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const emailInput = document.getElementById("email");
    const rememberInput = document.getElementById("remember");

    if (usernameInput.value == "" || passwordInput.value == "" || emailInput.value == "") {
        if (inputsDiv.innerHTML.indexOf(messageFailed) >= 0) {
            console.log("pass");
          } else if (inputsDiv.innerHTML.indexOf(messageSuccess) >= 0) {
            const successObj = document.getElementById("messageSuccess");
            successObj.remove();
            inputsDiv.innerHTML += messageFailed;
          } else {
            inputsDiv.innerHTML += messageFailed;
          }
    } else if (rememberInput.checked == true) {
        if (inputsDiv.innerHTML.indexOf(messageSuccess) >= 0) {
            console.log("pass");
          } else if (inputsDiv.innerHTML.indexOf(messageFailed) >= 0) {
            const failObj = document.getElementById("messageFailed");
            failObj.remove();
            inputsDiv.innerHTML += messageSuccess;
          } else {
            inputsDiv.innerHTML += messageSuccess;
          }
          usernameInput.value = "";
          passwordInput.value = "";
          emailInput.value = "";
          rememberInput.checked = false;
    } else {
        if (inputsDiv.innerHTML.indexOf(messageSuccess) >= 0) {
            console.log("pass");
          } else if (inputsDiv.innerHTML.indexOf(messageFailed) >= 0) {
            const failObj = document.getElementById("messageFailed");
            failObj.remove();
            inputsDiv.innerHTML += messageSuccess;
          } else {
            inputsDiv.innerHTML += messageSuccess;
          }
    }




  } else {
    console.log("idk what the fuck happend");
  }
}

function logIn() {
  if (login == true) {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberInput = document.getElementById("remember");

    // alert(`entered value ${usernameInput} ${passwordInput} ${rememberInput}`)

    if (usernameInput.value == "" || passwordInput.value == "") {
      if (inputsDiv.innerHTML.indexOf(messageFailed) >= 0) {
        console.log("pass");
      } else if (inputsDiv.innerHTML.indexOf(messageSuccess) >= 0) {
        const successObj = document.getElementById("messageSuccess");
        successObj.remove();
        inputsDiv.innerHTML += messageFailed;
      } else {
        inputsDiv.innerHTML += messageFailed;
      }
    } else if (rememberInput.checked == true) {
      if (inputsDiv.innerHTML.indexOf(messageSuccess) >= 0) {
        console.log("pass");
      } else if (inputsDiv.innerHTML.indexOf(messageFailed) >= 0) {
        const failObj = document.getElementById("messageFailed");
        failObj.remove();
        inputsDiv.innerHTML += messageSuccess;
      } else {
        inputsDiv.innerHTML += messageSuccess;
      }
      usernameInput.value = "";
      passwordInput.value = "";
      rememberInput.checked = false;
    } else {
      if (inputsDiv.innerHTML.indexOf(messageSuccess) >= 0) {
        console.log("pass");
      } else if (inputsDiv.innerHTML.indexOf(messageFailed) >= 0) {
        const failObj = document.getElementById("messageFailed");
        failObj.remove();
        inputsDiv.innerHTML += messageSuccess;
      } else {
        inputsDiv.innerHTML += messageSuccess;
      }
      inputsDiv.innerHTML += usernameInput.value = "";
      passwordInput.value = "";
      rememberInput.checked = false;
    }
  } else {
    console.log("idk what the fuck happend");
  }
}
