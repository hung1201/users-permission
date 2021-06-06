import { Box } from "@material-ui/core";
import React from "react";
import { RoleScreen, UserScreen } from "../../screens/subScreens";
import "./tabsPanelStyle.scss";
interface IProps {
  value?: number;
  index?: number;
  users?: any;
  roles?: any;
}
const TabPanel = (props: any) => {
  const { children, value, index, others } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...others}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};
const TabsPanelComponent: React.FC<IProps> = ({
  value,
  index,
  users,
  roles,
}) => {
  return (
    <>
      <TabPanel value={value} index={index}>
        {users && <UserScreen />}
        {roles && <RoleScreen />}
      </TabPanel>
    </>
  );
};
export default TabsPanelComponent;
