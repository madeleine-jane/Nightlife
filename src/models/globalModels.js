
currentUser = new CurrentUser("MJ", "Andersen", "stseraphim", "thedarkone", "profile_pic.jpg")
var currentUsername
var currentAuthToken
var loggedIn = false;
function unpackUserData() {
    var searchParams = new URLSearchParams(window.location.search)
    loggedIn = searchParams.has('authToken')
    if (searchParams.get('authToken') == "null") loggedIn = false
    currentAuthToken = searchParams.get('authToken')
    currentUsername = searchParams.get('username')
    if (loggedIn) {
        userPresenter.getUser(currentUser.username, assignUser)
    }
}

function assignUser(result) {
    currentUser = result;
}

function checkToken(callback) {
    followProxy.follow(currentUsername, callback)
}
