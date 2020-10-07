class FollowProxy {
    follow (username, callback) {
        return followLambdaData(username, currentAuthToken, currentUsername, callback)
    }
    unfollow(username, callback) {
        return unfollowLambdaData(username, currentAuthToken, currentUsername, callback)
    }
}

function followLambdaData(username, authToken, follower, callback) {
    var params = {};
    var body = {
        "username": username,
        "authToken": authToken,
        "follower": follower
    };
    var additionalParams = {};
    apigClient.followPost(params, body, additionalParams)
        .then(function(result){
            console.log(result)
            callback(result)

        }).catch( function(result){
            console.log(result)
            callback(result)
        });
    return true;
}

function unfollowLambdaData(username, authToken, follower, callback) {
    var params = {};
    var body = {
        "username": username,
        "authToken": authToken,
        "follower": follower
    };
    var additionalParams = {};
    apigClient.unfollowPost(params, body, additionalParams)
        .then(function(result){
            console.log(result)
            callback(result)

        }).catch( function(result){
            console.log(result)
            callback(result)
        });
    return true;
}