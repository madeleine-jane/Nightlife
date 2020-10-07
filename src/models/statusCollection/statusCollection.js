class StatusCollection {
    constructor(statusList = null) {
        this.statusList = statusList
    }
    statusList = []
    addStatus(status) {
        statusList.push(status)
    }
}