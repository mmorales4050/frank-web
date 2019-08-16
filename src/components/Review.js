import React, { Component } from 'react';
import { List, Icon } from 'semantic-ui-react'

class Review extends Component {

  render() {
    return (
      <List.Item>
      <Icon name="star"></Icon>
      </List.Item>
    );
  }

}

export default Review;
