class ChangeProfilePicProxy {
    changePic(image, authToken, username, callback) {
        profilePicLambda(image, authToken, username, callback)
    }
}

function profilePicLambda(image, authToken, username, callback) {
    var params = {};
    var body = {
        "image": image,
        "authToken": authToken,
        "username": username
    };
    var additionalParams = {};
    apigClient.changeImagePost(params, body, additionalParams)
        .then(function(result){
            console.log(result)
            callback(result)

        }).catch( function(result){
            console.log(result)
            callback(result)
        });
    return true;
}