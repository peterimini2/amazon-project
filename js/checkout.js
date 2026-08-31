import { renderOrderSummary } from "../js/checkout/order-summary.js";
import { renderPaymentSummary } from "../js/checkout/payment-summary.js";
import { loadProducts } from "../data-1/products.js";
// import '../data-1/cart-class.js';
//import '../data-1/backend-practice.js';

loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});