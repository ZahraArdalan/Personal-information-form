const username = document.querySelector(".Username");
const email = document.querySelector(".Email");
const password = document.querySelector(".Password");
const confirm = document.querySelector(".Confirm-password");

const login = document.querySelector(".btn");

login.addEventListener("click", validation);

function validation() {
  // validate username input
  if (username.value.length < 5) {
    alert("Username must have at least 5 characters.");
    return false;
  }

  // validate email input
  let userEmail = email.value;
  let pattern = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
  let regexResult = pattern.test(userEmail);
  console.log(regexResult);
  if (!regexResult) {
    alert("The email entered is not valid.");
    return false;
  }

  // validate password input
  if (password.value.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
  }

  if (password != passConfirm) {
    alert("The passwords entered do not match.");
    return false;
  }

  // success register
  alert("Your registration was successful :)");
  return true;
  validation.preventDefault();
}
