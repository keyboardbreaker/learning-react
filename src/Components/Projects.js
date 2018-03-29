import React, { Component } from 'react';

//follows the structure of App.js
class Projects extends Component {
  render() {
    return (
      <div className="Projects"> 
            My Projects
            {this.props.test}
      </div>
    );
  }
}

//So we can use it in other files
export default Projects;
