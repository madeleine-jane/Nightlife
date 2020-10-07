class MentionsPresenter {
    getPostsByTag(tag, callback) {
        return statusProxy.getMentions(tag, callback)
    }
}