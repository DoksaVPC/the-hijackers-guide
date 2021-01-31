import CarouselItem from "../components/carouselItem";
import CarouselImage from "../components/carouselImage";
import { React, useRef, useState, useEffect } from "react";
import leftArrow from "../left_arrow.svg";
import rightArrow from "../right_arrow.svg";

function Carousel(props) {
  const [collection, setCollection] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState({
    state: false,
    direction: 0
  });

  const HIJACKED_COUNT = {
    "01": 40,
    "02": 40,
    "03": 40,
    "04": 40
  };

  useEffect(() => {
    createCollection(props.sectionId);
  }, []);

  function createCollection(sectionId) {
    let itemsArray = [];

    for (let i = 0; i < 50; i++) {
      let hijackedCount = HIJACKED_COUNT[sectionId];
      let type;
      if (i > hijackedCount) {
        type = "original";
      } else {
        type = "hijacked";
      }
      let item = new CarouselItem(
        type,
        i,
        "/assets/section" + sectionId + "/carousel/" + (i + 1) + ".jpg"
      );
      itemsArray.push(item);
    }

    let shuffledItems = shuffle(itemsArray);

    setCollection(shuffledItems);
    console.log(shuffledItems);
  }

  function shuffle(array) {
    let i = array.length,
      j = 0,
      temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  function resizeImage(e) {
    let image = e.target;
    let width = image.naturalWidth;
    let height = image.naturalHeight;
    console.log(width);
    if (width > height) {
      image.style.width = "100%";
      image.style.height = "auto";
      console.log(image.width);
    } else {
      image.style.height = props.height * 0.9;
      image.style.width = "auto";
    }
    console.log("resized!");
  }

  return (
    <div className="carousel-container">
      {collection.length > 1 && (
        <div
          className="carousel-images-container"
          style={
            transitioning.state
              ? {
                  transform:
                    "translateX(" +
                    props.width * 0.44 * transitioning.direction +
                    "px)",
                  transition: "transform 0.15s"
                }
              : { transform: "translateX(0)", transition: "none" }
          }
          onTransitionEnd={() => {
            if (transitioning.direction > 0) {
              if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
              } else {
                setCurrentIndex(collection.length - 1);
              }
            } else if (transitioning.direction < 0) {
              if (currentIndex < collection.length - 1) {
                setCurrentIndex(currentIndex + 1);
              } else {
                setCurrentIndex(0);
              }
            }
            setTransitioning({ state: false, direction: 0 });
          }}
        >
          <div
            className="image-wrapper"
            style={{ width: props.width * 0.4, height: props.height * 0.7 }}
          >
            <CarouselImage
              src={
                currentIndex > 1
                  ? process.env.PUBLIC_URL + collection[currentIndex - 2].src
                  : process.env.PUBLIC_URL +
                    collection[collection.length - (2 - currentIndex)].src
              }
              maxHeight={props.height * 0.7}
            />
          </div>
          <div
            className="image-wrapper"
            style={{ width: props.width * 0.4, height: props.height * 0.7 }}
          >
            <CarouselImage
              src={
                currentIndex > 0
                  ? process.env.PUBLIC_URL + collection[currentIndex - 1].src
                  : process.env.PUBLIC_URL +
                    collection[collection.length - 1].src
              }
              maxHeight={props.height * 0.7}
            />
          </div>
          <div
            className="image-wrapper"
            style={{ width: props.width * 0.4, height: props.height * 0.9 }}
          >
            <CarouselImage
              src={process.env.PUBLIC_URL + collection[currentIndex].src}
              maxHeight={props.height * 0.9}
            />
          </div>
          <div
            className="image-wrapper"
            style={{
              width: props.width * 0.4,
              height: props.height * 0.7
            }}
          >
            <CarouselImage
              src={
                currentIndex < collection.length - 1
                  ? process.env.PUBLIC_URL + collection[currentIndex + 1].src
                  : process.env.PUBLIC_URL + collection[0].src
              }
              maxHeight={props.height * 0.7}
            />
          </div>
          <div
            className="image-wrapper"
            style={{
              width: props.width * 0.4,
              height: props.height * 0.7
            }}
          >
            <CarouselImage
              src={
                currentIndex < collection.length - 2
                  ? process.env.PUBLIC_URL + collection[currentIndex + 2].src
                  : process.env.PUBLIC_URL +
                    collection[0 + (currentIndex - (collection.length - 2))].src
              }
              maxHeight={props.height * 0.7}
            />
          </div>
        </div>
      )}
      <button
        className="carousel-arrow left-arrow"
        onClick={event => {
          event.preventDefault();
          console.log(currentIndex);
          setTransitioning({ state: true, direction: 1 });
        }}
      />
      <button
        className="carousel-arrow right-arrow"
        onClick={event => {
          event.preventDefault();
          console.log(currentIndex);
          setTransitioning({ state: true, direction: -1 });
        }}
      />
    </div>
  );
}

export default Carousel;
