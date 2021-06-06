import React from "react";
import { ReactComponent as UserIcon } from "../../../../assets/icons/user-solid.svg";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./userCardStyle.scss";
import Button from "@material-ui/core/Button";
import { Telegram } from "@material-ui/icons";
const UserCard: React.FC = () => {
  return (
    <div className="userCard">
      <div className="userCard__left">
        <UserIcon />
      </div>
      <div className="userCard__center">
        <div className="userCard__center-info">
          <img
            src="https://i.pinimg.com/originals/eb/b0/2a/ebb02aedec9bc74f65e38311c7e14d34.png"
            alt="imagasde"
          />
          <div className="userCard__center-infoDetail">
            <div className="userCard__name-phone">
              <span>Nguyễn Lan Anh</span>
              <span>(0123456789)</span>
            </div>
            <div className="userCard__email">nguyenlananh123@gmail.com</div>
          </div>
        </div>
        <div className="userCard__center-roles">
          <Button variant="outlined">
            <span>Local Manager</span>
            <Telegram />
          </Button>
          <div className="userCard__center-location">
            <span>Nam Từ Liêm</span>
          </div>
        </div>
      </div>
      <div className="userCard__right">
        <div></div>
        <div></div>
        <div></div>
        <div className="userCard__right-actions">
          <span>Xóa</span>
          <span>Chỉnh sửa</span>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
