/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import datas from '../../data/cardskill.json';

const CardSkill = () => {
  return (
    <section className="colorlib-skills" data-section="skills">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">My Specialty</span>
            <h2 className="colorlib-heading animate-box">My Skills</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <p>{datas.titleContent}</p>
          </div>
          {datas.indexSkill.map((data, key) => {
            return (
              <div
                key={key}
                className="col-md-6 animate-box"
                data-animate-effect={data.effect}
              >
                <div className="progress-wrap">
                  <h3>{data.title}</h3>
                  <div className="progress">
                    <div
                      className={data.color}
                      role="progressbar"
                      aria-valuenow={data.valuenow}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: data.valuenow + '%' }}
                    >
                      <span>{data.valuenow + '%'}</span>
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

export default CardSkill;
