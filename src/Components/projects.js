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

        </div>
        )
    } else if (this.state.activeTab === 1) {
        return (
            <div>
              
              {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://github.com/Pramah/project-1/blob/master/assets/pictures/actor-search.gif?raw=true) center / cover'}} ></CardTitle>
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
            </div>
        )
    } else if (this.state.activeTab === 2) {
        return (
          <div>          
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://raw.githubusercontent.com/fondofhats/workday-scheduler/master/workday-scheduler.png) center / cover'}} ></CardTitle>
            <CardText>
            Calender Event          
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
                    <Tab>Calender Event</Tab> 
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