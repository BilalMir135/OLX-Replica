import React from 'react';
import Logo from '../../assets/logo.svg';
import Location from '../../assets/location.svg';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles ={
    logo:{
        display:'flex',
        alignItems:'center',
        '& span':{
          marginRight:'5px',
          fontWeight: 'bolder'
        }
    },
}

const MenuWithLogo = () =>{
    return( 
        <React.Fragment>
        <div style={styles.logo}>
          <IconButton aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <img src={Logo} alt='logo' />
         </div>
         <div style={styles.logo}>
          <span>Karachi Motorway, Karachi</span>
          <img src={Location} alt='location' width='20px' height='20px'/>
         </div>
         </React.Fragment>
    )
}

export default MenuWithLogo;