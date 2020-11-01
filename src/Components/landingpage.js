import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style = {{width : '100%', margin: 'auto'}}>
                <Grid className= "landing-grid">
                    <Cell col = {12}></Cell>
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
                    </div>
                </Grid>          
            </div>
        )
    }
}

export default Landing;