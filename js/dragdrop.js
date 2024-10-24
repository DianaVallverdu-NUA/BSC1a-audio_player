const dropZone = document.getElementById("dropzone");
const draggable = document.getElementById("player_container");

let offsetX = 0;
let offsetY = 0;

dropZone.ondragover = (event) => {
  event.preventDefault();
};

dropZone.ondrop = (event) => {
  draggable.style.left = event.clientX - offsetX + "px";
  draggable.style.top = event.clientY - offsetY + "px";
};

draggable.ondragstart = (event) => {
  if(sliderIsChanging) {
    event.preventDefault();
    return;
  }
  
  const style = window.getComputedStyle(draggable);
  offsetX = event.clientX - parseInt(style.left);
  offsetY = event.clientY - parseInt(style.top);
};
