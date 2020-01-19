import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avater"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Ashtin Latting</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>109 Queen St NE, Leesburg, VA 20176</p>
            <h5>Phone</h5>
            <p>(937) 545-6673</p>
            <h5>Email</h5>
            <p>ashtin.latting@gmail.com</p>
            <a href="https://docs.google.com/document/d/1aKJ6ZUbnFbvyAVv0A0UxMsPgr8ywobBAq18ias95AK0/edit">
              Download Resume
            </a>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            
            <Education
              startYear={2019}
              endYear={2019}
              schoolName="General Assembly"
              schoolDescription="Full-stack software engineering student at an intensive, thirteen-week program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. "
            />

            <Education
              startYear={2015}
              endYear={2018}
              schoolName="George Washington University"
              schoolDescription="BA in Economics"
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>

            <h2>Experience</h2>

            <Experience 
                startYear={2011}
                endYear={2015}
                jobName="U.S. Navy"
                jobDescription=
                  "While in the Navy, I analyzed surface and air contacts using state-of-the-art detection radars and used impeccable judgement to determine intentions and reported information to on-site and off-site personnel to mitigate and manage risks.
                  I also trained 75+ sailors to properly operate and maintain 30 radar repeater display consoles, using hands-on coaching and interpersonal communication skills.
                  Finally, I delegated operational and maintenance assignments to subordinates as work center supervisor, leveraging Excel spreadsheet expertise and project management/leadership skills throughout seven deployments."
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Skills</h2>


            <Skills 
                skill="HTML/CSS"
                progress={80}
            /> 
            <Skills 
                skill="JavaScript"
                progress={75}
            />   
            <Skills 
                skill="React"
                progress={60}
            />  
             
            <Skills 
                skill="NodeJS"
                progress={70}
            />
            <Skills 
                skill="Express"
                progress={60}
            />
            <Skills 
                skill="MongoDB"
                progress={50}
            />

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
