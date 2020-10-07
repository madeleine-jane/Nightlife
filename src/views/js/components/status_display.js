function statusHTML(status) {
    status.message = status.message + " "
    for (var i = 0; i < status.message.length; ++i) {
        if (status.message[i] == "#") {
            var spaceIndex = i;
            for (var j = i; j < status.message.length; ++j) {
               if (status.message[j] == " " || j == status.message.length - 1) {
                   spaceIndex = j;
                   break;
               }
            }
            var tag = status.message.substring(i, spaceIndex)
            var tagUrl = `tag.html?tag=` + tag.substring(1) + `&authToken=` + currentAuthToken + `&username=` + currentUsername
            var replaceStr = "<a href = '" + tagUrl + "'>" + tag + "</a>"
            status.message = status.message.replace(tag, replaceStr)
            i = i + replaceStr.length
        }
    }
    for (var i = 0; i < status.message.length; ++i) {
        if (status.message[i] == "@") {
            var spaceIndex = i;
            for (var j = i; j < status.message.length; ++j) {
               if (status.message[j] == " " || j == status.message.length - 1) {
                   spaceIndex = j;
                   break;
               }
            }
            var username = status.message.substring(i, spaceIndex)
            var userUrl = "user.html?statusUsername=" + username.substring(1) + "&authToken=" + currentAuthToken + "&username=" + currentUsername
            var replaceStr = "<a href = '" + userUrl + "'>" + username + "</a>"
            status.message = status.message.replace(username, replaceStr)
            i = i + replaceStr.length

        }
    }

    $(status.id + "-status").click(function() {
        console.log("clicked " + status.id)
        window.location.href = "status.html?id=" + status.id  + "&authToken=" + currentAuthToken + "&" + "username=" + currentUsername
    })
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - status.timestamp;
    var stringAgo
    var timeAgo

    var secondsAgo = (elapsedTime / 1000) % 60;
    var minutesAgo = (elapsedTime / 1000*60) % 60;
    var hoursAgo = (elapsedTime / 1000*60*60) % 24
    var daysAgo = (elapsedTime / (1000*60*60*24))

    if (daysAgo > 1)  {
        stringAgo = "days"
        timeAgo = Math.floor(daysAgo)
    }
    else if (hoursAgo > 1)  {
        stringAgo = "hours"
        timeAgo = Math.floor(hoursAgo)
    }
    else if (minutesAgo > 1)  {
        stringAgo = "minutes"
        timeAgo = Math.floor(minutesAgo)
    }
    else  {
        stringAgo = "seconds"
        timeAgo = Math.floor(secondsAgo)
    }
    var postLink = "status_view.html?statusUser=" + status.user.username + "&statusTimestamp=" + status.timestamp
    if (loggedIn) {
        postLink += "&authToken=" + currentAuthToken + "&username=" + currentUsername
    }
    var userLink = "user.html?statusUsername=" + status.user.username + "&authToken=" + currentAuthToken + "&username=" + currentUsername
    if (currentUsername == status.user.username) {
        userLink = "profile.html" + "?authToken=" + currentAuthToken + "&username=" + currentUsername
    }
    var imageData = ""
    var textData = ""
    if (status.imageAttachment != "") {
        imageData = `<img class = "image_attachment" src="data:image/jpeg;base64,` + status.imageAttachment + `">`
    }
    if (status.textAttachment != "" && status.textAttachment != "null") {
        textData = `<div class = "text_attachment">` + status.textAttachment + `</div>`
    }
    return `
    <div class="event ` + status.id + `-status">
        <div class="label">
            <img src="data:image/jpeg;base64,` + status.user.profilePic + `">
        </div>
        <div class="content">
            <div class="summary">
                <a  href = "` + userLink + `">` + status.user.username + `</a> posted
                <div class="date">

                </div>
                <a class = "post-link" href = "` + postLink + `">view post</a>
            </div>
            <div class="extra text"> ` +
                status.message
            + imageData + textData + `</div>
            <div class="meta">
            </div>
        </div>
    </div>
    
    `
}


