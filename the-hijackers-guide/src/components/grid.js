import { Link, useLocation } from "react-router-dom";
import {React, useState} from 'react';

function Grid(props) {
  let WindowSize = {
    x: window.innerWidth,
    y: window.innerHeight
  };
  console.log(WindowSize);
  let playerControllerHeight = 68;
  let gridWidth = ((WindowSize.y - playerControllerHeight) / 9) * 16;
  let gridHeight = WindowSize.y - playerControllerHeight;
  let gridLeft = -1;
  const handlerRadius = 24;

  const [handlerPos, setHandlerPos] = useState({x: gridWidth/3 * 2 - handlerRadius, y: gridHeight/3*2 - handlerRadius});
  const [movingHandler, setMovingHandler] = useState(false);

  function changeColor(e, color){
      e.target.style.backgroundColor = color;
  }



  function toggleGrab(e){
      e.preventDefault();
    if (movingHandler){
      setMovingHandler(false)
    } else {
      setMovingHandler(true)
    }
  }

  function handleMouseMove(e){
    if(movingHandler){
      if (gridLeft === -1){
        gridLeft = document.getElementById('grid').getBoundingClientRect().left;
      }
      let mousePos = {x: e.pageX - gridLeft - handlerRadius, y: e.pageY - handlerRadius}
      setHandlerPos({
        x: mousePos.x,
        y: mousePos.y
      })
    }
  }

  let location = useLocation();

  return (
    <div className="flex-wrapper" onMouseUp={event => {
      if(movingHandler){
        toggleGrab(event);
      }
      }}>
      <div
        className="flex-wrapper fadeIn"
        style={{ backgroundColor: props.color, flexDirection: 'column'}}
      >
        <div
          className="grid"
          id="grid"
          style={{
            width: gridWidth, height: gridHeight
          }}
          onMouseMove={event => handleMouseMove(event)}

        >
          <div className="grid-container" style={{ flexBasis: handlerPos.y + handlerRadius }}>
            <div className="grid-unit" style={{ width: handlerPos.x + handlerRadius }} />
            <div className="double-container vertical" style={{ width: gridWidth - (handlerPos.x + handlerRadius) }}>
              <div className="grid-unit half"></div>
              <div className="grid-unit half"></div>
            </div>
          </div>
          <div className="grid-container" style={{ flexBasis: gridHeight - (handlerPos.y + handlerRadius), borderBottom: 0 }}>
            <div
              className="double-container horizontal"
              style={{ width: handlerPos.x + handlerRadius }}
            >
              <div className="grid-unit half"></div>
              <div className="grid-unit half"></div>
            </div>
            <div className="grid-unit" style={{ width: gridWidth - (handlerPos.x + handlerRadius) }} />
          </div>
          <div className="handler" style={{left: handlerPos.x, top: handlerPos.y}}
           onMouseDown={toggleGrab}
           onMouseEnter={event => changeColor(event, props.color)}
           onMouseOut={event => changeColor(event, 'GhostWhite')}/>
        </div>
        <div className="controller-container" style={{height: playerControllerHeight, width: gridWidth}}>
        <div className="controller-slider"/>
        <div className="controller-button"><img src="/assets/play_button.svg" alt="play"/></div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
