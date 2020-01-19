import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state={ activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://i.imgur.com/LFQFv7b.png) center / cover'}}>
                        </CardTitle>
                        <CardActions>
                            <a href="http://arl_robofriends.surge.sh/">Deployed App</a>
                        </CardActions>
                        <CardActions border>
                            <a href="https://github.com/ashtin23/robot_react_app">GitHub Repository</a>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://i.imgur.com/IGuqqd9.png) center / cover'}}>
                        </CardTitle>
                        <CardActions>
                            <a href="http://productivity-app.surge.sh/">Deployed App</a>
                        </CardActions>
                        <CardActions border>
                            <a href="https://github.com/ashtin23/productivity-app">GitHub Repository</a>
                        </CardActions>
                    </Card>
                </div>
                
            )
        }
    }

    
    
    render() {
        return(
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>   
        )
    }
}

export default Projects;
