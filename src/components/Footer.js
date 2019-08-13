import React, { Component } from 'react';
import { Segment, Container, Grid, Header, List } from 'semantic-ui-react'
import './Footer.css'

class Footer extends Component {

  render() {
    return (
      <Segment vertical inverted style={{ padding: '5em 0em' }} id="footer">
      <Container >
        <Grid divided inverted stackable>
          <Grid.Row id="footer-container">
            <Grid.Column width={4} className="footer-icon">
              <img id="realtor-logo" src="realtorLogo.png" />
            </Grid.Column>
            <Grid.Column width={4} className="footer-icon">
              <img id="keller-logo" src="kellerLogo.png" />
            </Grid.Column>
            <Grid.Column width={4}>

              <p id="address">
              11700 Plaza America Drive #150
              <br/>
Reston, Virginia 20190
<br/>
<div id="phone-number">703-651-6735</div>
              </p>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    );
  }

}

export default Footer;
