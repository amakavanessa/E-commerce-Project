import styled from "styled-components";
import { devices } from "../constants/screens";
export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 3rem 0;
  h2 {
    margin: 10px 0;
    @media only screen and ${devices.xxs} {
      font-size: 1.2rem;
      margin: 0 0 5px;
    }
  }
  @media only screen and ${devices.sm} {
    width: 80%;
    margin: 5rem 0;
  }
  @media only screen and ${devices.lg} {
    width: 380px;
    margin: 0;
  }
`;
