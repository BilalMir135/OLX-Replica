import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import MenuWithLogo from './MenuWithLogo';
import SearchCategories from './SearchCategories';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  root:{
    display:'block',
    width: '100%',
    padding: '8px'
  },
  topSection:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    height:'50px',
    color: theme.palette.secondary.main
  },
  moveBack:{
    display: 'flex',
    justifyContent:'space-between',
    width: '100%',
    '& svg':{
      color:'#002f34',
    },
    '& p':{
      color:theme.palette.secondary.main,
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
      fontWeight: 'bolder'
    }
  },
  textfield:{
    backgroundColor: '#fff',
    width: '100%',
    margin: '4px 0',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: `2px solid ${theme.palette.secondary.main}`,
      },
      '& input':{
        padding: '10px 5px',
   }
    },
  }
}));

const MobileNav = () => {
  const classes = useStyles();
  const [showCategories, setShowCategories] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const handleSearchClick = () =>{
    setShowCategories(true);
    setShowLocation(false);
  }

  const handleBackClick = () =>{
    setShowCategories(false);
    setShowLocation(false);
  }
  return (
     <Toolbar className={classes.root}>
       <div className={classes.topSection}>
         {(showCategories || showLocation) ? 
            <div className={classes.moveBack}>
              <IconButton onClick={handleBackClick}><ArrowBackIcon/></IconButton>
              <p>Search</p>
            </div> : 
            <MenuWithLogo/>}
       </div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        className={classes.textfield}
        placeholder='Find Cars, Mobile Phones and more...'
        onClick={handleSearchClick}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {(showCategories || showLocation) && 
        <TextField
        id="outlined-basic"
        variant="outlined"
        className={classes.textfield}
        value='Karachi Motorway, Karachi'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />}
      {
        showCategories && <SearchCategories/>
      }
    </Toolbar>
  );
};

export default MobileNav;
