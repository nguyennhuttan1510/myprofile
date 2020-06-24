import React from 'react';
import PropTypes from 'prop-types';

const MenuSideBar = props => {
    return (
        <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
            <div className="text-center">
                <div className="author-img" style={{backgroundImage: 'url(https://icdn.dantri.com.vn/thumb_w/640/7a7517334e/2016/09/16/28-1474034881369.jpg'}} />
                <h1 id="colorlib-logo"><a href="index.html">Nguyễn Nhựt Tân</a></h1>
                <span className="position"><a href="#">Developer/Front-End</a> in VietNam</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
                <div id="navbar" className="collapse">
                <ul>
                    <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                    <li><a href="#" data-nav-section="about">About</a></li>
                    <li><a href="#" data-nav-section="services">Services</a></li>
                    <li><a href="#" data-nav-section="skills">Skills</a></li>
                    <li><a href="#" data-nav-section="education">Education</a></li>
                    <li><a href="#" data-nav-section="experience">Experience</a></li>
                    <li><a href="#" data-nav-section="work">Work</a></li>
                    <li><a href="#" data-nav-section="blog">Blog</a></li>
                    <li><a href="#" data-nav-section="contact">Contact</a></li>
                </ul>
                </div>
            </nav>
            <div className="colorlib-footer">
                <p><small>© 
                    Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by NguyenNhutTan
                    </small></p>
                <ul>
                <li><a href="#"><i className="icon-facebook2" /></a></li>
                <li><a href="#"><i className="icon-twitter2" /></a></li>
                <li><a href="#"><i className="icon-instagram" /></a></li>
                <li><a href="#"><i className="icon-linkedin2" /></a></li>
                </ul>
            </div>
        </aside>
    );
};

MenuSideBar.propTypes = {
    
};

export default MenuSideBar;