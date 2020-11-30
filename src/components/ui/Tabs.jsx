import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    color: '#000',
  },
  white: {
    backgroundColor: '#fff',
  },
}));

export default function NavTab({ child1, child2, child3 }) {
  const classes = useStyles();
  const location = useLocation();
  const [title, setTitle] = React.useState('');
  const pathname = location.pathname;
  const [value, setValue] = React.useState('1');
  React.useEffect(() => {
    setTitle(pathname.replace('/', ''));
  }, [pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={title}>
        <AppBar className={classes.white} position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <a href="/lecturenotes" className={classes.link}>
              <Tab label="Lecture Notes" value="lecturenotes" />
            </a>
            <a href="/pastquestions" className={classes.link}>
              <Tab label="Past Questions" value="pastquestions" />
            </a>
            <a href="/projectmaterial" className={classes.link}>
              <Tab label="Project Material" value="3" />
            </a>
          </TabList>
        </AppBar>
        <TabPanel value="lecturenotes">{child1}</TabPanel>
        <TabPanel value="pastquestions">{child2}</TabPanel>
        <TabPanel value="projectmaterial">{child3}</TabPanel>
      </TabContext>
    </div>
  );
}
