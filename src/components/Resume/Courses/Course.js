import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';

const Trigger = (data) => (
  <header className="header">
    <h4>{data.title}</h4>
    <p className="daterange">Credits: {data.credits} - Grade: {data.grade}</p>
  </header>
);

const Course = ({ data }) => (

  <article className="jobs-container">
    <Collapsible trigger={Trigger(data)}>
      <div className="courses">
        <ul className="points">
          {data.points.map((point) => (
            <li key={point}> {point}</li>
          ))}
        </ul>
      </div>
    </Collapsible>
  </article>
);

Course.propTypes = {
  data: PropTypes.shape({
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
    credits: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
  }).isRequired,
};

export default Course;
