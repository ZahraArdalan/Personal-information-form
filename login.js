const username = document.querySelector(".Username");
const email = document.querySelector(".Email");
const password = document.querySelector(".Password");
const confirm = document.querySelector(".Confirm-password");

const login = document.querySelector(".btn");

login.addEventListener("click", validation);

function validation () {


    
      // validate username input
      if (username.value.length < 5) {
        alert("Username must have at least 5 characters.");
        return false;
      }
    
      // validate email input
      let userEmail = email.value;
      let pattern = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
      let regexResult = pattern.test(userEmail);
      if (!regexResult) {
        alert("ایمیل وارد شده معتبر نمی باشد");
        return false;
      }
    
      // validate password input
      if (password.value.length < 8) {
        alert("پسورد حداقل باید 8 کاراکتر داشته باشد");
        return false;
      }
    
      if (password != passConfirm) {
        alert("پسورد های وارد شده مطابقت ندارند");
        return false;
      }
    
      // success register
      alert("ثبت نام شما با موفقیت انجام شد :)");
      return true;
    }
}
