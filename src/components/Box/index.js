import React, { Component } from "react";

import { Container } from "./styles";

class Box extends Component {
  render() {
    return (
      <Container style={this.props.styles}>{this.props.children}</Container>
    );
  }
}

export default Box;
