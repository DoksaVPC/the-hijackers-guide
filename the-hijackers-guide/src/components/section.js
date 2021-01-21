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
  '01': '#a05ebf',
  '02': '#16a873',
  '03': '#c2840e',
  '04': '#3BB8FF',
}

const TITLES = {
  '01': 'Hashtag',
  '02': 'Social Media',
  '03': 'The Perfect Moment',
  '04': 'Hijacking Tactics'
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
          <div className="duotone duotone-dark" style={{backgroundColor: DARK_COLORS[props.sectionId]}}/>
          <div className="duotone duotone-light" style={{backgroundColor: COLORS[props.sectionId]}}/>
          </div>
          )}

          </div>
        </Link>
      ) : (<Grid color={COLORS[props.sectionId]}/>) }
      {location.pathname === "/guidelines" && (
        <div className="sectionTitle-container">
        <h2 className="sectionTitle-title">{TITLES[props.sectionId]}</h2>
        </div>
      )}
    </div>
  );
}

export default Section;
