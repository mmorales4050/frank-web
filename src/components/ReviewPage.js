import React, { Component } from 'react';
import { List, Icon } from 'semantic-ui-react'
import Review from './Review';

class ReviewPage extends Component {

  render() {
    return (
      <List divided relaxed id="review-list">
    <Review />
    <Review />
  </List>
    );
  }

}

export default ReviewPage;
