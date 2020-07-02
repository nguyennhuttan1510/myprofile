import React from 'react';
import PropTypes from 'prop-types';

const CardGreeting = (props) => {
  return (
    <section id="colorlib-hero" className="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight">
        <ul className="slides">
          <li
            style={{
              backgroundImage:
                'url(https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/61884043_2135106970121738_6515165728163758080_o.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=25tahC3YN80AX9hcLGM&_nc_ht=scontent.fsgn5-3.fna&oh=8e17702fddcb12801f5029838ebb7f53&oe=5F2444FB)'
            }}
          >
            <div className="overlay" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner js-fullheight">
                    <div className="desc">
                      <h1>
                        Hi! <br />
                        I'm Nguyễn Nhựt Tân
                      </h1>
                      <h2>Contact me by Gmail: nguyentan15102000@gmail.com</h2>
                      <p>
                        <a className="btn btn-primary btn-learn">
                          Download CV <i className="icon-download4" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            style={{
              backgroundImage:
                'url(https://ss-images.catscdn.vn/wpm450/2019/02/14/4593857/e92df36e959f0bb4d7d1fb8ee410c7ef.jpg)'
            }}
          >
            <div className="overlay" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner">
                    <div className="desc">
                      <h1>
                        I am <br />a Developer
                      </h1>
                      <h2>Contact me by Gmail: nguyentan15102000@gmail.com</h2>
                      <p>
                        <a className="btn btn-primary btn-learn">
                          View Portfolio <i className="icon-briefcase3" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

CardGreeting.propTypes = {};

export default CardGreeting;
