import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Prasanna</h2>
            <img
              src="https://i.pinimg.com/originals/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                 Experience Salesforce Consultant, aiming to become a full stack developer
             </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color:'whitesmoke'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    510-701-****
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',color:'whitesmoke'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    510-701-****
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',color:'whitesmoke'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    prasb.03@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;