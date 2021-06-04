import { Box, Button, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { ReactComponent as TimesIcon } from "./assets/icons/times-circle-solid.svg";
import "./styles.scss";
import SearchIcon from "@material-ui/icons/Search";
import { ReactComponent as PlusIcon } from "./assets/icons/plus-circle-solid.svg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PersonIcon from "@material-ui/icons/Person";
const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
const App: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const handleChange = (e: any, newValue: number) => {
    setValue(newValue);
  };
  const a11yProps = (index: any) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  return (
    <div className="app">
      <div className="tag">
        <span>Roles {"&"} Users</span>
        <TimesIcon />
      </div>
      <div className="app__container">
        <span>Roles {"&"} Users</span>
        <div className="app__container-main">
          <Paper square>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Users" {...a11yProps(0)} />
              <Tab label="Roles" {...a11yProps(1)} />
            </Tabs>
          </Paper>
          <div className="actions">
            <div className="actions__search">
              <input type="text" placeholder="Tim kiem user tai day" />
              <SearchIcon />
            </div>
            <Button>
              <PlusIcon />
              Them User
            </Button>
          </div>
          <TabPanel value={value} index={0}>
            <div className="users__list">
              <div className="user__card">
                <div className="user__icon">
                  <PersonIcon />
                </div>
                <div className="user__info">
                  <div className="user__info-detail">
                    <img
                      src="https://i.pinimg.com/originals/eb/b0/2a/ebb02aedec9bc74f65e38311c7e14d34.png"
                      alt="imagasde"
                    />
                    <div className="user__desc">
                      <div className="user__name-phone">
                        <span>{`Nguyen Lan Anh`}</span>
                        <span>{`(02193810923)`}</span>
                      </div>
                      <div className="user__email">
                        <span>{`nguyenlananh123@gmail.com`}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <MoreVertIcon />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Roles Panel
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

export default App;
