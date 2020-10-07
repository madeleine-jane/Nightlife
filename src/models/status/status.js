class Status {
    constructor(message, elements = null, user) {
       this.message = message
       this.elements = elements 
       this.datePosted = new Date()
       this.user = user
       this.id = this.createID()
    }
    elements
    message
    datePosted
    user
    id
    createID() {
        var hashStr = this.user.username + this.message
        return hashStr.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              

    }
}