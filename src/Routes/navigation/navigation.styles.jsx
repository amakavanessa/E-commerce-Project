import styled from "styled-components";

import { Link } from "react-router-dom";
import { devices } from "../../components/constants/screens";
export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0rem;
  padding: 1.5rem;
  @media only screen and ${devices.sm} {
    padding: 3rem;
  }
  @media only screen and ${devices.xxs} {
    padding: 1rem;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  // padding: 25px;
`;

export const NavLinks = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1rem;
  @media only screen and ${devices.xxs} {
    font-size: 0.8rem;
  }
`;

export const NavLink = styled(Link)`
  padding: 0 15px;
  cursor: pointer;

  @media only screen and ${devices.xxs} {
    padding: 0px 5px;
  }
`;
