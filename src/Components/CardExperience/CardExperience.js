import React from 'react';
import PropTypes from 'prop-types';
import datas from '../../data/cardexperience.json';

const CardExperience = (props) => {
  return (
    <section className="colorlib-experience" data-section="experience">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">Experience</span>
            <h2 className="colorlib-heading animate-box">Work Experience</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="timeline-centered">
              {datas.map((data, key) => {
                return (
                  <article
                    key={key}
                    className="timeline-entry animate-box"
                    data-animate-effect={data.effect}
                  >
                    <div className="timeline-entry-inner">
                      <div className={data.iconcolor}>
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <a href="#">{data.namework}</a>{' '}
                          <span>{data.time}</span>
                        </h2>
                        <p>{data.content}</p>
                      </div>
                    </div>
                  </article>
                );
              })}

              <article
                className="timeline-entry begin animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-none"></div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CardExperience.propTypes = {};

export default CardExperience;
