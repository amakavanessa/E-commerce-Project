import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.jsx";
import { CheckoutContainer, CheckoutHeader } from "./checkout.styles.jsx";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div style={{ minHeight: "50vh" }}>
      <CheckoutContainer>
        <CheckoutHeader>
          <div>
            <span>PRODUCT</span>
          </div>
          <div>
            <span>DESCRIPTION</span>
          </div>
          <div>
            <span>QUANTITY</span>
          </div>
          <div>
            <span>PRICE</span>
          </div>
          <div>
            <span>REMOVE</span>
          </div>
        </CheckoutHeader>

        {cartItems.map((cartItem) => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        })}
        <span className="total">Total:${cartTotal}</span>
      </CheckoutContainer>
    </div>
  );
};

export default Checkout;
