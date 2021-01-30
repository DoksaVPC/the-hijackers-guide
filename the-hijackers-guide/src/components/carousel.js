import CarouselItem from "../components/carouselItem";
import {React, useRef, useState, useEffect} from "react";
import leftArrow from "../left_arrow.svg";
import rightArrow from "../right_arrow.svg";

function Carousel(props){

const [collection, setCollection] = useState([]);
const [currentIndex, setCurrentIndex] = useState(0);

const HIJACKED_COUNT = {
  '01' : 40,
  '02' : 40,
  '03' : 40,
  '04' : 40
}

useEffect(() => {
    createCollection(props.sectionId)
  }, []);

function createCollection(sectionId){
  let itemsArray = [];

  for (let i = 0; i < 50; i++){
    let hijackedCount = HIJACKED_COUNT[sectionId];
    let type;
    if (i > hijackedCount) {
      type = 'original';
    } else {
      type = 'hijacked';
    }
    let item = new CarouselItem(type, i, "/assets/section" + sectionId + "/carousel/" + (i+1) + ".jpg");
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

      j = Math.floor(Math.random() * (i+1));

      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;

  }

  return array;
}

  return(
    <div className="carousel-container">
<div className="carouselItem"/>
<button className="carousel-arrow left-arrow"/>
<button className="carousel-arrow right-arrow"/>
</div>
  );
}

export default Carousel;
