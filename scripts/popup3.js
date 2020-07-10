// Get the modal
var modal = document.getElementById("myThirdModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("first");
var modalImg = document.getElementById("img03");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-first")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}