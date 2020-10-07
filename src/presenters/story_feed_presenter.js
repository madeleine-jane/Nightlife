
class FeedPresenter {
    getFeed(username, authToken, callback) {
        getUserDataProxy.getUserFeed(username, authToken, callback)
    }
}

class StoryPresenter {
    getStory(username, callback) {
        return getUserDataProxy.getUserStory(username, callback)
    }
}