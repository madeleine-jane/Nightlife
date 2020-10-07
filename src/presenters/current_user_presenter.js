class UserPresenter {
    getUser(username, callback) {
        getUserDataProxy.getUserData(username, callback, currentUsername)
    }
    getUserFollowers(username, callback) {
        getUserDataProxy.getUserFollowers(username, callback)
    }
    getUserFollowing(username, callback) {
        getUserDataProxy.getUserFollowing(username, callback)
    }
    changeProfilePic(filename, callback) {
        changePicProxy.changePic(filename, callback)
    }
}