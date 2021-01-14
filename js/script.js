const wrapper = document.getElementById("wrapper");
const handler = document.getElementById("player-handler");
const controller = document.getElementById("controller");
const handlerSize = 30;
const controllerSize = 60;

const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
const player3 = document.getElementById("player-3");
const player4 = document.getElementById("player-4");
const player5 = document.getElementById("player-5");
const player6 = document.getElementById("player-6");
const immagine = document.getElementById("immagine");
const video = document.getElementById("video");
const title = document.getElementById("title");


let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

let handlerXperc = handlerSize/2 * 100 / width;
let handlerYperc = handlerSize/2 * 100 / height;
let controllerPerc = controllerSize * 100 / height;
let wrapperwidth = (height - controllerSize) / 9 * 16.5;
let wrapperwidthPerc = wrapperwidth * 100 / width;
const minY = 25;
const maxY = (height - controllerSize) / 3 * 2 * 100 / height;
const minX = 20;
const maxX = 70;
let isDragging = false;

const barWidth = (100 - wrapperwidthPerc) / 3;
const bar1 = document.getElementById("guideline-2");
bar1.style.width = barWidth + 'vw';
const bar2 = document.getElementById("guideline-3");
bar2.style.width = barWidth + 'vw';
const bar3 = document.getElementById("guideline-4");
bar3.style.width = barWidth + 'vw';
bar1.style.left = 100 - barWidth * 3 + 'vw';
bar2.style.left = 100 - barWidth * 2 + 'vw';
bar3.style.left = 100 - barWidth + 'vw';

immagine.style.left = minX/2 + 'vw';
immagine.style.top = minY + 'vh';
immagine.style.width = maxX - minX/2 + 'vw';
immagine.style.height = 100 - controllerPerc - minY + 'vh';
video.style.minWidth = wrapperwidthPerc / 3 * 2 + handlerXperc + 'vw';

wrapper.style.width = wrapperwidthPerc + '%';
wrapper.style.height = (height - controllerSize) * 100 / height + 'vh';
handler.style.width = handlerSize + 'px';
handler.style.height = handlerSize + 'px';
controller.style.height = controllerSize + 'px';
handler.style.top = (height/2 - handlerSize/2) * 100 / height + '%';
handler.style.left = (width/2 - handlerSize/2) * 100 / width + '%';


setPositionX(wrapperwidthPerc / 3 * 2);
setPositionY((height - controllerSize) / 3 * 2 * 100 / height);


document.onmousemove = moveHandler;

handler.onmousedown = handleDrag;
document.onmouseup = function(){
  if (isDragging){
    isDragging = false;
  }
};

function moveHandler(mouseEvent){
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  let mouseX;
  let mouseY;
  if (isDragging){
    mouseX = (mouseEvent.pageX - handlerSize/2) * 100 / width;
    mouseY = (mouseEvent.pageY - handlerSize/2) * 100 / height;
    if (mouseX >= minX && mouseX <= maxX){
      setPositionX(mouseX);

    }
    if (mouseY >= minY && mouseY <= maxY){
      setPositionY(mouseY);
    }
  }
}

function handleDrag(){
  if (!isDragging){
    isDragging = true;
    console.log('dragging');
  } else {
    isDragging = false;
    console.log('released');
  }
}

function setPositionX(x){
  handler.style.left = x + 'vw';
  player1.style.width = x + handlerXperc + 'vw';
  player2.style.width = wrapperwidthPerc - (x + handlerXperc) + 'vw';
  player2.style.left = x + handlerXperc + 'vw';
  player3.style.width = wrapperwidthPerc - (x + handlerXperc) + 'vw';
  player3.style.left = x + handlerXperc + 'vw';
  player4.style.width = (x + handlerXperc) / 2 + 'vw';
  player5.style.width = (x + handlerXperc) / 2 + 'vw';
  player5.style.left = (x + handlerXperc) / 2 + 'vw';
  player6.style.width = wrapperwidthPerc - (x + handlerXperc) + 'vw';
  player6.style.left = x + handlerXperc + 'vw';
  video.style.width = player1.offsetWidth + 'px';
}

function setPositionY(y){
  handler.style.top = y + 'vh';
  player1.style.height = y + handlerYperc + 'vh';
  player2.style.height = (y + handlerYperc) / 2 + 'vh';
  player3.style.height = (y + handlerYperc) / 2 + 'vh';
  player3.style.top = (y + handlerYperc) / 2 + 'vh';
  player4.style.height = 100 - (y + handlerYperc) - controllerPerc + 'vh';
  player4.style.top = y + handlerYperc + 'vh';
  player5.style.height = 100 - (y + handlerYperc) - controllerPerc + 'vh';
  player5.style.top = y + handlerYperc + 'vh';
  player6.style.height = 100 - (y + handlerYperc) - controllerPerc + 'vh';
  player6.style.top = y + handlerYperc + 'vh';
  title.style.fontSize = 1.6 * y/maxY + 'em';
}
