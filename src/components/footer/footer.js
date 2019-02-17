import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <div className = "footer">
                <div className="float-left footer-mr">
                    Copyright © 2018 thucthucCute_ahihi.
                </div>
                <div className="float-right footer-mr">
                    <ul className="logo">
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/NTThucTV97">
                                <img alt="" className="img-logo" src="https://public-assets.envato-static.com/assets/header-footer/social/twitter-eb1c91b55d0de5dc2531864ca586dfd126f47265a6a2ac45eaf42ecfec1d80fe.svg"/>
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://facebook.com/ndtt8797">
                                <img alt="" className="img-logo" src="https://public-assets.envato-static.com/assets/header-footer/social/facebook-6999049d3775a8a8707c857da80446b19ffc0a01c35d13b74517100844ff3faa.svg"/>
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCdQscwFV7aR5TGgXieiDujA">
                                <img alt="" className="img-logo" src="https://public-assets.envato-static.com/assets/header-footer/social/youtube-b1b0afe6502def949dbef299d02d5d9f594e49f8fafcdf0d7ae10a118a086b67.svg"/>
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/nguyenthithuc97">
                                <img alt="" className="img-logo" src="https://public-assets.envato-static.com/assets/header-footer/social/instagram-fc36708c12541f7b4a0b25cc4d5626226ceac438010037288b2be588fcadbce3.svg"/>
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/NguyenThiThuc97">
                                <img alt="" className="img-logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;