import React, { Component } from 'react';
import './header.css'
import logo from '../../logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <div className="bg"></div>
                <img src={logo} className="App-logo" alt="logo" />
                <div className = "caption">
                    <span className = "border">Nguyễn Thị Thức</span><br/><br/>
                    <span className = "border">Web developer</span>
                </div>
                
                <button type = "button" className = "btn-cus btn-print-cv" value = "" onClick = {this.btn_click}><FontAwesomeIcon icon="print"/>{' '}Print Out My CV</button>
                <div className="header-ques">
                    Do you have any questions? Write to me at <p className="header-quess"><FontAwesomeIcon icon="envelope" size="sm" />{' '}ndtt8797@gmail.com</p>
                </div>
                <img className = "img-middle" src = "https://www.lumixgexperience.panasonic.co.uk/app/uploads/gallery/AdamTrevor/Flower_HDR.jpg" alt="My Profile"/>
            </header>
        );
    }
    btn_click = () => {
        alert("hihi")
    }
}

export default Header;