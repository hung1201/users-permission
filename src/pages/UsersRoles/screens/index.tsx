import React, { useState } from "react";
import { ReactComponent as TimesIcon } from "../../../assets/icons/times-circle-solid.svg";
import { styles } from "../styles/UsersRolesStyles";
import { makeStyles } from "@material-ui/core";
import TabsComponent from "../components/Tabs";
import TabsPanelComponent from "../components/TabsPanel";
import "../styles/userRolesStyles.scss";
const useStyles = makeStyles(() => styles);
const UsersRoles: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);
  const handleChange = (e: any, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <div className={classes.tab} style={{ float: "left" }}>
        <span style={{}}>Roles {"&"} Users</span>
        <TimesIcon style={{ width: "20px", marginLeft: "24px" }} />
      </div>
      <div className={classes.container}>
        <span style={{ fontSize: "14px", fontStyle: "italic" }}>
          Roles {"&"} Users
        </span>
        <div style={{ marginTop: "8px" }}>
          <TabsComponent value={value} handleChange={handleChange} />
          <TabsPanelComponent value={value} index={0} users />
          <TabsPanelComponent value={value} index={1} roles />
        </div>
      </div>
    </div>
  );
};
export default UsersRoles;
