import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import "./Nav.css";

export default class MenuExamplePointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <>
      <div>



        <Menu pointing>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>


        
      </div>
      <div>
        
<div class="ui fixed borderless huge menu">
  
  <div class="ui container grid">
    
    
    <div class="computer only row">
    
      
      <div class="ui fluid popup bottom left transition hidden" >
        <div class="ui four column relaxed divided grid">
          <div class="column">
            <h4 class="ui header">Fabrics</h4>
            <div class="ui link list">
             
            </div>
          </div>
          <div class="column">
            <h4 class="ui header">Size</h4>
            <div class="ui link list">
            
            </div>
          </div>
          <div class="column">
            <h4 class="ui header">Colors</h4>
            <div class="ui link list">
            
            </div>
          </div>
          <div class="column">
            <h4 class="ui header">Types</h4>
            <div class="ui link list">
            
            </div>
          </div>
        </div>
      </div>
      
      
      <div class="right menu">
       
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search..."/>
            <i class="search link icon"></i>
          </div>
        </div>
         
        
        <a class="ui dropdown item">Select Country<i class="dropdown icon"></i>
          <div class="menu">
            <div class="item">
              <i class="ke flag"></i>
              Kenya
            </div>
            <div class="item">
              <i class="tz flag"></i>
              Tanzania
            </div>
            </div>
        </a>
        
      </div>
    </div>

    
   
    <div class="tablet mobile only row">
      <a class="header item"> Project Name</a>
      <div class="right menu">
        <a class="menu item">
          <div class="ui basic icon toggle button">
            <i class="content icon"></i>
          </div>
        </a>
      </div>
      <div class="ui vertical accordion borderless fluid menu">
        
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search..."/>
            <i class="search link icon"></i>
          </div>
        </div>
         
        <a class="active item"> Home</a>
        <a class="item"> About</a>
        <a class="item"> Contact</a>
        <div class="item">
          <div class="title">
            Dropdown<i class="dropdown icon"></i>
          </div>
          <div class="content">
            <div class="item">
              Action
            </div>
            <div class="item active">
              Another action
            </div>
            <div class="item">
              Something else here
            </div>
            <div class="ui divider"></div>
            <div class="header item">
              Navbar header
            </div>
            <div class="item">
              Seperated link
            </div>
            <div class="item">
              One more seperated link
            </div>
          </div>
        </div>
        <div class="ui divider"></div>
        <a class="item" href="#">Default</a>
        <a class="item" href="#">Static top</a>
        <a class="active item" href="#">Fixed top</a>
      </div>
    </div>
   
  </div>
</div>

<div class="ui container">
  <div class="ui message">
    <h1 class="ui huge header">
      Navbar example 
    </h1>
    <p class="lead">
      This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.
    </p>
    <p class="lead">
      To see the difference between static and fixed top navbars, just scroll.
    </p>
    <a class="ui big purple button">View navbar docs &raquo; </a>
  </div>
</div>
      </div>
      </>
    )
  }
}
