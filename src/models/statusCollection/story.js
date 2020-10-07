
//NOTE: my webpage is throwing errors when I instantiate something with inheritance. As far as I can tell, 
// it has something to do with ES6. I'm working on fixing it. 
class Story {
    constructor(statusList = null) {
 //       StatusCollection.call(this, statusList)
    }
    statusList = []
    addStatus(status) {
        this.statusList.push(status)
    }
    getStatuses() {
        return this.statusList
    }
}