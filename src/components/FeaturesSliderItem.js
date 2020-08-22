import React from 'react';

const FeaturesSliderItem = props => (
  <div className="features-slider_item">
    <div className="features-img" style={props.style}></div>
    <div className="features-feature">{props.text}</div>
  </div>
);

export default FeaturesSliderItem;
