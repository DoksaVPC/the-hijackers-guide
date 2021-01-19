import {Link, useLocation} from "react-router-dom";
import Grid from './grid'


function Section(props){

let location = useLocation();

  return (
    <div
      className="guidelines-section"
      style={{
        backgroundColor: props.color,
        ...(location.pathname === "/guidelines/guideline-" + props.sectionId
          ? { width: "100%" }
          : {})
      }}
    >
      {location.pathname !== "/guidelines/guideline-" + props.sectionId ? (
        <Link to={"/guidelines/guideline-" + props.sectionId}>
          <div style={{ height: "100vh", width: "100%" }}></div>
        </Link>
      ) : (<Grid color='#1c1c1c'/>) }
    </div>
  );
}

export default Section;
