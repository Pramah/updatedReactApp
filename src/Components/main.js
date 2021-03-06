import React from 'react';
import LandingPage from './landingpage';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';
import AboutMe from './aboutme';
import { Switch, Route } from 'react-router-dom';

const Main = ( ) => (
    <Switch>
        <Route exact path ="/" component={LandingPage}/> 
        <Route path ="/aboutme" component={AboutMe}/>  
        <Route path ="/contact" component={Contact}/>  
        <Route path ="/projects" component={Projects}/>  
        <Route path ="/resume" component={Resume}/>  
    </Switch>
)

export default Main;