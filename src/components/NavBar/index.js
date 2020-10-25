import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: 65,
  },
  appBar: {
    backgroundColor: '#f7f8f9',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,.1)',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        {window.innerWidth > 550 ? <DesktopNav /> : <MobileNav />}
      </AppBar>
    </div>
  );
};

export default NavBar;
