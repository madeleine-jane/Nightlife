class StatusProxy {
    getStatus(statusTimestamp, statusUser, callback) {
        getStatusLambdaData(statusTimestamp, statusUser, callback)
    }
    getMentions(keyword, callback) {
        getMentionsLambdaData(keyword, callback)
    }
    postStatus(username, authToken, status, callback) {
        return postStatusLambda(username, authToken, status, callback);
    }
}

function getMentionsLambdaData(keyword, callback) {
    var params = {};
    var body = {
        "keyword": keyword
    };
    var additionalParams = {};
    apigClient.getMentionsPost(params, body, additionalParams, callback)
        .then(function(result){
            console.log(result)
            callback(result.data.statuses)

        }).catch( function(result){
            console.log(result)
        });
}

function getStatusLambdaData(statusTimestamp, statusUser, callback) {
    var params = {};
    var body = {
        "timestamp" : statusTimestamp,
        "username": statusUser
    };
    var additionalParams = {};
    apigClient.getStatusPost(params, body, additionalParams, callback)
        .then(function(result){
            console.log(result)
            callback(result.data.status)

        }).catch( function(result){
            console.log(result)
        });
}

function postStatusLambda(username, authToken, status, callback) {
    var params = {};
    var body = {
        "message": status.message,
        "imageAttachment": status.imageAttachment,
        "textAttachment": status.textAttachment,
        "authToken": authToken,
        "username": username
    };
    var additionalParams = {};
    apigClient.postStatusPost(params, body, additionalParams, callback)
        .then(function(result){
            console.log(result)
            callback(result)

        }).catch( function(result){
            console.log(result)
        });
}