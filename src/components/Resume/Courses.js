import React from 'react';
import PropTypes from 'prop-types';
import Course from './Courses/Course';

const getRows = (courses) => courses.sort((a, b) => {
  let ret = 0;
  if (b.credits < a.credits || b.grade === 'Suoritettu') ret = -1;
  else if (b.credits > a.credits) ret = 1;
  else if (a.grade > b.grade || b.grade === 'Suoritettu') ret = -1;
  else if (a.grade < b.grade) ret = 1;
  return ret;
}).map((course, idx) => (
  <Course
    data={course}
    key={course.title}
    last={idx === courses.length - 1}
  />
));

const courseCredits = (courses) => courses.reduce((a, b) => a + b.credits, 0);

const gpa = (courses) => courses.filter(({ grade }) => grade !== 'Suoritettu').reduce((a, b, i, array) => a + parseInt(b.grade, 10) / array.length, 0).toFixed(2);

const Courses = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="courses" />
    <div className="title">
      <h3>Completed Courses</h3>
      <p>Course information in Finnish or English depending on the course language.</p>
    </div>
    <div className="course-info-container">
      <span className="course-info">Courses: {data.length}</span>
      <span className="course-info">Credits: {courseCredits(data)}</span>
      <span className="course-info">Grade Point Average: {gpa(data)}</span>
    </div>
    <ul className="course-list">
      {getRows(data)}
    </ul>
  </div>
);

Courses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    grade: PropTypes.string,
    credits: PropTypes.number,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
