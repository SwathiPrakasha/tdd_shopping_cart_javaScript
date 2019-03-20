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

        this.itemizedList =()=>{

        }

        this.SaleItems = () =>{
            
        }
    }
};