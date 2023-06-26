import styled from "styled-components";
import { devices } from "../../components/constants/screens";
export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media only screen and ${devices.sm} {
    padding: 5rem;
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

// .total {
//   margin-top: 30px;
//   margin-left: auto;
//   font-size: 36px;
// }

// .checkout-container {
//   width: 55%;
//   min-height: 90vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 50px auto 0;

//   .checkout-header {
//     width: 100%;
//     padding: 10px 0;
//     display: flex;
//     justify-content: space-between;
//     border-bottom: 1px solid darkgrey;

//     .header-block {
//       text-transform: capitalize;
//       width: 23%;

//       &:last-child {
//         width: 8%;
//       }
//     }
//   }

//   .total {
//     margin-top: 30px;
//     margin-left: auto;
//     font-size: 36px;
//   }
// }
