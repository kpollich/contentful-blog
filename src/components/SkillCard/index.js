import React, { Component } from "react";

import "./SkillCard.css";

class SkillCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  setActive = e => {
    e.preventDefault();
    this.setState({ isActive: true });
  };

  setInactive = e => {
    e.preventDefault();
    this.setState({ isActive: false });
  };

  render() {
    return (
      <div
        className="card skill-card"
        onMouseEnter={this.setActive}
        onMouseLeave={this.setInactive}
      >
        <h3>{this.props.title}</h3>

        {this.state.isActive &&
          <ul className="hover-reveal">
            {this.props.skills.map(skill => <li>{skill}</li>)}
          </ul>}
      </div>
    );
  }
}

export default SkillCard;
