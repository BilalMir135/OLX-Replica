import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Logo from '../../assets/logo.svg';
import LocationBox from './LocationBox';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 80,
  },
  appBar: {
    backgroundColor: '#f7f8f9',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,.1)',
    padding: '0 20px',
  },
  toolBar: {
    display: 'flex',
  },
  searchBar: {
    width: '55%',
    backgroundColor: '#fff',
    '& input': {
      padding: '13px 13px 13px 12px',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '2px solid #002f34',
        borderRadius: '3px  0 0 3px',
      },
    },
  },
  searchButton: {
    backgroundColor: '#002f34',
    color: '#fff',
    padding: '9px 10px',
    borderRadius: '0 3px 3px 0',
    cursor: 'pointer',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar className={'classes.toolBar'}>
          <img src={Logo} alt='logo' />
          <LocationBox />
          <TextField
            className={classes.searchBar}
            placeholder='Find Cars, Mobile Phones and more...'
            variant='outlined'
          />
          <div className={classes.searchButton}>
            <SearchIcon />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
