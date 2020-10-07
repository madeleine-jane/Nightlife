class SignUpProxy {
    signUp(username, password, firstName, lastName, image, callback) {
        signUpLambdaData(username, password, firstName, lastName, image, callback)
    }
}

function signUpLambdaData(username, password, firstName, lastName, image, callback) {
    var params = {};
    var body = {
        "username": username,
        "password": password,
        "firstName": firstName,
        "lastName": lastName,
        "image": image
    };
    var additionalParams = {};
    apigClient.signUpPost(params, body, additionalParams, callback)
        .then(function(result){
            console.log(result)
            callback(result)

        }).catch( function(result){
            console.log(result)
            callback(result)
        });
    return true;

}