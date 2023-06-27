import styled from "styled-components";
import { devices } from "../constants/screens";
export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  h2 {
    margin: 10px 0;
    @media only screen and ${devices.xxs} {
      font-size: 1.2rem;
      margin: 0 0 5px;
    }
  }
  @media only screen and ${devices.sm} {
    width: 80%;
    margin-bottom: 2rem;
  }
  @media only screen and ${devices.lg} {
    width: 380px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  Button {
    margin: 0 0.3rem;

    @media only screen and ${devices.lg} {
      margin: 0;
    }

    @media only screen and ${devices.xxs} {
      margin: 0.1rem;
    }
  }
`;
