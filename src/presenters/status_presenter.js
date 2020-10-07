
class StatusPresenter {
    getStatus(statusTimestamp, statusUser, callback) {
        return statusProxy.getStatus(statusTimestamp, statusUser, callback)
    }
    createStatus(status, callback) {
        statusProxy.postStatus(currentUsername, currentAuthToken, status, callback)
    }
}
