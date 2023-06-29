import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PaystackButton } from "react-paystack";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import "./checkout.styles.jsx";
import Button from "../../components/button/button.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  BlankUser,
} from "./checkout.styles.jsx";
import { clearCart } from "../../store/cart/cart.action";
import { variable } from "../var";

const publicKey = variable.publicKey;

const Checkout = () => {
  const [isCartCleared, setIsCartCleared] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const cartTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const email = currentUser?.email;
  const amount = cartTotal * 754.45 * 100;
  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      dispatch(clearCart());
    },
    // onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      setIsCartCleared(true);
    } else {
      setIsCartCleared(false);
    }
  }, [cartItems]);

  if (isCartCleared) {
    return (
      <div style={{ minHeight: "50vh" }}>
        <CheckoutContainer>
          {" "}
          <p className="emptyCart">
            Go to <a href="./shop">SHOP</a> To Add Items To Cart.
          </p>
        </CheckoutContainer>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "50vh" }}>
      {currentUser ? (
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

          <PaystackButton className="paystack-button" {...componentProps} />
        </CheckoutContainer>
      ) : (
        <BlankUser>
          <div>
            <h2>Sign In to Access Checkout Page</h2>
            <Button>
              {" "}
              <a href="/auth">Sign In</a>
            </Button>
          </div>
        </BlankUser>
      )}
    </div>
  );
};

export default Checkout;
