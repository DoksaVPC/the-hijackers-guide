import {Link} from "react-router-dom";

function Onboarding(){
  return (
    <div>
    <h1> Welcome! </h1>
    <Link to="/guidelines">
    <h3>Start the experience!</h3>
    </Link>
    </div>
  );

}

export default Onboarding;
