var signUp = false;
var signUp_usernameFilled = false;
var signUp_passwordFilled = false;
var signUp_firstNameFilled = false;
var signUp_lastNameFilled = false;
var signUp_uploadClicked = false;
var signIn_usernameFilled = false;
var signIn_passwordFilled = false;
var inputElement;
var pond;
var newImage;

$(document).ready(function() {
    $(".sign_up").slideUp()
    $("#sign_up_username").keyup(function () {
        if ($("#sign_up_username").val() != "") {
            signUp_usernameFilled = true;
            activateSignUp()
        }
    })
    $("#sign_up_password").keyup(function() {
        if ($("#sign_up_password").val() != "") {
            signUp_passwordFilled = true;
            activateSignUp()
        }       
    })
    $("#first_name").keyup(function() {
        if ($("#first_name").val() != "") {
            signUp_firstNameFilled = true;
        }       
    })
    $("#last_name").keyup(function() {
        if ($("#last_name").val() != "") {
            signUp_lastNameFilled = true;
            activateSignUp()
        }       
    })
    $(".upload_img").click(function() {
        signUp_uploadClicked = true;
        activateSignUp()
    })
    $("#login_username").keyup(function() {
        if ($("#login_username").val() != "") {
            signIn_usernameFilled = true;
            activateLogin()
        }       
    })
    $("#login_password").keyup(function() {
        if ($("#login_password").val() != "") {
            signIn_passwordFilled = true;
            activateLogin()
        }       
    })
    renderImageModal()

})

function activateLogin() {
    if (signIn_passwordFilled && signIn_usernameFilled) {
        $("#login-btn").removeClass("disabled")
    }
}

function activateSignUp() {
    if (signUp_firstNameFilled && signUp_lastNameFilled && signUp_passwordFilled && signUp_usernameFilled && signUp_uploadClicked) {
        $("#signup-btn").removeClass("disabled")
    }
}

function getLoginData() {
    var username = $("#login_username").val()
    var password = $("#login_password").val()
    return {"username": username, "password": password}
}

function getRegistrationData() {
    var username = $("#sign_up_username").val()
    var password = $("#sign_up_password").val()
    var firstName = $("#first_name").val()
    var lastName = $("#last_name").val()  
    return {
        "username": username, 
        "password": password,
        "firstName": firstName, 
        "lastName": lastName
    }
}

function login() {
    loginPresenter.login(loginResult)
}

function register() {
    loginPresenter.register(signupResult, newImage)
}



function loginResult(result) {
    if (result["data"]["success"]) {
        var authToken = result["data"]["authToken"]
        var username = $("#login_username").val()
        window.location.href = "main_feed.html"  + "?authToken=" + authToken + "&" + "username=" + username
    }
    else {
        $(".error_msg").remove()
        $(".login__form").append(`<div class = "error_msg">` + result["data"]["message"] + `</div>`)
    }
}

function signupResult(result) {
    if (result["data"]["success"]) {
        var authToken = result["data"]["authToken"]
        var username = $("#sign_up_username").val()
        window.location.href = "main_feed.html?authToken=" + authToken + "&" + "username=" + username
    }
    else {
        $(".error_msg").remove()
        $(".sign_up__form").append(`<div class = "error_msg">` + result["data"]["message"] + `</div>`)
    }
}

function toggleSignUp() {
    if (signUp) {
        signUp = false;
    }
    else {
        signUp = true;
    }
    $(".login").transition('fly down')
    $(".sign_up").transition('fly up')
}

function renderImageModal() {
    inputElement = document.querySelector('input[type="file"]');
    pond = FilePond.create( inputElement );
}

function uploadImage() {
    $(".modal").modal('hide')
    var upload = pond.getFile();
    var encodedUpload = upload.getFileEncodeBase64String();
    newImage = encodedUpload;
}