
$(document).ready(function () {
    unpackUserData()
    var urlParams = new URLSearchParams(window.location.search);
    tag = urlParams.get("tag")
    $(".tag-title").append("#" + tag)
    getTagPosts("#" + tag)
    getMenu("tag")
    checkToken(alterPageInvalid)
})

function alterPageInvalid(result) {
    if (result.data.message == "invalid authtoken") {
        $("#sidebar-section").empty()
    }
}

function getTagPosts(tag) {
    mentionsPresenter.getPostsByTag(tag, renderTagPosts)
}

function renderTagPosts(posts) {
    for (var i in posts) {
        $(".status-feed").append(statusHTML(posts[i]))
    }
}


