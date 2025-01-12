import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image2 from "../../assets/Image2.jpg";
import Image3 from "../../assets/Image3.jpg";

const Carousel = () => {
  const ImageList = [
    {
      id: 2,
      img: Image2,
    },
    {
      id: 3,
      img: Image3,
    }
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="max-w-full w-full lg:w-[90%] mx-auto mb-5 mt-4 p-2">
      <div className="w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
        <Slider {...settings}>
          {ImageList.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden flex items-center justify-center relative"
            >
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
