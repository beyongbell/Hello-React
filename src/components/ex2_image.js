import React from "react";
import PropTypes from "prop-types";

export default function ex2_image(props) {
  return (
    <div>
      <img src="/logo512.png" alt="" height="100" />
      Count Image :{props.count}
      {props.image && <img src="{props.image}" alt="" />}
      <p> Text : {props.text} </p>
    </div>
  );
}

// PropTypes
ex2_image.propTypes = { count: PropTypes.number };
