import React from 'react';
import PropTypes from 'prop-types';

const InfoPerson = props => {
    return (
        <section className="colorlib-about" data-section="about">
            <div className="colorlib-narrow-content">
            <div className="row">
                <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                    <div className="col-md-12">
                    <div className="about-desc">
                        <span className="heading-meta">About me</span>
                        <h2 className="colorlib-heading">Who Am I?</h2>
                        <p><strong>Hi I'm Nuyễn Nhựt Tân</strong> 
                            I was born and raised in Vietnam, I spent a lot of time on improving experience than studying at school. The remaining time I work part time to learn more skills, it will help me later, in addition it also helps me earn income. In particular, I am very interested in programming, it is highly applicable and can be creative. My desire is to be able to webside programming for people to create value in their work, themselves, their lives..</p>
                        <p>One day, I was disgusted when an application, webside, didn't have what I needed. It does not help my life. and then I learned more and decided to make them by myself with my learning and experience.</p>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                    <div className="services color-1">
                        <span className="icon2"><i className="icon-bulb" /></span>
                        <h3>Front-End</h3>
                    </div>
                    </div>
                    <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                    <div className="services color-2">
                        <span className="icon2"><i className="icon-globe-outline" /></span>
                        <h3>Develop Web</h3>
                    </div>
                    </div>
                    <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                    <div className="services color-3">
                        <span className="icon2"><i className="icon-data" /></span>
                        <h3>DataBase</h3>
                    </div>
                    </div>
                    <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                    <div className="services color-4">
                        <span className="icon2"><i className="icon-phone3" /></span>
                        <h3>Application</h3>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                    <div className="hire">
                        <h2>I am happy to know you <br />that 5+ projects done sucessfully!</h2>
                        <a href="#" className="btn-hire">Hire me</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
};

InfoPerson.propTypes = {
    
};

export default InfoPerson;