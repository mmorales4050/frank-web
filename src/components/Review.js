import React, { Component } from 'react';
import { List, Icon } from 'semantic-ui-react'
import './Review.css'

class Review extends Component {

  render() {
    return (
      <List.Item>
      <img src="review1.png" className="review-image"/>
      <div className="review-text">
      Frank was very reliable and on time. He was extremely knowledgeable about the entire Reston-Herndon area and I would recommend him to all my friends and family.
      </div>
      </List.Item>
    );
  }

}

export default Review;
