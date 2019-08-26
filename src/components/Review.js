import React, { Component } from 'react';
import { List, Icon } from 'semantic-ui-react'
import './Review.css'

class Review extends Component {

  render() {
    return (
      <List.Item>
      <img src={this.props.image} className="review-image"/>
      <div className="review-text">
      {this.props.text}
      </div>
      </List.Item>
    );
  }

}

export default Review;
