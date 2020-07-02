/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import datas from '../../data/cardproject.json';

const CardProject = () => {
  return (
    <section className="colorlib-services" data-section="services">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">What I do?</span>
            <h2 className="colorlib-heading">Here are some of my expertise</h2>
          </div>
        </div>
        <div className="row row-pt-md">
          {datas.map((data, key) => {
            return (
              <div key={key} className="col-md-4 text-center animate-box">
                <div className={data.color}>
                  <span className="icon">
                    <i className={data.icon} />
                  </span>
                  <div className="desc">
                    <h3>{data.titleFancy}</h3>
                    <p>{data.content}</p>
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

export default CardProject;
