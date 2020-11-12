import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '20px 0',
    fontSize: '12px',
    '& a': {
      color: 'rgba(0,47,52,.64)',
    },
  },
}));

const Product = ({ nav }) => {
  const classes = useStyles();

  return (
    <Breadcrumbs className={classes.root} aria-label='breadcrumb'>
      <Link to='/'>Home</Link>
      {nav.map((item, index) => (
        <Link key={index} to={item.link}>
          {item.text}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default Product;
