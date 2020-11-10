import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Logo from '../../assets/logo.svg';
import LocationBox from './LocationBox';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import SellBtn from '../../assets/sellBtn.png';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: 'flex',
    padding: 0,
  },
  searchBar: {
    width: '55%',
    backgroundColor: '#fff',
    '& input': {
      padding: '13px 13px 13px 13px',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: `2px solid ${theme.palette.secondary.main}`,
        borderRadius: '3px  0 0 3px',
      },
    },
  },
  searchButton: {
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    padding: '9px 10px',
    borderRadius: '0 3px 3px 0',
    cursor: 'pointer',
  },
  btnSection: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      cursor: 'pointer',
    },
  },
  logIn: {
    color: theme.palette.secondary.main,
    margin: '0 5px',
    fontWeight: 'bolder',
    padding: '1px',
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    cursor: 'pointer',
    '&:hover': {
      borderColor: 'transparent',
    },
  },
}));

const DesktopNav = () => {
  const classes = useStyles();
  return (
    <Toolbar className={'classes.toolBar'}>
      <Link to='/'>
        <img src={Logo} alt='logo' />
      </Link>
      <LocationBox />
      <TextField className={classes.searchBar} placeholder='Find Cars, Mobile Phones and more...' variant='outlined' />
      <div className={classes.searchButton}>
        <SearchIcon />
      </div>
      <Box component='div' className={classes.btnSection} marginX='15px'>
        <span className={classes.logIn}>Login</span>
        <img src={SellBtn} alt='sellBtn' />
      </Box>
    </Toolbar>
  );
};

export default DesktopNav;
