import { React, useState } from "react";

function Controller(props) {
  const HANDLER_RADIUS = 0;
  return (
    <div
      className="controller-container"
      style={{ height: props.height, width: props.width }}
    >
      <div
        className="slider-container"
        onMouseDown={event => {
          event.preventDefault();
          props.setMoving(true);
          props.handleClick(event);
        }}
      >
        <div className="slider-padding" />
        <div className="slider-background">
          <div
            className="controller-slider"
            style={{
              width: (props.width * props.currentTime) / props.duration
            }}
          >
            <div
              className="controller-handler"
              onMouseDown={event => {
                event.preventDefault();
                props.setMoving(true);
              }}
              style={{
                left: (props.width * props.currentTime) / props.duration - 4
              }}
            />
          </div>
        </div>
      </div>
      <div className="controller-button" onClick={props.playVideos}>
        <img
          alt="play"
          style={{ width: "100%" }}
          src="/assets/play_button.svg"
        />
      </div>
    </div>
  );
}

export default Controller;