import { Button } from "@material-ui/core";
import React from "react";
import { ReactComponent as PlusIcon } from "../../../../assets/icons/plus-circle-solid.svg";
import RoleTable from "../../components/RoleTable";
import "./RolesStyles.scss";
const RolesScreen: React.FC = () => {
  return (
    <>
      <div className="rolesActions">
        <Button>
          <PlusIcon />
          <span>Thêm Roles</span>
        </Button>
      </div>
      <div className="rolesTable">
        <RoleTable />
      </div>
      <div className="rolesButtons">
        <Button variant="outlined">
          <span>Hủy bỏ</span>
        </Button>
        <Button variant="contained">
          <span>Lưu ngay</span>
        </Button>
      </div>
    </>
  );
};
export default RolesScreen;
