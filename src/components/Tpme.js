import { useState, useEffect } from "react";
import "./Tpme.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

function Tpme(props) {
  const [collapse, setCollapse] = useState(false);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };
  const renderContent = () => {
    if (props.assets.asset_id == 18883) {
      return (
        <div className="youtube-video">
          <iframe
            src="https://www.youtube.com/embed/TiMRwri1xJ8"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            width="100%"
            height="100%"
          />
        </div>
      );
    } else {
      return (
        <div>
          <div>{props.assets.asset_description}</div>
          <hr className="comp-body-divider" />
          <div>{props.assets.asset_type}</div>
          <hr className="comp-body-divider" />
          <div>{props.assets.asset_content}</div>
          <hr className="comp-body-divider" />
          <div>{props.assets.asset_content_type}</div>
        </div>
      );
    }
  };
  return (
    <div className="comp-wrapper">
    <div className="comp-header">
      <p>{props.assets.asset_title}</p>
      <div className="info-icon" onClick={toggleCollapse}>
        <FontAwesomeIcon icon={faCircleInfo} />
      </div>
    </div>
    <div className={`comp-body ${collapse ? "collapsed" : ""}`}>
      <div className="comp-desc">
        <p>
          <span className="comp-desc-label">Description:</span>{" "}
          {props.assets.asset_description}
        </p>
      </div>
      <hr className="comp-body-divider" />
        <div>{renderContent()}</div>
      </div>
    </div>
  );
}

export default Tpme;
