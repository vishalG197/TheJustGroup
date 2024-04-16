import React, { useEffect,  useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const link = [
  { title: "Portmans", link: "https://portmans.jgl.com.au/" },
  { title: "JayJays", link: "https://jayjays.jgl.com.au/" },
  { title: "dotti", link: "https://dotti.jgl.com.au/" },
  { title: "Jacqui E", link: "https://jacquie.jgl.com.au/" },
  { title: "Just Jeans", link: "https://justjeans.jgl.com.au/" },
];

const Slider = () => {
  const [data, setData] = useState([]);
  const [autoPlay, setAutoPlay] = useState(false);
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
    const autoplayTimeout = setTimeout(() => {
      setAutoPlay(true);
    }, 1000);
    return () => clearTimeout(autoplayTimeout);  }, []);

  const handleImageClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <SliderDiv>
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        transitionTime={1000}
      >
        {data.map((item, index) => (
          <div key={index} onClick={() => handleImageClick(item.link)}>
            <img src={item.url} alt={item.title} />
          </div>
        ))}
      </Carousel>
    </SliderDiv>
  );
}

export default Slider;

const SliderDiv = styled.div`
  /* Add your styles here */
`;


// const CustomArrow = styled.button`
//   background-color: #ccc;
//   border: none;
//   color: white;
//   font-size: 36px; /* Increase the font size of the arrow */
//   padding: 10px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #999;
//   }

//   &:disabled {
//     cursor: not-allowed;
//     opacity: 0.5;
//   }
// `;