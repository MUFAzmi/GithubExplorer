import React, { Component } from 'react';
import './materialize.min.css';

class Navbar extends Component
{
    render()
    {
        return <div>
            <nav className="grey darken-3">
    <a href="#" className="brand-logo">{this.props.title}</a>
            </nav>
        </div>
    }
}
export default Navbar;