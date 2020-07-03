import React from 'react';
import img from './3.jpg';
const CardGreeting = (props) => {
  return (
    <section id="colorlib-hero" className="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight">
        <ul className="slides">
          <li
            style={{
              backgroundImage: 'url(' + img + ')'
            }}
          >
            <div className="overlay" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner js-fullheight">
                    <div className="desc">
                      <h1 style={{ color: 'ghostwhite' }}>
                        Hi! <br />
                        I'm Nguyễn Nhựt Tân
                      </h1>
                      <h2 style={{ color: 'ghostwhite' }}>
                        Contact me by Gmail: nguyentan15102000@gmail.com
                      </h2>
                      <p>
                        <a
                          className="btn btn-primary btn-learn"
                          style={{
                            color: 'ghostwhite',
                            borderColor: 'ghostwhite'
                          }}
                        >
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
                'url(https://scontent-hkg4-1.xx.fbcdn.net/v/t1.0-9/16265166_1690962461202860_8357382696118745082_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=gOcrVp2cGdoAX9_r5f0&_nc_ht=scontent-hkg4-1.xx&oh=706a860e24e2cd098ebc4f66831b6e7f&oe=5F229A21)'
            }}
          >
            <div className="overlay" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner">
                    <div className="desc">
                      <h1 style={{ color: 'ghostwhite' }}>
                        I am <br />a Developer
                      </h1>
                      <h2 style={{ color: 'ghostwhite' }}>
                        Contact me by Gmail: nguyentan15102000@gmail.com
                      </h2>
                      <p>
                        <a
                          className="btn btn-primary btn-learn"
                          style={{
                            color: 'ghostwhite',
                            borderColor: 'ghostwhite'
                          }}
                        >
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
