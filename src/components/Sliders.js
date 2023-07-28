import React, { Component } from "react";
import Slider from "react-slick";
import app1 from "./images/office1.jpg";
import t2 from "./images/t2.jpg";
import t3 from "./images/t3.jpg";
import t4 from "./images/t4.jpg";
import t5 from "./images/t5.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500, 
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1, 
          }
        } 
      ]
    };
    return (
      <div className="testimonials">
        <div className="container">
          <div className="test_title">
            <h4>Perspiciatis unde omnis iste natus error sit omnis iste natus</h4>
          </div>
          <div className="slider1">
            <div className="sliderRight">
              <Slider className="cat" {...settings}>
                <div className="cat-item">
                  <div className="cat-item_info">
                    <div className="cat-item_left">
                      <img src={app1} alt="" />
                    </div>
                    <div className="cat-item_right">
                      <h3>Bonorum et Malorum</h3>
                      <p>" Et harum quidem rerum facilis est et expedita distinctio. Nam nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. "</p>
                    </div>
                  </div>
                </div>
                <div className="cat-item">
                  <div className="cat-item_info">
                    <div className="cat-item_left">
                      <img src={app1} alt="" />
                    </div>
                    <div className="cat-item_right">
                      <h3>Bonorum et Malorum</h3>
                      <p>" Et harum quidem rerum facilis est et expedita distinctio. Nam nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. "</p>
                    </div>
                  </div>
                </div>
                <div className="cat-item">
                  <div className="cat-item_info">
                    <div className="cat-item_left">
                      <img src={app1} alt="" />
                    </div>
                    <div className="cat-item_right">
                      <h3>Bonorum et Malorum</h3>
                      <p>" Et harum quidem rerum facilis est et expedita distinctio. Nam nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. "</p>
                    </div>
                  </div>
                </div>
                <div className="cat-item">
                  <div className="cat-item_info">
                    <div className="cat-item_left">
                      <img src={app1} alt="" />
                    </div>
                    <div className="cat-item_right">
                      <h3>Bonorum et Malorum</h3>
                      <p>" Et harum quidem rerum facilis est et expedita distinctio. Nam nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. "</p>
                    </div>
                  </div>
                </div>
                <div className="cat-item">
                  <div className="cat-item_info">
                    <div className="cat-item_left">
                      <img src={app1} alt="" />
                    </div>
                    <div className="cat-item_right">
                      <h3>Bonorum et Malorum</h3>
                      <p>" Et harum quidem rerum facilis est et expedita distinctio. Nam nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. "</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}