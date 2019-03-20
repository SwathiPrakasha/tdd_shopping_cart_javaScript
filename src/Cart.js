//Import Item from './Item.js';
const Item = require('./Item');
module.exports =  class Cart {
    constructor () {
        let itemMap = new Map();
        this.getItems = () => { return itemMap; };

        // Add an item with quantity.
        this.addItems = (item, quantity) => {
            itemMap.set(item, quantity);
            return itemMap;
        }

        // Return the item name with respective quantities. 
        this.itemQuantities = () => {
            var itemQty = [];
            itemMap.forEach( (value, key) => {
                var item = key.name + ' - x' + value;
                itemQty.push(item);
            });
            return itemQty;
        }

        this.itemizedList = () => {
            var itemQuantityWithPrice = [];
            var options = { style: 'currency', currency: 'USD' };
            var numberFormat = new Intl.NumberFormat('en-US', options);
            itemMap.forEach((value, key) => {
                var updatedItem = `${key.name} x${value} - ${numberFormat.format(key.price)}`;
                //var updatedItem = key.name + ' x' + value + ' - ' + numberFormat.format(key.price);
                itemQuantityWithPrice.push(updatedItem);
            });
            return itemQuantityWithPrice;
        }

        this.SaleItems = () => {
            var itemsOnSale = [];
            var options = { style: 'currency', currency: 'USD' };
            var numberFormat = new Intl.NumberFormat('en-US', options);
            itemMap.forEach((value,key) => {
                if(key.onSale) {
                    var updatedItem = `${key.name} x${value} - ${numberFormat.format(key.price)}`;
                    //var updatedItem = key.name + ' x' + value + ' - ' + numberFormat.format(key.price);
                    itemsOnSale.push(updatedItem);
                }
            });
            console.log(itemsOnSale);
            return itemsOnSale;
        }
    }
};