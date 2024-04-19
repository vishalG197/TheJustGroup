import React from 'react'

import brand1 from '../assets/justjean.png'
import brand2 from '../assets/dotti.png'
import brand3 from '../assets/jacqui.png'
import brand4 from '../assets/jayjean.png'
import brand5 from '../assets/Lavis.png'
import brand6 from '../assets/calvin.png'
import brand7 from '../assets/curve.png'
import brand8 from '../assets/gap.png'
import brand9 from '../assets/gh-logo.png'
import brand10 from '../assets/guess.png'
import brand11 from '../assets/jackandjones.png'
import brand12 from '../assets/Nydj.png'
import brand13 from '../assets/pa.png'
import brand14 from '../assets/portmans.png'
import brand15 from "../assets/Riders.png"
import brand16 from "../assets/wrangler.png"
import styled from 'styled-components'

const MoreBrand = () => {
    return (
        <BrandDiv>
            <p><b>MORE BRANDS. ONE CHECKOUT. ONE DELIVERY.</b></p>
            <div>
               <a href=""> <img src={brand1} alt="justjean" /></a>
                <a href=""><img src={brand2} alt="dotti" /></a>
                <a href=""><img src={brand3} alt="jacquiE"/></a>
                <a href=""><img src={brand4} alt="jayjeans"/></a>
               <a href=""><img src={brand14} alt="portmans" /></a> 
                <img src={brand4} alt="jayjeans" />
                <img src={brand5} alt="" />
                <img src={brand6} alt="" />
                <img src={brand7} alt="" />
                <img src={brand8} alt="" />

                <img src={brand9} alt="" />
                <img src={brand10} alt="" />
                <img src={brand11} alt="" />
                <img src={brand12} alt="" />
                <img src={brand13} alt="" />

                <img src={brand15} alt="" />
                <img src={brand16} alt="" />
                
            </div>

        </BrandDiv>
    )
}


export default MoreBrand;

const BrandDiv = styled.div`
    max-width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    padding: 50px 0;
    background-color: #FDF7E4;

    p {
        font-size: 14px;
        text-align: center;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 20px;
    }

    img {
        width: 100px; /* Adjust the width as needed */
        height: 100px; /* Adjust the height as needed */
        object-fit: contain;
        margin: 0;
    }

    @media (max-width: 768px) {
        img {
            width: 80px; /* Adjust the width as needed */
            height: 80px; /* Adjust the height as needed */
        }
    }

    @media (max-width: 480px) {
        img {
            width: 60px; /* Adjust the width as needed */
            height: 60px; /* Adjust the height as needed */
        }
    }
`;