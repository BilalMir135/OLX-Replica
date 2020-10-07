import React, { useEffect, useRef } from 'react';

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

const OutsideClick = ({ callback, children }) => {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, callback);
  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClick;
