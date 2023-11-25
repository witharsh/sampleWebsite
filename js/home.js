var selectedImage = null;

function changeHeading(newHeading) {
  document.getElementById("image-heading").innerHTML = newHeading;
}

function selectImage(imageNumber) {
  var images = document.querySelectorAll('.image-container');
  images.forEach(image => {
    image.classList.remove('selected');
  });
  
  var selectedImage = images[imageNumber - 1];
  selectedImage.classList.add('selected');
}
