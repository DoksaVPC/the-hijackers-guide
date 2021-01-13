const handler = document.getElementById("player-handler");
const handlerSize = 30;

const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
const player3 = document.getElementById("player-3");
const player4 = document.getElementById("player-4");
const player5 = document.getElementById("player-5");
const player6 = document.getElementById("player-6");

const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;
const handlerXperc = handlerSize/2 * 100 / width;
const handlerYperc = handlerSize/2 * 100 / height;
const minY = 20;
const maxY = 80 - handlerYperc;
const minX = 20;
const maxX = 80 - handlerXperc;
let isDragging = false;

handler.style.width = handlerSize + 'px';
handler.style.height = handlerSize + 'px';
handler.style.top = (height/2 - handlerSize/2) * 100 / height + '%';
handler.style.left = (width/2 - handlerSize/2) * 100 / width + '%';

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
      handler.style.left = mouseX + '%';
      player1.style.width = mouseX + handlerXperc + '%';
      player2.style.width = 100 - (mouseX + handlerXperc) + '%';
      player2.style.left = mouseX + handlerXperc + '%';
      player3.style.width = 100 - (mouseX + handlerXperc) + '%';
      player3.style.left = mouseX + handlerXperc + '%';
      player4.style.width = (mouseX + handlerXperc) / 2 + '%';
      player5.style.width = (mouseX + handlerXperc) / 2 + '%';
      player5.style.left = (mouseX + handlerXperc) / 2 + '%';
      player6.style.width = 100 - (mouseX + handlerXperc) + '%';
      player6.style.left = mouseX + handlerXperc + '%';
    }
    if (mouseY >= minY && mouseY <= maxY){
      handler.style.top = mouseY + '%';
      player1.style.height = mouseY + handlerYperc + '%';
      player2.style.height = (mouseY + handlerYperc) / 2 + '%';
      player3.style.height = (mouseY + handlerYperc) / 2 + '%';
      player3.style.top = (mouseY + handlerYperc) / 2 + '%';
      player4.style.height = 100 - (mouseY + handlerYperc) + '%';
      player4.style.top = mouseY + handlerYperc + '%';
      player5.style.height = 100 - (mouseY + handlerYperc) + '%';
      player5.style.top = mouseY + handlerYperc + '%';
      player6.style.height = 100 - (mouseY + handlerYperc) + '%';
      player6.style.top = mouseY + handlerYperc + '%';
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
