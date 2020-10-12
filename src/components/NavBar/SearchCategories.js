import React from 'react';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ReceiptIcon from '@material-ui/icons/Receipt';
import styles from './NavBar.module.css';

const SearchCategories = () =>{
    return(
        <div className={styles.searchCategories}>
            <span>POPULAR CATEGORIES</span>
            <div>
                <PhoneIphoneIcon/>
                Mobiles
            </div>
            <div>
                <DriveEtaIcon/>
                Vehicles
            </div>
            <div>
                <ReceiptIcon/>
                Property for sale
            </div>
            <div>
                <ReceiptIcon/>
                Property for rent
            </div>
        </div>
    )
}

export default SearchCategories;