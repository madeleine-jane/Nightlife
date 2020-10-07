class SignInProxy {
    signIn(username, password, callback) {
        signInLambdaData(username, password, callback)
    }
    signOut(username, authToken, callback) {
        signOutLambdaData(username, authToken, callback)
    }
}

function signInLambdaData(username, password, callback) {
    var params = {};
    var body = {
        "username": username,
        "password": password
    };
    var additionalParams = {};
    var res
    apigClient.signInPost(params, body, additionalParams, callback)
        .then(function(result){
            console.log(result)
            callback(result)

        }).catch( function(result){
            console.log(result)
            return result
        });
}
function signOutLambdaData(username, authToken, callback) {
    var params = {};
    var body = {
        "authToken": authToken,
        "username": username
    };
    var additionalParams = {};
    var res;
    apigClient.signOutPost(params, body, additionalParams, callback)
        .then(function(result){
            console.log(result)
            callback(result)

        }).catch( function(result){
            console.log(result)
            res = result;
        });
}
