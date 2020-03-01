var passwordArea = document.querySelector("#password-area");

function generatePassword() {
    var lengthPrompt = prompt("How long would you like your password to be?")
    var specialCharPrompt = prompt("Woudl you like to use special characters?");
    var length = lengthPrompt;
    
    if(length >=8 && length <= 128 && specialCharPrompt === "yes") {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    passwordArea.textContent = retVal;
    } else if (length >=8 && length <= 128 && specialCharPrompt === "no") {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    passwordArea.textContent = retVal;
    } else {
        alert("Your password does not meet the requirments, please try again.");
    }
};