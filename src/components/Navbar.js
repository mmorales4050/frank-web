import React, { Component } from 'react'
import { Menu, Segment , Header} from 'semantic-ui-react'

export default class Navbar extends Component {

  render() {

    return (
        <Menu secondary fixed='top' id="nav-bar">
        <Menu.Item name="FRANK BOWEN" className="title-name" id="home" onClick={this.props.handleClick}/>
          <Menu.Item name='BUYERS' onClick={this.props.handleClick} id="buyer"/>
          <Menu.Item
            name='SELLERS' onClick={this.props.handleClick} id="seller"
          />
          <Menu.Item
            name='FAMILIES HELPED'
          />
          <Menu.Item name='CONTACT'/>
        </Menu>
    )
  }
}
