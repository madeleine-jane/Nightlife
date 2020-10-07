
class LoginPresenter {
    login(callback) {
        var loginData = getLoginData()
        var username = loginData["username"]
        var password = loginData["password"]
        signInProxy.signIn(username, password, callback)
    }
    
    register(callback, image) {
        var registrationData = getRegistrationData()
        var username = registrationData["username"]
        var password = registrationData["password"]
        var firstName = registrationData["firstName"]
        var lastName = registrationData["lastName"]
        signUpProxy.signUp(username, password, firstName, lastName, image, callback)
    
    }
    logout(username, authToken, callback) {
        signInProxy.signOut(username, authToken, callback)
    }
}
