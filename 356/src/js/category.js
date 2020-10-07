$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var headerName = urlParams.get("topic")
    $(".main-header").append(headerName)

})