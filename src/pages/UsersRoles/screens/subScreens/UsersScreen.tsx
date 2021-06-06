import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { ReactComponent as PlusIcon } from "../../../../assets/icons/plus-circle-solid.svg";
import "./UsersStyles.scss";
import UserCard from "../../components/UserCard";
const UsersScreen: React.FC = () => {
  return (
    <>
      <div className="userActions">
        <div className="userActions__search">
          <input type="text" placeholder="Tìm kiếm user tại đây" />
          <SearchIcon />
        </div>
        <div className="userActions__add">
          <Button>
            <PlusIcon />
            <span>Thêm User</span>
          </Button>
        </div>
      </div>
      <div className="usersList">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  );
};
export default UsersScreen;
