function renderStory(result) {
    if (result.data.success == false) {
        window.location = "user.html?statusUsername=" + currentUsername
    }
    var story = result.data.story
        for (var i in story) {
        $(".status-feed").append(statusHTML(story[i]))
    }

}

function loadMoreStory() {
    storyPresenter.getStory(currentUsername, renderMoreStory)

}

function renderMoreStory(result) {
    var moreStory = result.data.story
    moreStory = moreStory.reverse()
    for (var i in moreStory) {
        $(".status-feed").append(statusHTML(moreStory[i]))
    }
}

function getStory() {
    $("#feed-display").load("/src/views/components/story_display.html")
    storyPresenter.getStory(currentUsername, renderStory)
    var lastScrollTop = 0;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if (st > lastScrollTop){
           if($(window).scrollTop() + $(window).height() < $(document).height() + 2 && 
            $(window).scrollTop() + $(window).height() > $(document).height() - 2) {
            loadMoreStory()
            }
        }
       lastScrollTop = st;
    });

}


