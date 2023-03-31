import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import './NoticeBoard.scss'

function NoticeBoard() {
  const [noticeBar, setNoticeBar] = useState(false);

  const showNoticebar = () => setNoticeBar(!noticeBar);
  return (
    <div>
      <div className={noticeBar? "notice-board-wrapper": "notice-board-hidden"}>
        <div className="notice-board">
          <FontAwesomeIcon icon={noticeBar ? faPlus : faXmark} className='icon' onClick={showNoticebar} />
          <p className="p-notice">Notice Board</p>
        </div>
      </div>
    </div>
  );
}

export default NoticeBoard;