import styled from "styled-components";
import { devices } from "../../components/constants/screens";
export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media only screen and ${devices.sm} {
    padding: 5rem;
  }
  .emptyCart {
    margin: 5rem auto;
    align-self: center;
    font-size: 1.5rem;
    word-spacing: 2px;
    @media only screen and ${devices.sm} {
      font-size: 2.5rem;
    }
    @media only screen and ${devices.lg} {
      font-size: 3rem;
    }
    @media only screen and ${devices.xxs} {
      font-size: 1rem;
    }
    a {
      -webkit-text-stroke: 0.5px #0b0b45;
      -webkit-text-fill-color: transparent;
      transition: all 400ms ease;
      &:hover {
        -webkit-text-fill-color: ##0b0b45;
      }
    }
  }
  .paystack-button {
    width: 50%;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 10px;
    margin: 3rem auto;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    border: 1px solid black;
    &:hover {
      color: black;
      background-color: #fff;
    }
    @media only screen and ${devices.sm} {
      width: 30%;
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 25px;
    @media only screen and ${devices.sm} {
      font-size: 36px;
    }
  }
`;
export const CheckoutHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  gap: 1rem;
  padding-bottom: 1rem;
  font-size: 0.8rem;

  @media only screen and ${devices.sm} {
    font-size: 1rem;
  }
  @media only screen and ${devices.xxs} {
    font-size: 0.5rem;
  }
`;

export const BlankUser = styled.div`
  margin:  5rem 1rem;
  text-transform: uppercase;
  display: flex;
  align-content: center;
  justify-content: center;
  @media only screen and ${devices.xxs} {
    margin: 5rem 1rem;
 
  }
  @media only screen and ${devices.sm} {
    margin: 5rem;
 
  }
button{
  margin:3rem auto;
};
  h2 {
    margin: 10px 0;
    font-size:1rem;
    @media only screen and ${devices.xxs} {
      font-size: 0.7rem;
    }
    @media only screen and ${devices.sm} {
      font-size:1.5rem;
    }
  };
  Button a {
    display block:

    width: auto;
 
    color: white;
    &:hover {
      color: black;
    }
  }
`;
