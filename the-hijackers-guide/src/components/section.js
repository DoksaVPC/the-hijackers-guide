import {Link, useLocation} from "react-router-dom";
import Grid from './grid'


function Section(props){

let location = useLocation();

const COLORS = {
  '01': '#CD7FF2',
  '02': '#1EDA96',
  '03': '#FFAF14',
  '04': '#3BB8FF',
  'black': '#1C0F13'
}

const DARK_COLORS = {
  '01': '#6c2391',
  '02': '#0b5238',
  '03': '#5e4108',
  '04': '#0a3d5c',
}

  return (
    <div
      className="guidelines-section"
      style={{
        backgroundColor: COLORS[props.sectionId],
        ...(location.pathname === "/guidelines/guideline-" + props.sectionId
          ? { width: "100%" }
          : {})
      }}
    >
      {location.pathname !== "/guidelines/guideline-" + props.sectionId ? (
        <Link to={"/guidelines/guideline-" + props.sectionId}>
          <div className="preview-video-container">
          {location.pathname === "/guidelines" && (
            <div>
            <video loop className="preview-video" onMouseOver={event => event.target.play()}
  onMouseOut={event => event.target.pause()}><source src={"./assets/preview-" + props.sectionId + ".mp4"}/></video>
          <div className="duotone duotone-light" style={{backgroundColor: COLORS[props.sectionId]}}></div>
          <div className="duotone duotone-dark" style={{backgroundColor: DARK_COLORS[props.sectionId]}}></div>
          </div>
          )}

          </div>
        </Link>
      ) : (<Grid color={COLORS.black}/>) }
    </div>
  );
}

export default Section;
