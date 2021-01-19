import {Link, useLocation} from "react-router-dom";


function Grid(props){

  let WindowSize = {
    x: window.innerWidth,
    y: window.innerHeight
  };
  console.log(WindowSize);
  let playerControllerHeight = 60;
  let gridWidth = ((WindowSize.y - playerControllerHeight) / 9) * 16;

let location = useLocation();

  return (
    <div className="flex-wrapper">
    <div className="fadeIn flex-wrapper" style={{backgroundColor: '#1c1c1c'}}>
    <div
      className="grid"
      style={{
        backgroundColor: props.color, width: gridWidth, height: '100vh',
        flexGrow: 0, border: 'solid grey 1px'
      }}
    >
    </div>
    </div>
    </div>
  );
}

export default Grid;
