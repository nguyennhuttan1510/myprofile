import React from 'react';
import datas from '../../data/cardedu.json';
import PropTypes from 'prop-types';

const CardEdu = (props) => {
  return (
    <section className="colorlib-education" data-section="education">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">Education</span>
            <h2 className="colorlib-heading animate-box">Education</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="fancy-collapse-panel">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div
                    className="panel-heading"
                    role="tab"
                    id={datas.firstly.labelledby}
                  >
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href={'#' + datas.firstly.controls}
                        aria-expanded={datas.firstly.expanded}
                        aria-controls={datas.firstly.controls}
                      >
                        {datas.firstly.title}
                      </a>
                    </h4>
                  </div>
                  <div
                    id={datas.firstly.href}
                    className="panel-collapse collapse in"
                    role="tabpanel"
                    aria-labelledby={datas.firstly.labelledby}
                  >
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-md-6">
                          <p>{datas.firstly.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {datas.second.map((data, key) => {
                  return (
                    <div className="panel panel-default" key={key}>
                      <div
                        className="panel-heading"
                        role="tab"
                        id={data.labelledby}
                      >
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href={'#' + data.href}
                            aria-expanded={data.expanded}
                            aria-controls={data.controls}
                          >
                            {data.title}
                          </a>
                        </h4>
                      </div>
                      <div
                        id={data.href}
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby={data.labelledby}
                      >
                        <div className="panel-body">
                          <p>{data.content}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CardEdu.propTypes = {};

export default CardEdu;
