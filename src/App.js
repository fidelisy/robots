import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import { robots } from './robots';
import './App.css';


class App extends Component {
    constructor() {
        super() 
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

   onSearchChange = (event) => {
       this.setState({ searchfield: event.target.value })  
    
   }

    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase()
            .includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>loading</h1>
        } else {
     return (
        <div className='tc'>
            <h1> Robofriends </h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <scroll>
            <CardList robots={filteredRobots}/>
            </scroll>
        </div>
        );
     }
  }
}

export default App;