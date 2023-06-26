import styled from "styled-components";
import { devices } from "../constants/screens";
export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 14px;
  align-items: center;
  font-size: 0.8rem;
  @media only screen and ${devices.sm} {
    font-size: 20px;
  }
  @media only screen and ${devices.xxs} {
    font-size: 10px;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  width: 25%;
  padding-right: 15px;
`;

export const Image = styled.img`
  width: 50%;
  height: 50%;
`;
export const Name = styled.span`
  width: 23%;
  padding: 2px;
  padding-leftt: 10rem;
`;
export const Price = styled.span`
  width: 23%;
  padding: 2px;
`;
export const Quantity = styled.div`
  display: flex;

  width: 23%;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
