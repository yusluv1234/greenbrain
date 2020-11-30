import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTab({ child1, child2, child3 }) {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <a href="/lecturenotes">
              <Tab label="Lecture Notes" value="1" />
            </a>
            <Tab label="Past Questions" value="2" />
            <Tab label="Project Material" value="3" />
          </TabList>
        </AppBar>
        <TabPanel value="1">{child1}</TabPanel>
        <TabPanel value="2">{child2}</TabPanel>
        <TabPanel value="3">{child3}</TabPanel>
      </TabContext>
    </div>
  );
}
