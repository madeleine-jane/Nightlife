class CurrentUser {
    constructor(firstName, lastName, username, password, profilePic, authToken) {
        this.firstName = firstName
        this.lastName = lastName
        this.username = username
        this.password = password
        this.profilePic = profilePic
        this.authToken = authToken
    }
    firstName = null
    lastName = null
    username = null
    password = null
    profilePic = null
    followers = []
    following = []
    story = new Story()
    feed = new Feed()
    authToken = null
}