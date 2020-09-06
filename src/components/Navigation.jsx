import React, {Component} from 'react'
import '../css/main.css'

class Navigation extends Component {
    render() {
        return(
            <div className="nav-main">
                <div className="my-navbar">
                    <a href="www.google.com" className="nav-item">HOME</a>
                    <a href="www.google.com" className="nav-item">ABOUT US</a>
                    <a href="www.google.com" className="nav-item">CONTACTS</a>
                </div>
            </div>
        );
    }
}

export default Navigation;