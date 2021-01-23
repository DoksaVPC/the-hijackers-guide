import { React, useState } from "react";

function Controller(props) {
  const HANDLER_RADIUS = 0;
  const COLORS = {
    "01": "#9F55DD",
    "02": "#1EDA96",
    "03": "#FFAF14",
    "04": "#3BB8FF"
  };
  const volumeWidth = 60;

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
        <div className="slider-background" style={{backgroundColor: COLORS[props.sectionId]}}>
          <div
            className="controller-slider"
            style={{
              width: (props.width * props.currentTime) / props.duration,
              backgroundColor: 'GhostWhite'
            }}
          >
            <div
              className="controller-handler"
              onMouseDown={event => {
                event.preventDefault();
                props.setMoving(true);
              }}
              style={{
                left: (props.width * props.currentTime) / props.duration - 4,
                backgroundColor: 'GhostWhite'
              }}
            />
          </div>
        </div>
      </div>
      <button className="controller-button" onClick={props.playVideos}>
        <img
          alt="play"
          style={{ width: "100%" }}
          src="/assets/play_button.svg"
        />
      </button>
      <div className='volume-container'>
      <button className="controller-button" style={{marginRight: '1em', backgroundColor: 'transparent'}}>
      <img alt="volume" style={{ width: '100%'}} src="/assets/volume_button.svg"/>
      </button>
      <div className="volume-slider-background" style={{height: 4, backgroundColor: COLORS[props.sectionId]}}><div className="volume-slider"><div className="volume-handler"/></div></div>
      </div>
    </div>
  );
}

export default Controller;
