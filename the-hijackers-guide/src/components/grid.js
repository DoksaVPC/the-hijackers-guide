import { React, useState, useRef, useEffect } from "react";
import Controller from "../components/controller";
import DataCard from "../components/dataCard";
import Carousel from "../components/carousel";
import Lottie from "react-lottie";
import lockAnimation from "../lottie/lock_animation.json";
import { ReactComponent as DocumentIcon } from "../document.svg";
import AboutHover from "../components/aboutHover";

function Grid(props) {
  const [WindowSize, setWindowSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  });

  const UNLOCK_TIME = {
    "01": 210.5,
    "02": 0,
    "03": 0,
    "04": 0
  };

  const CARD_DATA = {
    "01": {
      title: "#WHITELIVESMATTER",
      originalDate: "2020-06-02",
      hijackDate: "2020-06-03",
      originalUsers: "White supremacists",
      hijackUsers: "K-pop stans",
      originalAim: "Support white supremacy",
      hijackAim: "Support BLM movement",
      postCount: "> 94.200",
      platforms: "Twitter",
      timeRange: "1 day",
      tactic: "Flooding"
    },
    "02": {
      title: "#ProudBoys",
      originalDate: "2020-10-01",
      hijackDate: "2020-10-02",
      originalUsers: "Donald Trump supporters",
      hijackUsers: "LGBTQ+ community",
      originalAim: "Support the Proud Boys political group",
      hijackAim: "Support LGBTQ+ Community",
      postCount: "Unknown",
      platforms: "Twitter Instagram TikTok",
      timeRange: "1 day",
      tactic: "Flipping"
    },
    "03": {
      title: "#WHITELIVESMATTER",
      originalDate: "2020-06-02",
      hijackDate: "2020-06-03",
      originalUsers: "White supremacists",
      hijackUsers: "K-pop stans",
      originalAim: "Support white supremacy",
      hijackAim: "Support BLM movement",
      postCount: "> 94.200",
      platforms: "Twitter",
      timeRange: "1 day",
      tactic: "Flooding"
    },
    "04": {
      title: "#WHITELIVESMATTER",
      originalDate: "2020-06-02",
      hijackDate: "2020-06-03",
      originalUsers: "White supremacists",
      hijackUsers: "K-pop stans",
      originalAim: "Support white supremacy",
      hijackAim: "Support BLM movement",
      postCount: "> 94.200",
      platforms: "Twitter",
      timeRange: "1 day",
      tactic: "Flooding"
    }
  };

  let playerControllerHeight = 56;
  let gridWidth = ((WindowSize.y - playerControllerHeight) / 9) * 16;
  let gridHeight = WindowSize.y - playerControllerHeight;
  let gridLeft = -1;
  const handlerRadius = 20;
  const [isLocked, setLocked] = useState(true);

  const [handlerPosX, setHandlerPosX] = useState(
    (gridWidth / 3) * 2 - handlerRadius
  );
  const [handlerPosY, setHandlerPosY] = useState(
    (gridHeight / 3) * 2 - handlerRadius
  );

  const maxHandlerX = (gridWidth / 3) * 2 - handlerRadius;
  const minHandlerX = gridWidth / 3 - handlerRadius;
  const maxHandlerY = (gridHeight / 3) * 2 - handlerRadius;
  const minHandlerY = gridHeight / 3 - handlerRadius;
  const [movingHandler, setMovingHandler] = useState(false);
  const [movingControllerHandler, setMovingControllerHandler] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [neverPlayed, setNeverPlayed] = useState(true);
  const [videoCurrentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const video1 = useRef(null);
  const video2 = useRef(null);
  const video3 = useRef(null);
  const video4 = useRef(null);
  const video5 = useRef(null);
  const video6 = useRef(null);

  const videoRefs = [
    video1.current,
    video2.current,
    video3.current,
    video4.current,
    video5.current,
    video6.current
  ];

  const moving = useRef(false);
  const time = useRef(0);

  function changeColor(e, color) {
    if (!isLocked) {
      e.target.style.backgroundColor = color;
    }
  }

  function toggleGrab(e) {
    e.preventDefault();
    if (!isLocked) {
      if (movingHandler) {
        setMovingHandler(false);
      } else {
        setMovingHandler(true);
      }
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
      if (mousePos.x < maxHandlerX && mousePos.x > minHandlerX) {
        setHandlerPosX(mousePos.x);
      } else if (mousePos.x >= maxHandlerX) {
        setHandlerPosX(maxHandlerX);
      } else if (mousePos.x <= minHandlerX) {
        setHandlerPosX(minHandlerX);
      }
      if (mousePos.y < maxHandlerY && mousePos.y > minHandlerY) {
        setHandlerPosY(mousePos.y);
      } else if (mousePos.y >= maxHandlerY) {
        setHandlerPosY(maxHandlerY);
      } else if (mousePos.y <= minHandlerY) {
        setHandlerPosY(minHandlerY);
      }
    } else if (movingControllerHandler) {
      if (gridLeft === -1) {
        gridLeft = document.getElementById("grid").getBoundingClientRect().left;
      }
      let mousePos = e.pageX - gridLeft;
      if (mousePos <= gridWidth && mousePos >= 0) {
        handleChange((mousePos * videoDuration) / gridWidth);
      } else if (mousePos < 0) {
        handleChange(0);
      } else if (mousePos > gridWidth) {
        handleChange(videoDuration);
      }
    }
  }

  function getVideoDuration(e) {
    setVideoDuration(e.target.duration);
    console.log(e.target.duration);
  }

  let playVideos = function() {
    if (neverPlayed) {
      setNeverPlayed(false);
    }
    if (!isPlaying) {
      for (let i = 0; i < videoRefs.length; i++) {
        if (videoRefs[i] !== null) {
          videoRefs[i].play();
        }
      }
      setIsPlaying(true);
    } else {
      for (let i = 0; i < videoRefs.length; i++) {
        if (videoRefs[i] !== null) {
          videoRefs[i].pause();
        }
      }
      setIsPlaying(false);
    }
  };

  function handleOnPlay(e) {
    if (videoCurrentTime !== e.target.currentTime && moving.current === false) {
      setCurrentTime(e.target.currentTime);
    }
    if (videoCurrentTime >= UNLOCK_TIME[props.sectionId] && isLocked) {
      setLocked(false);
    }
    if (video1.current.volume !== volume) {
      video1.current.volume = volume;
    }
  }

  let handleChange = function(value) {
    console.log(value);
    setCurrentTime(value);
    time.current = value;
    for (let i = 0; i < videoRefs.length; i++) {
      if (videoRefs[i] !== null) {
        videoRefs[i].currentTime = time.current;
      }
    }
  };

  let clickOnSlider = function(e) {
    if (gridLeft === -1) {
      gridLeft = document.getElementById("grid").getBoundingClientRect().left;
    }
    let mousePos = e.pageX - gridLeft;
    if (mousePos <= gridWidth && mousePos >= 0) {
      handleChange((mousePos * videoDuration) / gridWidth);
    } else if (mousePos < 0) {
      handleChange(0);
    } else if (mousePos > gridWidth) {
      handleChange(videoDuration);
    }
  };

  let ungrab = function() {
    setMovingHandler(false);
    setMovingControllerHandler(false);
  };

  let handleResize = function() {
    setWindowSize({
      x: window.innerWidth,
      y: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener("mouseup", ungrab);
    window.addEventListener("resize", handleResize);

    // cleanup this component
    return () => {
      window.removeEventListener("mouseup", ungrab);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex-wrapper" onMouseMove={event => handleMouseMove(event)}>
      <div
        className="flex-wrapper fadeIn"
        style={{ backgroundColor: props.color, flexDirection: "column" }}
      >
        <div
          className="grid"
          id="grid"
          style={{
            width: gridWidth,
            height: gridHeight,
            borderWidth: 0
          }}
        >
          <div
            className="grid-container"
            style={{ height: handlerPosY + handlerRadius }}
          >
            <div
              className="grid-unit"
              style={{
                width: handlerPosX + handlerRadius,
                borderTopWidth: 0,
                borderLeftWidth: 0
              }}
            >
              <video
                style={{ minWidth: (gridWidth / 3) * 2 }}
                ref={video1}
                onTimeUpdate={event => handleOnPlay(event)}
                onDurationChange={event => getVideoDuration(event)}
                onEnded={() => {
                  setIsPlaying(false);
                }}
              >
                <source
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/section" +
                    props.sectionId +
                    "/Video" +
                    props.sectionId +
                    "-Box1.mp4"
                  }
                />
              </video>
              {neverPlayed && videoCurrentTime < 1 && (
                <div
                  className="play-button-large-container"
                  onClick={() => {
                    playVideos();
                  }}
                >
                  <div className="play-button-large">
                    <img
                      alt="play"
                      src={process.env.PUBLIC_URL + "/assets/play_button.svg"}
                    />
                  </div>
                </div>
              )}
            </div>
            <div
              className="double-container vertical"
              style={{
                width: gridWidth - (handlerPosX + handlerRadius),
                borderTopWidth: 0
              }}
            >
              <div
                className="grid-unit half"
                style={{ borderTopWidth: 0, borderRightWidth: 0 }}
              >
                <video ref={video2} currentTime={videoCurrentTime}>
                  <source
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/section" +
                      props.sectionId +
                      "/Video" +
                      props.sectionId +
                      "-Box2.mp4"
                    }
                  />
                </video>
              </div>
              <div className="grid-unit half" style={{ borderRightWidth: 0 }}>
                {videoCurrentTime <= UNLOCK_TIME[props.sectionId] - 10 && (
                  <video ref={video3}>
                    <source
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/section" +
                        props.sectionId +
                        "/Video" +
                        props.sectionId +
                        "-Box3.mp4"
                      }
                    />
                  </video>
                )}
              </div>
            </div>
          </div>
          <div
            className="grid-container"
            style={{
              height: gridHeight - (handlerPosY + handlerRadius),
              borderBottom: 0
            }}
          >
            <div
              className="double-container horizontal"
              style={{ width: handlerPosX + handlerRadius }}
            >
              <div
                className="grid-unit half"
                style={{ borderBottomWidth: 0, borderLeftWidth: 0 }}
              >
                {videoCurrentTime <= UNLOCK_TIME[props.sectionId] - 10 && (
                  <video ref={video4}>
                    <source
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/section" +
                        props.sectionId +
                        "/Video" +
                        props.sectionId +
                        "-Box4.mp4"
                      }
                    />
                  </video>
                )}
                {videoCurrentTime >= UNLOCK_TIME[props.sectionId] && (
                  <div
                    className="content-container bottom-left"
                    style={{
                      width: gridWidth / 3,
                      height: (gridHeight / 3) * 2,
                      animationDelay: "0.5s"
                    }}
                  >
                    <DataCard
                      color={props.color}
                      hashtagName={CARD_DATA[props.sectionId].title}
                      originalDate={CARD_DATA[props.sectionId].originalDate}
                      hijackDate={CARD_DATA[props.sectionId].hijackDate}
                      originalUsers={CARD_DATA[props.sectionId].originalUsers}
                      hijackUsers={CARD_DATA[props.sectionId].hijackUsers}
                      originalAim={CARD_DATA[props.sectionId].originalAim}
                      hijackAim={CARD_DATA[props.sectionId].hijackAim}
                      postCount={CARD_DATA[props.sectionId].postCount}
                      platforms={CARD_DATA[props.sectionId].platforms}
                      timeRange={CARD_DATA[props.sectionId].timeRange}
                      tactic={CARD_DATA[props.sectionId].tactic}
                    />
                  </div>
                )}
                <div className="shadow" />
              </div>
              <div className="grid-unit half" style={{ borderBottomWidth: 0 }}>
                {videoCurrentTime <= UNLOCK_TIME[props.sectionId] - 10 && (
                  <video ref={video5}>
                    <source
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/section" +
                        props.sectionId +
                        "/Video" +
                        props.sectionId +
                        "-Box5.mp4"
                      }
                    />
                  </video>
                )}
                {videoCurrentTime >= UNLOCK_TIME[props.sectionId] && (
                  <div
                    className="content-container bottom-center"
                    style={{
                      height: gridHeight - (handlerPosY + handlerRadius),
                      animationDelay: "0.6s"
                    }}
                  >
                    <DocumentIcon
                      width="2.5em"
                      height="2.5em"
                      fill={props.color}
                    />
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <AboutHover text="Download the insights" width={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div
              className="grid-unit"
              style={{
                width: gridWidth - (handlerPosX + handlerRadius),
                borderBottomWidth: 0,
                borderRightWidth: 0
              }}
            >
              {videoCurrentTime <= UNLOCK_TIME[props.sectionId] - 10 && (
                <video ref={video6}>
                  <source
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/section" +
                      props.sectionId +
                      "/Video" +
                      props.sectionId +
                      "-Box6.mp4"
                    }
                  />
                </video>
              )}
              {videoCurrentTime >= UNLOCK_TIME[props.sectionId] && (
                <div
                  className="content-container bottom-right"
                  style={{
                    width: (gridWidth / 3) * 2,
                    height: (gridHeight / 3) * 2,
                    animationDelay: "0.7s"
                  }}
                >
                  {" "}
                  <Carousel
                    sectionId={props.sectionId}
                    width={(gridWidth / 3) * 2}
                    height={(gridHeight / 3) * 2}
                    color={props.color}
                  />
                </div>
              )}
              <div className="shadow" />
            </div>
          </div>
          <div
            className="handler"
            style={{ left: handlerPosX, top: handlerPosY }}
            onMouseDown={toggleGrab}
            onMouseEnter={event => changeColor(event, props.color)}
            onMouseOut={event => changeColor(event, "GhostWhite")}
          >
            <div
              style={{
                position: "absolute",
                left: -18,
                top: -18,
                opacity: 0.6,
                pointerEvents: "none"
              }}
            >
              <Lottie
                options={{
                  loop: false,
                  autoplay: false,
                  animationData: lockAnimation,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                  }
                }}
                height={72}
                width={72}
                isStopped={isLocked}
              />
            </div>
          </div>
        </div>
        <Controller
          sectionId={props.sectionId}
          width={gridWidth}
          height={playerControllerHeight}
          duration={videoDuration}
          currentTime={videoCurrentTime}
          playVideos={playVideos}
          handleClick={clickOnSlider}
          setMoving={setMovingControllerHandler}
          setVolume={setVolume}
          volume={volume}
          isPlaying={isPlaying}
        />
      </div>
    </div>
  );
}

export default Grid;
