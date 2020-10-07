class GetUserDataProxy {
    getUserData(username, callback, signedInUser) {
        getUserDataLambda(username, callback, signedInUser)
    }
    getUserFollowers(username, callback) {
        getUserFollowersLambda(username, callback)
    }
    getUserFollowing(username, callback) {
        getUserFollowingLambda(username, callback)
    }
    getUserStory(username, callback) {
        getUserStoryLambda(username, callback)
    }
    getUserFeed(username, authToken, callback) {
        getUserFeedLambda(username, authToken, callback)
    }
    
}

function getUserDataLambda(username, callback, signedInUser) {
    var params = {};
    var body = {
        "username": username,
        "signedInUser": signedInUser
    };
    var additionalParams = {};
    apigClient.getUserPost(params, body, additionalParams, callback)
        .then(function(result){
            console.log(result)
            callback(result)

        }).catch( function(result){
            console.log(result)
        });
}

function getUserFollowersLambda(username, callback) {
    var params = {};
    var body = {
        "username": username
    };
    var additionalParams = {};
    apigClient.getFollowersPost(params, body, additionalParams, callback)
        .then(function(result){
            console.log(result)
            formattedResults = []
            callback(result.data.followers)

        }).catch( function(result){
            console.log(result)
        });
}

function getUserFollowingLambda(username, callback) {
    var params = {};
    var body = {
        "username": username
    };
    var additionalParams = {};
    apigClient.getFollowingPost(params, body, additionalParams, callback)
        .then(function(result){
            console.log(result)
            callback(result.data.following)

        }).catch( function(result){
            console.log(result)
        });

}

function getUserStoryLambda(username, callback) {
    var params = {};
    var body = {
        "username": username
    };
    var additionalParams = {};
    apigClient.getStoryPost(params, body, additionalParams, callback)
        .then(function(result){
            console.log(result)
            formattedResults = []
            callback(result)

        }).catch( function(result){
            console.log(result)
        });
}

function getUserFeedLambda(username, authToken, callback) {
    var params = {};
    var body = {
        "authToken": authToken,
        "username": username,
    };
    var additionalParams = {};
    apigClient.getFeedPost(params, body, additionalParams, callback)
        .then(function(result){
            console.log(result)
            callback(result)

        }).catch( function(result){
            console.log(result)
            callback(result)
        });
}