import React, { Component } from 'react';
import { List, Icon } from 'semantic-ui-react'
import Review from './Review';

class ReviewPage extends Component {

  render() {
    return (
      <List divided relaxed id="review-list">
    <List.Item>
      <List.Content>
        <List.Header><Icon name="star" size="big"/><Icon name="star" size="big"/><Icon name="star" size="big"/><Icon name="star" size="big"/><Icon name="star" size="big"/>Highly likely to recommend</List.Header>
        <List.Description>08/03/2019 - David Logan</List.Description>
        <List.Description>Showed home in 2018 in South Lakes Dr - Soapstone Dr, Reston, VA 20191.</List.Description>
        <List.Description>Local knowledge: <Icon name="star" size="large"/><Icon name="star" size="large"/><Icon name="star" size="large"/><Icon name="star" size="large"/><Icon name="star" size="large"/></List.Description>
        <List.Description>Process expertise: <Icon name="star" size="large"/><Icon name="star" size="large"/><Icon name="star" size="large"/><Icon name="star" size="large"/><Icon name="star" size="large"/></List.Description>
        <List.Description>Responsiveness: <Icon name="star" size="large"/><Icon name="star" size="large"/><Icon name="star" size="large"/><Icon name="star" size="large"/><Icon name="star" size="large"/></List.Description>
        <List.Description>Negotiation skills: <Icon name="star" size="large"/><Icon name="star" size="large"/><Icon name="star" size="large"/><Icon name="star" size="large"/><Icon name="star" size="large"/></List.Description>
        <List.Description>
        Frank was very reliable and on time. He was extremely knowledgeable about the entire Reston-Herndon area and I would recommend him to all my friends and family.
        </List.Description>
      </List.Content>
    </List.Item>
    <Review />
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
        <List.Description as='a'>Updated 34 mins ago</List.Description>
      </List.Content>
    </List.Item>
  </List>
    );
  }

}

export default ReviewPage;
