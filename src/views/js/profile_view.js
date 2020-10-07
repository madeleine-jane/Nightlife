var inputElement;
var pond;
var newImage;

$(document).ready(function() {
    unpackUserData()
    checkToken(redirectInvalid)
    getMenu("profile")
    getProfile()
    getFollowing()
    getFollowers()
    renderChangeImageModal()
})

function redirectInvalid(result) {
    if (result.data.message == "invalid authtoken") {
        window.location = `user.html?statusUsername=` + currentUsername + `&authToken=` + null + `&username=` + null
    }
}


function renderChangeImageModal() {
    inputElement = document.querySelector('input[type="file"]');
    pond = FilePond.create( inputElement );
}

function changeProfileImage() {
    $(".submit_image").append(`<div class="ui loader"></div>`)
    var upload = pond.getFile();
    var encodedUpload = upload.getFileEncodeBase64String();
    profilePresenter.changeProfileImage(encodedUpload, changeImageResult)
    newImage = encodedUpload;
    renderChangeImageModal();
}
function changeImageResult(result) {
    window.location = window.location;
}

function renderProfile(result) {
    var user = result.data.user
    $(".profile-image").append(`
        <img src="` + user.profilePic + `" alt="Profile Image" class = "profile-pic">
    `)
    $(".profile-name").append(`
        <h1>` + user.firstName + ` ` + user.lastName + `</h1>
    `)
    $(".profile-username").append(`
        @` + user.username + `
    `)
    $(".profile-image").hover(function() {
        $(".profile-image").append(`<div class = "ui edit icon profile-icon"></div>`)
    }, function() {
        $(".profile-icon").remove()
    })
}

function getProfile() {
    userPresenter.getUser(currentUsername, renderProfile)
}

function getFollowing() {
    userPresenter.getUserFollowing(currentUsername, renderFollowing)
}
function getFollowers() {
    userPresenter.getUserFollowers(currentUsername, renderFollowers)
}
function renderFollowing(following) {
    for (var i in following) {
        $(".following-list").append(followHTML(following[i]))
    }
    $(".following-list").append(`<div class = "event following-button-event"><div class = "ui button" onclick = "loadMoreFollowing()">Load more</button></div>`)
}
function renderFollowers(followers) {
    for (var i in followers) {
        $(".followers-list").append(followHTML(followers[i]))
    }
    $(".followers-list").append(`<div class = "event followers-button-event"><div class = "ui button" onclick = "loadMoreFollowers()">Load more</button></div>`)
}

function loadMoreFollowing() {
    $(".following-button-event").remove()
    userPresenter.getUserFollowing(currentUsername, renderMoreFollowing)
}

function loadMoreFollowers() {
    $(".followers-button-event").remove()
    userPresenter.getUserFollowers(currentUsername, renderMoreFollowers)
}

function renderMoreFollowers(follows) {
    for (var i in follows) {
        $(".followers-list").append(followHTML(follows[i]))
    }
    $(".followers-list").append(`<div class = "event followers-button-event"><div class = "ui button" onclick = "loadMoreFollowers()">Load more</button></div>`)
}

function renderMoreFollowing(follows) {
    for (var i in follows) {
        $(".following-list").append(followHTML(follows[i]))
    }
    $(".following-list").append(`<div class = "event following-button-event"><div class = "ui button" onclick = "loadMoreFollowing()">Load more</button></div>`)
}

function followHTML(user) {
    return ` 
    <div class="event">
        <div class="label">
            <img src= "` + user.profilePic + `">
        </div>
        <div class="content">
            <div class="summary">
                <a class="user" href = "user.html?statusUsername=` + user.username + `&authToken=` + currentAuthToken + `&username=` + currentUsername + `">
                ` + user.firstName + " " + user.lastName + `
                </a>
            </div>
            <div class="meta">
            </div>
        </div>
    </div>`
}