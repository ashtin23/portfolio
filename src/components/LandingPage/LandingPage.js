import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <div className="image-container">
                            <img 
                                src="https://i.imgur.com/PpLmGuQ.jpg?1"
                                alt="avatar"
                                className="avatar-image"
                            />
                        </div>
                        
                        <div className="banner-text">
                            <h1>Full-Stack Web Developer</h1>

                            <hr />

                            <p>HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB</p>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/ashtin23/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/ashtin23" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>   
        )
    }
}

export default LandingPage;
