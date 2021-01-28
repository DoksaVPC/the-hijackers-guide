import CardColumn from "../components/cardColumn";

function DataCard(props){
  return(
    <div className="card data-card">
    <h4 className="card-header">{props.hashtagName}</h4>
    <div className="column-container" style={{borderBottom: '1px var(--grey) solid'}}>
    <CardColumn
    color = {props.color}
    title="ORIGINAL HASHTAG"
    date={props.originalDate}
    users={props.originalUsers}
    aim={props.originalAim}
    />
    <CardColumn
    color = {props.color}
    title="HASHTAG HIJACK"
    date={props.hijackDate}
    users={props.hijackUsers}
    aim={props.hijackAim}
    />
    </div>
    <div className="card-info">
    <div className="card-info-column">
    <div className="card-info-icon"/>
    <div className="card-info-label">posts</div>
    <p style={{color: props.color}}>{props.postCount}</p>
    </div>
    <div className="card-info-column"></div>
    <div className="card-info-column"></div>
    <div className="card-info-column"></div>
    </div>
    </div>
  )
}

export default DataCard;
