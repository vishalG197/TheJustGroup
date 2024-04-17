import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const link = [
  { title: "Portmans", link: "https://portmans.jgl.com.au/" },
  { title: "JayJays", link: "https://jayjays.jgl.com.au/" },
  { title: "dotti", link: "https://dotti.jgl.com.au/" },
  { title: "Jacqui E", link: "https://jacquie.jgl.com.au/" },
  { title: "Just Jeans", link: "https://justjeans.jgl.com.au/" },
];

const SliderComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://49.206.253.146:2109/getContent");
        const apiData = res.data;
        const mergedData = apiData.map(item => {
          const matchedItem = link.find(linkItem => linkItem.title === item.title);
          return {
            ...item,
            link: matchedItem ? matchedItem.link : '',
          };
        });
        setData(mergedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (link) => {
    console.log("link clicked:", link);
    window.open(link, "_blank");
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArrowDiv className={className} style={{ ...style, right: "20px" }} onClick={onClick}>
        <FaArrowRight />
      </ArrowDiv>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArrowDiv className={className} style={{ ...style, left: "20px" }} onClick={onClick}>
        <FaArrowLeft />
      </ArrowDiv>
    );
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: false,
    speed: 1000,
    pauseOnHover: true,
    arrows: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    onClick: (index) => handleImageClick(data[index].link),
  };

  return (
    <SliderDiv>
      {data.length > 0 && (
        <StyledSlider {...settings}>
          {data.map((item, index) => (
            <div key={index} onClick={() => handleImageClick(item.link)}>
              <img src={item.url} alt={item.title} />
            </div>
          ))}
        </StyledSlider>
      )}
    </SliderDiv>
  );
}

export default SliderComponent;

const SliderDiv = styled.div`
  cursor: pointer;
`;

const StyledSlider = styled(Slider)`
  .slick-slide img {
    width: 100%;
    height: auto;
  }
`;

const ArrowDiv = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;

  svg {
    width: 20px;
    height: 20px;
  }
`;
