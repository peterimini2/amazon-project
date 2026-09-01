import { renderOrderSummary } from "../js/checkout/order-summary.js";
import { renderPaymentSummary } from "../js/checkout/payment-summary.js";
import { loadProducts, loadProductsFetch } from "../data-1/products.js";
import { loadCart } from "../data-1/cart.js";
// import '../data-1/cart-class.js';
//import '../data-1/backend-practice.js';

Promise.all([
 loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });
  
}).then((value) => {
  console.log(value)
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
