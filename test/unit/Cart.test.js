const Cart = require('../../src/Cart');
const Item = require('../../src/Item');

it ('We have to check that the cart is empty at the beginning.', () => {
    const cart = new Cart();
    expect(cart.getItems().size).toBe(0);
});

it ('We have to check that the item is added to the cart.', () => {
    const cart = new Cart();
    expect(cart.addItems(new Item('Apple', 399, true), 2).size).toBe(1);
});

it('We have to check the number of items in the cart.', () => {
    const cart = new Cart();
    cart.addItems(new Item('Apple', 399, true), 2);
    cart.addItems(new Item('Samsung', 199, true), 4);
    //var result = ['Apple - x2', 'Samsung - x4'];
    var expectedResult = 2; // size.
    expect(cart.itemQuantities().length).toBe(expectedResult);
});

it('We have to check the item and its respective quantity for all the items in the cart', () => {
    const cart = new Cart();
    cart.addItems (new Item ('Apple', 399, true), 2);
    cart.addItems (new Item ('Samsung', 199, true), 4);
    var expectedResult = ['Apple - x2', 'Samsung - x4'];
    //expect(cart.itemQuantities().toString()).toBe('Apple - x2,Samsung - x4');
    expect(cart.itemQuantities()).toEqual(expectedResult);
});


