import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.scss";

import image1 from "../../assets/man.png";
import image2 from "../../assets/man (1).png";
import image3 from "../../assets/woman.png";
import image4 from "../../assets/man (2).png";

import { Stack } from "@mui/material";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <p style={{ fontSize: "1.5rem" }}>What our Clients say</p>
      <Slider {...settings}>
        <Stack
          textAlign="center"
          padding={4}
          boxShadow={2}
          className="testimonial-card-container"
        >
          <img className="testimonial-img" src={image1} alt="image1" />
          <p>
            "Tellus orci ac auctor augue mauris. Fringilla phasellus faucibus
            scelerisque eleifend donec pretium vulputate sapien. Est placerat in
            egestas erat imperdiet sed euismod nisi porta."
          </p>
          <p className="testimonial-name"> - Percival Perkins</p>
        </Stack>

        <Stack
          textAlign="center"
          padding={4}
          boxShadow={2}
          className="testimonial-card-container"
        >
          <img className="testimonial-img" src={image2} alt="image2" />
          <p>
            "Tellus orci ac auctor augue mauris. Fringilla phasellus faucibus
            scelerisque eleifend donec pretium vulputate sapien. Est placerat in
            egestas erat imperdiet sed euismod nisi porta."
          </p>
          <p className="testimonial-name"> - Ivor Hicks</p>
        </Stack>

        <Stack
          textAlign="center"
          padding={4}
          boxShadow={2}
          className="testimonial-card-container"
        >
          <img className="testimonial-img" src={image3} alt="image3" />
          <p>
            "Tellus orci ac auctor augue mauris. Fringilla phasellus faucibus
            scelerisque eleifend donec pretium vulputate sapien. Est placerat in
            egestas erat imperdiet sed euismod nisi porta."
          </p>
          <p className="testimonial-name"> - Diana Aguilar</p>
        </Stack>

        <Stack
          textAlign="center"
          padding={4}
          boxShadow={2}
          className="testimonial-card-container"
        >
          <img className="testimonial-img" src={image4} alt="image4" />
          <p>
            "Tellus orci ac auctor augue mauris. Fringilla phasellus faucibus
            scelerisque eleifend donec pretium vulputate sapien. Est placerat in
            egestas erat imperdiet sed euismod nisi porta."
          </p>
          <p className="testimonial-name"> - Dean Sims</p>
        </Stack>
      </Slider>
    </div>
  );
};

export default Testimonials;
