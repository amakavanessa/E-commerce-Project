import styled from "styled-components";
import { devices } from "../../components/constants/screens";

export const ShopContainer = styled.div`
  padding: 1rem;
  margin-bottom: 7rem;
  @media only screen and ${devices.sm} {
    padding: 3rem;
    margin-bottom: 10rem;
  }
`;
