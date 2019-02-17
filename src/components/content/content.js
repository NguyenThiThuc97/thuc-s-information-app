import React, { Component } from 'react';
import './content.css'
import './../header/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className = "col-sm-12">
                    <div className="row">
                        <div className="col-sm-4 bg-l-r-content">
                            <div className="header-content">
                                <div className="line"></div><br/>
                                <h3>Who am I?</h3>
                                <button className="btn-cus btn-download-cv"><FontAwesomeIcon icon="download"/>{' '}Download My CV</button>
                            </div>
                        </div>
                        <div className="col-sm-4 bg-center-content">
                            <div className="header-content">
                                <div className="line"></div><br/>
                                <h3>Personal Infor</h3>
                            </div><br/>
                            <p className="contentss"><b>Birthdate: </b>18/11/1997</p>
                            <p className="contentss"><b>Phone: </b>0374730687</p>
                            <p className="contentss"><b>Email: </b>ndtt8797@gmail.com</p>
                            <p className="contentss"><b>Skype: </b>chithienthithuc9297</p>
                            <p className="contentss"><b>Address: </b>Thu Duc Dist, HCM city, VietNam</p>
                        </div>
                        <div className="col-sm-4 bg-l-r-content">
                            <div className="header-content">
                                <div className="line"></div><br/>
                                <h3>My Expertise</h3>
                            </div><br/>
                            <label>
                                <FontAwesomeIcon icon="desktop"/>
                                <p className="contentss"><b>Web Design</b></p>
                            </label><br/>
                            <label>
                                <FontAwesomeIcon icon="keyboard"/>
                                <p className="contentss"><b>Web Development</b></p>
                            </label>
                        </div>
                    </div>
                    <div className="">
                        <div className="header-content">
                            <div className="line"></div><br/>
                            <h3>My Resume</h3>
                        </div>
                        <div className="row">
                        <div className="col-sm-4 home_box">
                                <div className="intro">
                                    <div className="x-content">
                                        <div className="header-content">
                                            <div className="line"></div><br/>
                                            <h3>Expertise <div className="icon-intro"><FontAwesomeIcon icon="toolbox"/></div></h3>
                                            <ul className="timeline">
                                                <li>
                                                    <a rel="noopener noreferrer" target="_blank" href="https://www.totoprayogo.com/#">Tiny Software Solutions</a>
                                                    <i className="float-right">Aug, 2018 - Jan, 2019</i>
                                                    <p>Internship and Fresher</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 home_box">
                                <div className="intro">
                                    <div className="x-content">
                                        <div className="header-content">
                                            <div className="line"></div><br/>
                                            <h3>Education <div className="icon-intro"><FontAwesomeIcon icon="university"/></div></h3>
                                            <ul className="timeline">
                                                <li>
                                                    <a rel="noopener noreferrer" target="_blank" href="https://www.totoprayogo.com/#">HCMUTE</a>
                                                    <i className="float-right">Sep, 2015 - 2019</i>
                                                    <p>Studying Software Technology</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 home_box">
                                <div className="intro">
                                    <div className="x-content">
                                        <div className="header-content">
                                            <div className="line"></div><br/>
                                            <h3>Skills <div className="icon-intro"><FontAwesomeIcon icon="tools"/></div></h3>
                                            <ul>
                                                <li>HTML/CSS
                                                    <div className="row line-margin">
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-active"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-active"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-active"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-inactive"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-inactive"></div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>NodeJS
                                                    <div className="row line-margin">
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-active"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-active"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-active"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-inactive"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-inactive"></div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>ReactJS
                                                    <div className="row line-margin">
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-active"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-active"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-active"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-inactive"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-inactive"></div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>DBMS
                                                    <div className="row line-margin">
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-active"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-active"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-active"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-inactive"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-inactive"></div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 home_box">
                                <div className="intro">
                                    <div className="x-content">
                                        <div className="header-content">
                                            <div className="line"></div><br/>
                                            <h3>Interests</h3>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <img alt="" className="interest-pic" src="https://cdn2.iconfinder.com/data/icons/music-sound-2/512/Music_14-512.png"/>
                                                    <label>Music</label>
                                                </div>
                                                <div className="col-sm-3">
                                                    <img alt="" className="interest-pic" src="https://cdn2.iconfinder.com/data/icons/electronics-solid-icons-vol-2/48/064-512.png"/>
                                                    <label>Gaming</label>
                                                </div>
                                                <div className="col-sm-3">
                                                    <img alt="" className="interest-pic" src="https://cdn4.iconfinder.com/data/icons/world-travel-guide/512/travel-13-512.png"/>
                                                    <label>Travel</label>
                                                </div>
                                                <div className="col-sm-3">
                                                    <img alt="" className="interest-pic" src="https://cdn3.iconfinder.com/data/icons/kitchen-utensils-1/512/Pan-512.png"/>
                                                    <label>Cooking</label>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 home_box">
                                <div className="intro">
                                    <div className="x-content">
                                        <div className="header-content">
                                            <div className="line"></div><br/>
                                            <h3>Languages <div className="icon-intro"><FontAwesomeIcon icon="microphone"/></div></h3>
                                            <ul>
                                                <li>English (Reading)
                                                    <div className="row line-margin">
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-active"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-active"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-active"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-inactive"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-inactive"></div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>English (Listen and Speaking)
                                                    <div className="row line-margin">
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-active"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-active"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-inactive"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-inactive"></div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="line-skill-inactive"></div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                            </div>
                </div>
            </div>
        );
    }
}

export default Content;