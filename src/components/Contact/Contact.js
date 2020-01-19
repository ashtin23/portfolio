import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ashtin Latting</h2>
            <img
              src="https://i.imgur.com/eiZVSB9.png?4"
              alt="avatar"
              style={{ height: "250px" }}
            />
          </Cell>
          <Cell col={6}>
            <h2>Contact me</h2>
            <hr />

            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '29px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (937) 545-6673
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: '29px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    ashtin.latting@gmail.com
                </ListItemContent>
              </ListItem>
            </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
