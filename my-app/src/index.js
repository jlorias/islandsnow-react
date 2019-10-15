import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Icon, Image, Grid, Dropdown, Button, Form, List } from 'semantic-ui-react';

class TopMenu extends React.Component {
  state = { activeItem: '' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
        <Menu borderless icon>
          <Menu.Item
              name='facebook'
              active={activeItem === 'facebook'}
              onClick={this.handleItemClick}
          >
            <Icon name='facebook f' />
          </Menu.Item>

          <Menu.Item
              name='instagram'
              active={activeItem === 'instagram'}
              onClick={this.handleItemClick}
          >
            <Icon name='instagram' />
          </Menu.Item>

          <Menu.Item
              name='twitter'
              active={activeItem === 'twitter'}
              onClick={this.handleItemClick}
          >
            <Icon name='twitter' />
          </Menu.Item>

          <Menu.Item
              name='pinterest'
              active={activeItem === 'pinterest'}
              onClick={this.handleItemClick}
          >
            <Icon name='pinterest' />
          </Menu.Item>

          <Menu.Item
              position='right'
              name='search'
              active={activeItem === 'search'}
              onClick={this.handleItemClick}
          >
            <Icon name='search' />
          </Menu.Item>

          <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
          >
            <Icon name='home' />
          </Menu.Item>

          <Menu.Item
              name='user'
              active={activeItem === 'user'}
              onClick={this.handleItemClick}
          >
            <Icon name='user' />
          </Menu.Item>

          <Menu.Item
              name='cart'
              active={activeItem === 'cart'}
              onClick={this.handleItemClick}
          >
            <Icon name='cart' />
            <Dropdown text=' My Cart 0'>
              <Dropdown.Menu>
                <Dropdown.Item text='No items are in your cart' centered/>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu>

    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image
            src='//cdn.shopify.com/s/files/1/1035/5187/files/logoshort_800x.png?v=1543956749'
            size='medium'
            centered/>
    )
  }
}

class MiddleMenu extends React.Component {
  state = { activeItem: '' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
          <Menu
              borderless
              fluid widths={5}
              style={{ backgroundColor: '#ffffff'}}>
            <Menu.Item
                name='men'
                active={activeItem === 'men'}
                onClick={this.handleItemClick}
            >
              <Dropdown text='MEN'>
                <Dropdown.Menu>
                  <Dropdown.Item text='TANK TOPS' centered/>
                  <Dropdown.Item text='SHIRTS' centered/>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>

            <Menu.Item
                name='women'
                active={activeItem === 'women'}
                onClick={this.handleItemClick}
            >
              <Dropdown text='WOMEN'>
                <Dropdown.Menu>
                  <Dropdown.Item text='TANK TOPS' centered/>
                  <Dropdown.Item text='SHIRTS' centered/>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>

            <Menu.Item
                name='kids'
                active={activeItem === 'kids'}
                onClick={this.handleItemClick}
            >
              <Dropdown text='KIDS'>
                <Dropdown.Menu>
                  <Dropdown.Item text='ONESIES' centered/>
                  <Dropdown.Item text='SHIRTS' centered/>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>

            <Menu.Item
                name='brand'
                active={activeItem === 'brand'}
                onClick={this.handleItemClick}
            >
              <Dropdown text='BRAND'>
                <Dropdown.Menu>
                  <Dropdown.Item text='ALOHA SHIRT SOCIETY' centered/>
                  <Dropdown.Item text='AMUSE SOCIETY' centered/>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>

            <Menu.Item
                name='cart'
                active={activeItem === 'cart'}
                onClick={this.handleItemClick}
                text = 'SEARCH'
            >
            </Menu.Item>
          </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image
          src='https://pbs.twimg.com/profile_banners/52166793/1513663536/1500x500'
          fluid />
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Grid
            centered
            style={{ backgroundColor:'#333333', color: '#ffffff', padding: '10px 8px 10px 8px'}}
            columns='equal'
        >
          <Grid.Column>
              <List>
              NAVIGATION <hr />
              About Us <br />
              Videos <br />
              Store Locations <br />
              </List>
            </Grid.Column>

            <Grid.Column>
              <List>
              MAIN MENU <hr />
              Men <br />
              Women <br />
              Kids <br />
              </List>
            </Grid.Column>

            <Grid.Column>
              <List>
              CONNECT <hr />
              Sign up for the latest updates
                <Form>
                  <Form.Field>
                    <input placeholder='Email Address' />
                  </Form.Field>
                  <Button
                      type='submit'
                      floated='right'
                      style={{ backgroundColor: 'black', color: 'white' }}>Join</Button>
                </Form>
            </List>
            </Grid.Column>
        </Grid>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));