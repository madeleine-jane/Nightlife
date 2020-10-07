var newStatus = {
    message: "",
    textAttachment: "",
    imageAttachment: ""
}

var inputElement
var pond

function renderCreatePost() {
    $("#create-post-section").load('/src/views/components/create_post.html')
}

function postStatus() {
    newStatus.message = $(".create-post_textarea").val()
    statusPresenter.createStatus(newStatus, postStatusResult)
}

function renderUploadModal() {
    inputElement = document.querySelector('input[type="file"]');
    pond = FilePond.create( inputElement );
}

function uploadImage() {
    $(".upload-modal").modal('hide')
    var upload = pond.getFile();
    var encodedUpload = "data:image/" + upload.fileExtension + ";base64," + upload.getFileEncodeBase64String();
    newStatus.imageAttachment = encodedUpload
}
function uploadTxt() {
    $(".upload-modal").modal('hide')
    var upload = pond.getFile();
    console.log(upload);
    var textContents = window.atob(upload.getFileEncodeBase64String())
    newStatus.textAttachment = textContents
}

function postStatusResult(result) {
    if(result["data"]["success"]) {
        window.location = window.location
    }
    else {
        //show error message
    }
}

