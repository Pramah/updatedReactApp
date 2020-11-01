import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
class Projects extends Component {
    //initialize the class with a state
    //constructor
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
    toggleCategories() {
    if (this.state.activeTab === 0) {
        return (
            <div><h1>Weather Dashboard</h1></div>
        )
    } else if (this.state.activeTab === 1) {
        return (
            <div><h1>Actor Search</h1></div>
        )
    } else if (this.state.activeTab === 2) {
        return (
            <div><h1>ReadMe Generator</h1></div>
        )
    }
}
    render() {
        return (
            <div className="category-tabs"> 
                <Tabs 
                    activeTab={this.state.activeTab} 
                    onChange={(tabId) => this.setState({ activeTab:tabId})} ripple>
                    <Tab>Weather Dashboard</Tab>
                    <Tab>Actor Search</Tab>
                    <Tab>ReadMe Generator</Tab> 
                </Tabs>

                <section className="projects-grid">
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }
}

export default Projects;