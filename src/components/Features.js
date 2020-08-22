import React from 'react';
import FeaturesSliderItem from './FeaturesSliderItem';

const Features = () => {
  const featuresData = [
    { image: '1', text: 'Первое целевое преимущество' },
    { image: '2', text: 'Второе целевое преимущество' },
    { image: '3', text: 'Третье целевое преимущество' },
    { image: '4', text: 'Четвертое целевое преимущество' }
  ];
  const outputData = featuresData.map(item => <FeaturesSliderItem style={{ backgroundImage: `url(./images/${item.image}.svg)` }} 
                                                                  text={item.text}
                                                                  key={item.image} />);
  return (
    <section className="features">
      <div className="wrapper">
        <div className="features-wrapper">
          <h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
          <div className="features-subhead">О нас</div>
          <div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                                            сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
                                            оратору отточить.
          </div>
          <div className="features-slider">
            <div className="features-slider_items">
              {outputData}
            </div>
            <button className="features-slider-arrow features-slider-prev">
              <svg width="9" height="16"
                  xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                </path>
              </svg>
            </button>
            <button className="features-slider-arrow features-slider-next">
              <svg width="9"
                  height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                </path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;