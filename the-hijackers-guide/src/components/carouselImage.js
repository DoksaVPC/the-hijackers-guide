import { React, useRef, useState, useEffect } from "react";

function CarouselImage(props) {
  return <img alt="post" src={props.src} style={{ height: props.maxHeight }} />;
}
export default CarouselImage;
