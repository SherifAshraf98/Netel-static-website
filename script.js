// Select images to be shown in modal
var buttonImageModal = $(".modal-button-image");

  // When image is clicked
  buttonImageModal.on("click", function(){
  // Select the exact clicked image
  const clickedImage = $(this).attr("id");
  // Select image element in modal
  const imageModal = $("#image-in-modal");
  // Get URL of clicked image
  const imageURL = "images/image"+clickedImage+".jpg";
  // Set Modal by this image
  imageModal.attr("src", imageURL);
});
