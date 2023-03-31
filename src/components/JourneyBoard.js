import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import "./JourneyBoard.scss";

function JourneyBoard(props) {
  const [sidebar, setSidebar] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [props.tasks]);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="sidebar-jb-wrapper">
      <div className={sidebar ? "menu active" : "menu"}>
        <div className="sidebar-content-wrapper">
          <div className="sidebar-content-header">
            <p className={sidebar ? "display-sidebar-content" : "hide-sidebar-content"}>Journey Board</p>
            <div className="menu-toggle">
              <FontAwesomeIcon
                icon={sidebar ? faCircleArrowLeft : faCircleArrowRight}
                onClick={showSidebar}
              />
            </div>
          </div>
          <div className="sidebar-content-body">
            <ul className="menu-items">
              <div className={sidebar ? "display-sidebar-content" : "hide-sidebar-content"}>
                <div>
                  {loading ? (
                    <p>Loading....</p>
                  ) : props.tasks ? (
                    <li className="sidebar-bold">
                      {props.tasks.task_title}
                    </li>
                  ) : (
                    <p>Error: Task not found</p>
                  )}
                </div>

                {loading ? (
                  <p>Loading....</p>
                ) : props.tasks ? (
                  props.tasks.assets.map((asset, index) => (
                    <div key={index}>
                      <li className="sidebar-text">{asset.asset_title}</li>
                    </div>
                  ))
                ) : (
                  <p>Error: Task not found</p>
                )}
              </div>
            </ul>
            <div className={!sidebar ? "display-sidebar-content" : "hide-sidebar-content"}>
              <div className="hidden-sidebar-content">
                  <h1>1</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JourneyBoard;
