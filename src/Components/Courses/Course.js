import React from "react";
import "./Course.scss";

import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

function Course({ title, imgLink, rating, totalRating, author }) {
  return (
    <div className="course">
      <img src={imgLink} alt="course name" className="course__img" />
      <h3 className="heading-tertiary">{title}</h3>
      <p className="course__author">{author}</p>
      <div className="course__detail">
        <p className="course__rating">{rating}</p>
        <div className="course__icon-box">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
        </div>
        <p className="course__total-rating">({totalRating})</p>
      </div>
      <p className="course__price">$10</p>
    </div>
  );
}

export default Course;
