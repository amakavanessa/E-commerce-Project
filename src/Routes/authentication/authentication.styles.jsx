import styled from "styled-components";
import { devices } from "../../components/constants/screens";
export const AuthenticationContainer = styled.div`
  display: block;
  padding: 0 1.5rem;
  margin: 2rem auto;
  @media only screen and ${devices.sm} {
    padding: 0 3rem;
  }
  @media only screen and ${devices.lg} {
    display: flex;
    width: 900px;
    justify-content: space-between;
  }

  @media only screen and ${devices.xxs} {
    padding: 1rem;
    margin: 1rem auto;
  }
`;
