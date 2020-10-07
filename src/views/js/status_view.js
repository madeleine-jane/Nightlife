
$(document).ready(function() {
    unpackUserData()
    getMenu("Status")
    var urlParams = new URLSearchParams(window.location.search);
     statusTimestamp = urlParams.get("statusTimestamp")
     statusUser = urlParams.get("statusUser")
    getStatus(statusUser, statusTimestamp)
    checkToken(alterPageInvalid)
 
})

function getStatus(statusUser, statusTimestamp) {
    statusPresenter.getStatus(statusTimestamp, statusUser, renderStatus)
}
function renderStatus(status) {
    if (status == null) {
        return
    }
    $(".status-section").append(statusHTML(status))
    $(".post-link").remove()
}
function alterPageInvalid(result) {
    if (result.data.message == "invalid authtoken") {
        $("#sidebar-section").empty()
    }
}