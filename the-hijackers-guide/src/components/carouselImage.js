import { React, useRef, useState, useEffect } from "react";

function CarouselImage(props) {
  return (
    <div
      className="image-wrapper"
      style={{ width: props.width * 0.4, height: props.height * 0.9 }}
    >
      <div style={{ position: "relative" }}>
        <img alt="post" src={props.src} />
        <div className="image-label" style={{ backgroundColor: props.color }}>
          {props.type}
        </div>
      </div>
    </div>
  );
}
export default CarouselImage;
