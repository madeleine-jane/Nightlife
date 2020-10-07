class ProfilePresenter {
    getUserData(username) {
        return getUserDataProxy.getUserData(username)
    }
    changeProfileImage(encoded, callback) {
        if (loggedIn) {
            changePicProxy.changePic(encoded, currentAuthToken, currentUsername, callback)
            return true;
        }
        else {
            return false;
        }
    }
    followUser(username, callback) {
        followProxy.follow(username, currentAuthToken, currentUsername, callback)
    }
    unfollowUser(username, callback) {
        followProxy.unfollowUser(username,  currentAuthToken, currentUsername, callback)
    }
}