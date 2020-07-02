/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import datas from '../../data/cardrecentwork.json';

const CardRecentWork = () => {
  return (
    <section className="colorlib-work" data-section="work">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">My Work</span>
            <h2 className="colorlib-heading animate-box">Recent Work</h2>
          </div>
        </div>
        <div
          className="row row-bottom-padded-sm animate-box"
          data-animate-effect="fadeInLeft"
        >
          <div className="col-md-12">
            <p className="work-menu">
              <span>
                <a href="#" className="active">
                  Graphic Design
                </a>
              </span>{' '}
              <span>
                <a href="#">Web Design</a>
              </span>{' '}
              <span>
                <a href="#">Software</a>
              </span>{' '}
              <span>
                <a href="#">Apps</a>
              </span>
            </p>
          </div>
        </div>
        <div className="row">
          {datas.map((data, key) => {
            return (
              <div
                key={key}
                className="col-md-6 animate-box"
                data-animate-effect={data.effect}
              >
                <div
                  className="project"
                  style={{ backgroundImage: 'url(' + data.image + ')' }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">{data.nameWork}</a>
                      </h3>
                      <span>{data.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardRecentWork;
