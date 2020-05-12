import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div id="menu">
        <Menu pointing secondary>
          <div>
            <h1 className="logo-text">Fridge Inventory</h1>
          </div>
          <Menu.Item
            name='Vegetables + fruits'
            active={activeItem === 'Vegetables + fruits'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Dairy'
            active={activeItem === 'Dairy'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Sauces'
            active={activeItem === 'Sauces'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='settings'
              active={activeItem === 'settings'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}