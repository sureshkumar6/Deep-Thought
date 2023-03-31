import { useState, useEffect } from "react";
import "./App.scss";
import Tpme from "./components/Tpme.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faScrewdriverWrench,
  faBell,
  faUser,
  faEllipsisVertical,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import JourneyBoard from "./components/JourneyBoard.js";
import NoticeBoard from "./components/NoticeBoard.js";

function App() {
  const [title, setTitle] = useState("");
  const [taskTilte, setTaskTitle] = useState("");
  const [task_description, setTask_description] = useState("");
  const [assets, setAssets] = useState("");
  const [tasks, setTasks] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:6060/api/data");
      const data = await response.json();
      setTasks(data.tasks[0]);
      setTitle(data.tasks[0].assets[0].asset_title);
      setTaskTitle(data.tasks[0].task_title);
      setTask_description(data.tasks[0].task_description);
      setAssets(data.tasks[0].assets);
    };

    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header-wrapper">
        <div></div>
        <div className="App-header">
          <img
            src="https://deepthought.education/assets/images/logo/logo.svg"
            alt="logo"
          />
          <div className="header-nav">
            <button>
              <FontAwesomeIcon icon={faHouseChimney} />
            </button>
            <button>
              <FontAwesomeIcon icon={faScrewdriverWrench} />
            </button>
            <button>
              <FontAwesomeIcon icon={faBell} />
            </button>
            <button>
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </div>
        </div>
        <div></div>
      </header>
      <div className="body-content-wrapper">
        <div></div>
        <div className="body-content">
          <div className="sidebar-jb">
            <JourneyBoard tasks={tasks} />
          </div>
          <div className="title-text">
            <p>{title}</p>
            <button>Submit Task</button>
          </div>

          <div className="generic-description-styled">
            <div className="generic-description-styled-title">
              <p>{taskTilte}</p>
            </div>
            <div className="generic-description-styled-desc">
              <p>{task_description}</p>
            </div>
          </div>
          <div className="grid-container">
            {Object.keys(assets).map((assetId) => (
              <div className="grid-item" key={assetId}>
                <Tpme assets={assets[assetId]} />
              </div>
            ))}
          </div>
        </div>
        <div></div>
        <div>
          <NoticeBoard />
        </div>
        <div>
          <div className="info-buttons">
            <button className="buttons-style">
              <FontAwesomeIcon icon={faQuestion} />
            </button>
            <button className="buttons-style">
              <img src="https://blog.deepthought.education/wp-content/uploads/2022/08/discussion.svg" />
            </button>
            <button className="buttons-style">
              <img src="https://sdlms.deepthought.education/assets/uploads/files/files/toc-icon.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
