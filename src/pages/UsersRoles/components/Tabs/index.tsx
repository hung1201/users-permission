import React from "react";
import { Paper, Tab, Tabs } from "@material-ui/core";
import "./tabStyles.scss";
interface IProps {
  value?: number;
  handleChange(e: any, newValue: number): any;
}
const TabsComponent: React.FC<IProps> = ({ value, handleChange }: IProps) => {
  const a11yProps = (index: any) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example">
        <Tab label="Users" {...a11yProps(0)} />
        <Tab label="Roles" {...a11yProps(1)} />
      </Tabs>
    </Paper>
  );
};
export default TabsComponent;
