import { addToCart, cart } from "../../data-1/cart.js";

describe('test suite: addToCart', () => {
  it('adds existing product to the cart', () => {
    
  });
  it('adds a new product to the cart', () => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify(['cart']);
    });

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
  });
});  