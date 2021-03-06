import React from 'react';
import PropTypes from 'prop-types';

const CardIndexPerson = (props) => {
  return (
    <div
      id="colorlib-counter"
      className="colorlib-counters"
      style={{
        backgroundImage:
          'url(https://media.ex-cdn.com/EXP/media.nhadautu.vn/files/news/2019/04/28/bao-in-tp-ho-chi-minh-dau-tau-kinh-te-112749.jpg)'
        // width: '100%'
      }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay" />
      <div className="colorlib-narrow-content">
        <div className="row"></div>
        <div className="row">
          <div className="col-md-3 text-center animate-box">
            <span
              className="colorlib-counter js-counter"
              data-from={0}
              data-to={265}
              data-speed={5000}
              data-refresh-interval={50}
            />
            <span className="colorlib-counter-label">Cups of coffee</span>
          </div>
          <div className="col-md-3 text-center animate-box">
            <span
              className="colorlib-counter js-counter"
              data-from={0}
              data-to={6}
              data-speed={5000}
              data-refresh-interval={50}
            />
            <span className="colorlib-counter-label">Projects</span>
          </div>
          <div className="col-md-3 text-center animate-box">
            <span
              className="colorlib-counter js-counter"
              data-from={0}
              data-to={5}
              data-speed={5000}
              data-refresh-interval={50}
            />
            <span className="colorlib-counter-label">Clients</span>
          </div>
          <div className="col-md-3 text-center animate-box">
            <span
              className="colorlib-counter js-counter"
              data-from={0}
              data-to={8}
              data-speed={5000}
              data-refresh-interval={50}
            />
            <span className="colorlib-counter-label">Partner</span>
          </div>
        </div>
      </div>
    </div>
  );
};

CardIndexPerson.propTypes = {};

export default CardIndexPerson;
