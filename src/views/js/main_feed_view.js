$(document).ready(function() {
    unpackUserData()
    checkToken(redirectInvalid)
    getMenu("feed")
    renderCreatePost()
    getFeed()
    renderUploadModal()
})

function redirectInvalid(result) {
    if (result.data.message == "invalid authtoken") {
        window.location = `user.html?statusUsername=` + currentUsername + `&authToken=` + null + `&username=` + null
    }
}