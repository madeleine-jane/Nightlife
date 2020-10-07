
var selectedUser
var userIsFollowed = false

$(document).ready(function () {
    unpackUserData()
    var urlParams = new URLSearchParams(window.location.search);
    username = urlParams.get("statusUsername")
    
    if (username == null) {
        return
    }
    getUserData(username)
    getMenu("user")
    checkToken(alterPageInvalid)
})

function alterPageInvalid(result) {
    if (result.data.message == "invalid authtoken") {
        $("#sidebar-section").empty()
        $(".follow_btn").remove()
    }
}

function getUserData(username) {
    userPresenter.getUser(username, renderUserData, currentUsername)
}
function renderUserData(result) {
    selectedUser = result["data"]["user"]
    userIsFollowed = result["data"]["followed"]
    getFollowing()
    getFollowers()
    getUserPosts()
}

function getUserPosts() {
    $("#feed-display").load("/src/views/components/feed_display.html")

    storyPresenter.getStory(selectedUser.username, renderUserPosts)
}


function renderUserPosts(userPosts) {
    selectedUser.story = userPosts.data.story
    renderUserHeader()
    for (var i in selectedUser.story) {
        $(".status-feed").append(statusHTML(selectedUser.story[i]))
    }
}


function getFollowing() {
    userPresenter.getUserFollowing(selectedUser.username, renderFollowing)
}
function getFollowers() {
    userPresenter.getUserFollowers(selectedUser.username, renderFollowers)
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
    userPresenter.getUserFollowing(selectedUser.username, renderMoreFollowing)
}

function loadMoreFollowers() {
    $(".followers-button-event").remove()
    userPresenter.getUserFollowers(selectedUser.username, renderMoreFollowers)
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

function followHTML(selectedUser) {
    return ` 
    <div class="event">
        <div class="label">
            <img src= "` + selectedUser.profilePic + `">
        </div>
        <div class="content">
            <div class="summary">
                <a class="user" href = "user.html?statusUsername=` + selectedUser.username + `&authToken=` + currentAuthToken + `&username=` + currentUsername + `">
                ` + selectedUser.firstName + " " + selectedUser.lastName + `
                </a>
            </div>
            <div class="meta">
            </div>
        </div>
    </div>`
}


function renderUserHeader() {
    $(".user-name").append(selectedUser.firstName + " " + selectedUser.lastName)
    $(".user-username").append(selectedUser.username)
    $(".user-image").append(`<img src = "` + selectedUser.profilePic + `">`)
    if (selectedUser.story.length == 1) {
        $(".user-post-count").append(" | " + selectedUser.story.length + " post")
    }
    else {
        $(".user-post-count").append(" | " + selectedUser.story.length + " posts")
    }
    if (userIsFollowed) {
        $(".follow_btn").empty().append('Unfollow')
    }
    else {
        $(".follow_btn").empty().append('Follow')
    }
    if (!loggedIn) {
        $(".follow_btn").remove()
    }
}

function toggleFollow() {
    if (userIsFollowed) {
        $(".follow_btn").empty().append('Follow')
        followProxy.unfollow(selectedUser.username, toggleFollowResult)
        userIsFollowed = false;
    }
    else {
        $(".follow_btn").empty().append('Unfollow')
        followProxy.follow(selectedUser.username, toggleFollowResult)
        userIsFollowed = true;
    }
}

function toggleFollowResult(result) {
    window.location = window.location
}

