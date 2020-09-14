import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div>
               <h1>About this App</h1>
               <h3> Search Engine for Github Users</h3> 
               <p>This project uses the Github API to fetch user profiles and their repositories</p>
               <h4> V:1.0.0 </h4>
            </div>
        )
    }
}

export default About
