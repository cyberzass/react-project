import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import classes from './Person.module.css';

class Person extends Component {
  // constructor(props) {
  //   super(props);
  //   this.inputElRef = React.createRef();
  // }

  componentDidMount () {
    //this.inputElRef.current.focus();
    // this.inputElRef.focus();
    // console.log(this.inputElRef);
  }

  render() {
    return (
      <Aux>
        <div className={classes.Person}>
          <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
          <p>{this.props.children}</p>
          <input
            type="text"
            //ref={this.inputElRef}
            ref={(inputEl) => {console.log(inputEl)}}
            value={this.props.name}
            onChange={this.props.changed} />
        </div>
      </Aux>
    );
  }
}

export default Person;
