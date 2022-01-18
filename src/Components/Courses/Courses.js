import React from "react";
import "./Courses.scss";
import Course from "./Course";
import Data from "../../Data.json";

function Courses() {
  return (
    <div className="courses">
      <h1 className="heading-primary">A broad selection of courses</h1>
      <p className="courses__para">
        Choose from 183,000 online video courses with new additions published
        every month
      </p>
      <div className="courses__course-box">
        {Data.map((data) => {
          return (
            <Course
              key={data.title}
              title={data.title}
              imgLink={data.imgLink}
              author={data.author}
              rating={data.rating}
              totalRating={data.totalRating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
