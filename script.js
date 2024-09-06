function init() {
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = showAnswer;
  }
}

window.onload = init;

function showAnswer(eventObj) {
  let image = eventObj.target;
  image.src = "images/" + image.id + ".jpg";

  setTimeout(letThemHide, 3000, image);
}

function letThemHide(image) {
  image.src = "images/" + image.id + "Disguised.jpg";
}
