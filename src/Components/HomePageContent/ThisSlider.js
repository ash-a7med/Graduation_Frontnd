import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ThisSlider.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const ThisSlider = () => {
  return (
    <div className="description-slider">
      <Slider {...sliderSettings}>
        <div>
          <p>This is the first description slide.</p>
        </div>
        <div>
          <p>This is the second description slide.</p>
        </div>
        <div>
          <p>This is the third description slide.</p>
        </div>
      </Slider>
    </div>
  );
};

export default ThisSlider;
