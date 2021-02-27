import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  selectCartItems,
  selectedCartTotal,
} from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  CheckoutTotal,
  TestWarning,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <CheckoutTotal>TOTAL: ${cartTotal}</CheckoutTotal>
    <TestWarning>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 12/28 - CVV: 123
    </TestWarning>
    <StripeCheckoutButton price={cartTotal} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectedCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
