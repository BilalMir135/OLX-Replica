import React from 'react';
import './ThemeButton.css';

const ThemeButton = ({ component, onClick, children, className, btnProps, dark, size }) => {
  if (component === 'button') {
    return (
      <button
        className={`${className} themeBtn ${dark ? 'btn-dark' : 'btn-light'} ${size}`}
        onClick={onClick}
        {...btnProps}
      >
        <span>{children}</span>
      </button>
    );
  }
};

export default ThemeButton;
