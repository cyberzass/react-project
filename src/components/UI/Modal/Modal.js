import React from 'react';

import classes from './Moda.module.css';

const modal = (props) => (
  <div className={classes.Modal}>
    {props.children}
  </div>
);

export default modal;
