import styled from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "../constants/screens";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  // @media only screen and ${devices.sm} {
  //   padding: 0 5rem 0;
  // }
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  // column-gap: 20px;
  gap: 1.5rem;
  @media only screen and ${devices.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
