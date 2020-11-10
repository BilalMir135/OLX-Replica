import React, { useState, useRef, useEffect } from 'react';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Chervon from '../Chervon';
import Menu from './Menu';
import styles from './CategoryNav.module.css';
import OutsideClick from '../OutsideClick';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  popper: {
    zIndex: '100',
  },
}));

const AllCategories = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const prevOpen = useRef(open);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <div ref={anchorRef} onClick={handleToggle} className={styles.allCat}>
        ALL CATEGORIES
        <Chervon toggle={open} />
      </div>
      <Popper
        className={classes.popper}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} className={styles.menuWrapper}>
            <Paper>
              <OutsideClick activate={open} callback={() => setOpen(false)}>
                <Menu />
              </OutsideClick>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default AllCategories;
