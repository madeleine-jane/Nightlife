var active
const MENU_OPTIONS = {FEED: "feed", STORY: "story", PROFILE: "profile"}
const FILE_NAMES = {FEED: "main_feed.html", PROFILE: "profile.html"}

function renderMenuData(result) {
    if (loggedIn) {
        $(".user-data_image").append(`
            <img src = "` + result.data.user.profilePic + `" alt = "Profile Image" class = "sidebar-profile-pic">
        `)
        $(".user-data_name").append(`
            <h2>` + result.data.user.firstName + ` ` + result.data.user.lastName + `</h2>
        `)
        $(".user-data_username").append(`
            @` + result.data.user.username + `
        `)
    }
}

function getMenu(activeOption) {
    if (!loggedIn) {
        return;
    }
    active = activeOption
    $("#sidebar-section").load("/src/views/components/nav_menu.html")
    setTimeout( () => {$(".menu-" + activeOption).addClass("active")}, 1000);
    userPresenter.getUser(currentUsername, renderMenuData)
}

function navigate(targetLocation, fileName) {
    if (!$(".menu-" + targetLocation).hasClass('active')) {
        window.location.href = fileName + "?authToken=" + currentAuthToken + "&" + "username=" + currentUsername
    }
}

function signOut() {
    loginPresenter.logout(currentUsername, currentAuthToken, signOutResult);
}

function signOutResult(result) {
    if (result.data.success) {
        window.location.href = "sign_in.html"
    }
}