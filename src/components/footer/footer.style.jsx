import styled from "styled-components";
import FooterImage from "../../assets/footer-image.avif";
import { devices } from "../constants/screens";

export const FooterContainer = styled.footer`
    height: 50vh;
    background-image: url(${FooterImage});
    background-position: center 35%;
    background-size: cover;
    background-repeat: no repeat;
    font-family: "Montserrat", sans-serif ;
    font-weight:100;
    .imagebg{
        background-color: rgba(0,0,0,0.5);   
        height: 100%;
    }
    h2 {
      font-weight: 500;
      font-size: .9rem;
      padding-bottom: .2rem;
      text-transform:uppercase;
      @media only screen and ${devices.sm} {
        padding-bottom: 1rem;
        font-size:1.2rem
       }
    }
    h4{
       margin-top: 1.2rem;
      font-weight: 300;
      font-size: 0.8rem
    }
    .footer__sections{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        padding: 2px;
        text-align:center;
        @media only screen and ${devices.sm} {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            padding: 30px;
        }
        div{
            color: #fff;
            font-size:1rem
        }
        .footer__section{
          display:flex;
          flex-direction:column;
          
        }
    }
  

   .socials{
      display: flex;
      gap: 2rem;
      font-size: 1.4rem;
      margin-top: 1.8rem;
      align-items: center;
      justify-content: center;
        a{
            color:white !important;
        }
    }
   
   .footer__close {
      color:white;
      margin:1rem 6px;
      font-size:0.4rem!important;

      @media only screen and ${devices.sm} {
        margin:2rem auto;
        font-size:0.8rem!important;
    }
    @media only screen and ${devices.xxs} {
      margin:.3rem 6px;
      font-size:5px!important;
  }
    }
  .
`;
