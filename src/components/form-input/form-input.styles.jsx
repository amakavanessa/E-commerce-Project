import styled, { css } from "styled-components";
import { devices } from "../constants/screens";
const subColor = "grey";
const mainColor = "black";
//the below is a mixin
const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;
export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  //if there is 'shrink' in the prop values then add shrinkLabelStyles
  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;
export const Group = styled.div`
  position: relative;
  margin: 45px 0;
  @media only screen and ${devices.xxs} {
    margin: 0.5rem auto;
  }
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
