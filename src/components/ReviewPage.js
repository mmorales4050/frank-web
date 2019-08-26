import React, { Component } from 'react';
import { List, Icon } from 'semantic-ui-react'
import Review from './Review';

class ReviewPage extends Component {

  render() {
    return (
      <List divided relaxed id="review-list">
    <Review
    image="review1.png"
    text="Frank was very reliable and on time. He was extremely knowledgeable about the entire Reston-Herndon area and I would recommend him to all my friends and family."
    />
    <Review
    image="review2.png"
    text="Frank was extremely helpful when my fiance and I were searching for an apartment! He was knowledgeable of the areas, and was very personable! After a full day of apartment tours, we were having a difficult making our final decision. The next day, Frank was kind enough to look at another apartment   last minute, per our request, that we are now happily renting. I would highly recommend Frank to anyone seeking a realtor; he made the apartment search experience easy and enjoyable!"
    />
    <Review
    image="review3.png"
    text="Frank's calm and supportive demeanor was so critical to my buying process.  I was at times indecisive and he was patient enough to accommodate 3 or 4 showings of the unit I ultimately purchased, as well as taking the time to show me others in the same subdivision.  I highly recommend him!"
    />
    <Review
    image="review4.png"
    text="We don't have enough words to thank Frank Bowen and Nikki Lagouros at Keller Williams. Frank responded very quickly on a Sunday morning to our request to visit a home that had just been put on the market. We discovered that we had to make an offer by 5pm that day because there were already multiple   offers on the house. Frank and his team walked us through every single step of the process and the bidding war, and thanks to them, we got the house! We felt in good hands from the day we made an offer until the day we closed. As first-time buyers, the process can seem stressful and confusing, but we felt in good hands and trusted his expertise. Frank is a young, ambitious, and hard-working man, and his professionalism is only rivalled by his kindness and diligence. We would work again with him in a heartbeat."
    />
    <Review
    image="review5.png"
    text="Frank is a diligent go getter!  He kept after this lease deal and a very slow moving agent on the other side.  We greatly appreciated how accommodating he was in showing us the property several times and guiding the review of terms.  I would highly recommend frank."
    />
  </List>
    );
  }

}

export default ReviewPage;
