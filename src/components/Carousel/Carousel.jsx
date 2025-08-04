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

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="w-full h-full p-0 m-0">
      <div className="w-full h-[500px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
        <Slider {...settings}>
          {ImageList.map((item) => (
            <div
              key={item.id}
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src={item.img}
                alt="carousel slide"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
