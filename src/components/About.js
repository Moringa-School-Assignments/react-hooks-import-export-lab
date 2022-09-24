import React from "react";

function About() {
  const image = "https://c.pxhere.com/photos/72/e1/man_guy_male_black_and_white_beard-1389085.jpg!d"
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
