import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style = {{width : '100%', margin: 'auto'}}>
                <Grid className= "landing-grid">
                    <Cell col = {12}>
                    <img 
                    src="https://i.pinimg.com/originals/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4.png"
                    alt="avatar"
                    className="avatar-img" />
                    <div className="banner-text">
                        <h1> Full Stack Developer</h1>
                        <hr/>
                        <p>
                            HTML/CSS |
                            JQuery |
                            JavaScript |
                            React |
                            NodeJS |
                            TypeScript |
                            MySQL
                        </p>
                        <div className="social-links">
                            {/* Linkedin Link */}
                            <a href="https://www.linkedin.com/in/prasanna-b-9811bb158/" rel ="linkedin" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>
                            {/* GitHub Link */}
                            <a href="https://github.com/Pramah" rel ="github" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>          
        </div>
        )
    }
}

export default Landing;