$(document).ready(function() {
    unpackUserData()
    checkToken(redirectInvalid)
    getMenu("story")
    renderCreatePost()
    getStory()
    renderUploadModal()
})

function redirectInvalid(result) {
    if (result.data.message == "invalid authtoken") {
        window.location = `user.html?statusUsername=` + currentUsername + `&authToken=` + null + `&username=` + null
    }
}