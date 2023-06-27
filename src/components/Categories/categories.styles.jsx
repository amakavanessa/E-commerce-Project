import styled from "styled-components";
import { devices } from "../constants/screens";
export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  justify-content: center;
  padding: 1.5rem;
  @media only screen and ${devices.sm} {
    padding: 1.5rem 3rem;
    margin: 6rem 0;
  }
  @media only screen and ${devices.xxs} {
    padding: 1.5rem 1rem;
  }
`;
