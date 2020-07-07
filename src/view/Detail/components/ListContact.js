import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 'auto'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const ListContact = ({ contact, handleClick, open, index }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className="col-4" style={{overflow:"overlay", height:"400px"}}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {contact.map((values, key) => (
            <Tab label={values.name} {...a11yProps(key)} />
          ))}
        </Tabs>
      </div>
      <div className="col-8" style={{width:"500px"}}>
        {contact.map((values, key) => (
          <TabPanel value={value} index={key}>
            <ul className="list-group">
              <li className="list-group-item active">{values.name}</li>
              <li className="list-group-item">{values.email}</li>
              <li className="list-group-item">{values.sub}</li>
              <li className="list-group-item">{values.message}</li>
              <li className="list-group-item">{values.date}</li>
            </ul>
          </TabPanel>
        ))}
      </div>
    </div>
  );
};

ListContact.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

export default ListContact;
