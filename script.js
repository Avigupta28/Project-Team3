function validateEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}

function checker() {
    const email = document.getElementById("email-id").value;
    if (validateEmail(email)) {
        // Email is valid, proceed with the sign-in process
    } else {
        document.getElementById("error-msg").style.display = "block";
    }
}