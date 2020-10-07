function renderFeed(result) {
    var feed = result.data.feed
    feed = feed.reverse()
    for (var i in feed) {
        $(".status-feed").append(statusHTML(feed[i]))
    }
}

function loadMoreFeed() {
    feedPresenter.getFeed(currentUsername, currentAuthToken, renderMoreFeed)
}

function renderMoreFeed(result) {
    var moreFeed = result.data.feed
    moreFeed = moreFeed.reverse()
    for (var i in moreFeed) {
        $(".status-feed").append(statusHTML(moreFeed[i]))
    }
}

function getFeed() {
    $("#feed-display").load("/src/views/components/feed_display.html")
    var lastScrollTop = 0;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if (st > lastScrollTop){
           if($(window).scrollTop() + $(window).height() < $(document).height() + 2 && 
            $(window).scrollTop() + $(window).height() > $(document).height() - 2) {
            loadMoreFeed()
            }
        }
       lastScrollTop = st;
    });
    feedPresenter.getFeed(currentUsername, currentAuthToken, renderFeed)
}
