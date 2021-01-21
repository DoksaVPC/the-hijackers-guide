import { React, useState, useRef } from "react";

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
  const handlerRadius = 20;

  const [handlerPos, setHandlerPos] = useState({
    x: (gridWidth / 3) * 2 - handlerRadius,
    y: (gridHeight / 3) * 2 - handlerRadius
  });
  const [movingHandler, setMovingHandler] = useState(false);

  const video1 = useRef(null);
  const video2 = useRef(null);
  const video3 = useRef(null);
  const video4 = useRef(null);
  const video5 = useRef(null);
  const video6 = useRef(null);

  let isPlaying = false;

  function changeColor(e, color) {
    e.target.style.backgroundColor = color;
  }

  function toggleGrab(e) {
    e.preventDefault();
    if (movingHandler) {
      setMovingHandler(false);
    } else {
      setMovingHandler(true);
    }
  }

  function handleMouseMove(e) {
    if (movingHandler) {
      if (gridLeft === -1) {
        gridLeft = document.getElementById("grid").getBoundingClientRect().left;
      }
      let mousePos = {
        x: e.pageX - gridLeft - handlerRadius,
        y: e.pageY - handlerRadius
      };
      setHandlerPos({
        x: mousePos.x,
        y: mousePos.y
      });
    }
  }

  function playVideos() {
    if (!isPlaying) {
      video1.current.play();
      video2.current.play();
      video3.current.play();
      video4.current.play();
      video5.current.play();
      video6.current.play();
      isPlaying = true;
    } else {
      video1.current.pause();
      video2.current.pause();
      video3.current.pause();
      video4.current.pause();
      video5.current.pause();
      video6.current.pause();
      isPlaying = false;
    }
  }

  return (
    <div
      className="flex-wrapper"
      onMouseUp={event => {
        if (movingHandler) {
          toggleGrab(event);
        }
      }}
    >
      <div
        className="flex-wrapper fadeIn"
        style={{ backgroundColor: props.color, flexDirection: "column" }}
      >
        <div
          className="grid"
          id="grid"
          style={{
            width: gridWidth,
            height: gridHeight
          }}
          onMouseMove={event => handleMouseMove(event)}
        >
          <div
            className="grid-container"
            style={{ height: handlerPos.y + handlerRadius }}
          >
            <div
              className="grid-unit"
              style={{ width: handlerPos.x + handlerRadius }}
            >
              <video ref={video1}>
                <source
                  src={
                    "/assets/section" +
                    props.sectionId +
                    "/Video" +
                    props.sectionId +
                    "-Box1.mp4"
                  }
                />
              </video>
            </div>
            <div
              className="double-container vertical"
              style={{ width: gridWidth - (handlerPos.x + handlerRadius) }}
            >
              <div className="grid-unit half">
                <video ref={video2}>
                  <source
                    src={
                      "/assets/section" +
                      props.sectionId +
                      "/Video" +
                      props.sectionId +
                      "-Box2.mp4"
                    }
                  />
                </video>
              </div>
              <div className="grid-unit half">
                <video ref={video3}>
                  <source
                    src={
                      "/assets/section" +
                      props.sectionId +
                      "/Video" +
                      props.sectionId +
                      "-Box3.mp4"
                    }
                  />
                </video>
              </div>
            </div>
          </div>
          <div
            className="grid-container"
            style={{
              height: gridHeight - (handlerPos.y + handlerRadius),
              borderBottom: 0
            }}
          >
            <div
              className="double-container horizontal"
              style={{ width: handlerPos.x + handlerRadius }}
            >
              <div className="grid-unit half">
                <video ref={video4}>
                  <source
                    src={
                      "/assets/section" +
                      props.sectionId +
                      "/Video" +
                      props.sectionId +
                      "-Box4.mp4"
                    }
                  />
                </video>
              </div>
              <div className="grid-unit half">
                <video ref={video5}>
                  <source
                    src={
                      "/assets/section" +
                      props.sectionId +
                      "/Video" +
                      props.sectionId +
                      "-Box5.mp4"
                    }
                  />
                </video>
              </div>
            </div>
            <div
              className="grid-unit"
              style={{ width: gridWidth - (handlerPos.x + handlerRadius) }}
            >
              <video ref={video6}>
                <source
                  src={
                    "/assets/section" +
                    props.sectionId +
                    "/Video" +
                    props.sectionId +
                    "-Box6.mp4"
                  }
                />
              </video>
            </div>
          </div>
          <div
            className="handler"
            style={{ left: handlerPos.x, top: handlerPos.y }}
            onMouseDown={toggleGrab}
            onMouseEnter={event => changeColor(event, props.color)}
            onMouseOut={event => changeColor(event, "GhostWhite")}
          />
        </div>
        <div
          className="controller-container"
          style={{ height: playerControllerHeight, width: gridWidth }}
        >
          <div className="controller-slider" />
          <div className="controller-button" onClick={playVideos}>
            <img src="/assets/play_button.svg" alt="play" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
