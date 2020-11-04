import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell,  Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
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
            <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://code-projects.org/wp-content/uploads/2020/07/4.png) center / cover'}} ></CardTitle>
            <CardText>
              Weather Dashboard
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url() center / cover'}} >React Project #2</CardTitle>
            <CardText>
              Actor Search
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url() center / cover'}} >React Project #3</CardTitle>
            <CardText>
            Read Me generator            
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
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
                    <Grid className="projects-grid">
                        <Cell col ={12}>
                            <div className="content"> {this.toggleCategories}</div>
                        </Cell>
                    </Grid>
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }
}

export default Projects;