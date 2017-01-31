(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService', '$log'];
  function ToBuyController(ShoppingListCheckOffService,$log){
    var item = this;
    item.itemsToBuy = ShoppingListCheckOffService.getToBuy();
    item.removeToBuy = function (itemIndex) {
      ShoppingListCheckOffService.removeToBuy(itemIndex);
    }
    item.addItem = function(item){
      console.log('this is the name:', item, item.name, item.quantity);
      ShoppingListCheckOffService.addAlreadyBought(item.name, item.quantity);

    };
  }


  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var itemAdder = this;

    itemAdder.itemsAlreadyBought = ShoppingListCheckOffService.getBought();

    itemAdder.addItem = function(){
      ShoppingListCheckOffService.addAlreadyBought(itemAdder.itemName, itemAdder.itemQuantity)
    };
  }




  function ShoppingListCheckOffService(){
    var service = this;

    //To Buy List
    var itemsToBuy = [
      {name: 'Chips', quantity: 1},
      {name: 'Chips2', quantity: 2},
      {name: 'Chips3', quantity: 3},
      {name: 'Chips4', quantity: 4}
    ];
    service.getToBuy = function () {
      return itemsToBuy;
    }
    service.addToBuy = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      item.push(item);
    }

    service.removeToBuy = function (itemIndex) {
      itemsToBuy.splice(itemIndex, 1);
    }

      //Already Bought
    var itemsAlreadyBought = [];
    service.getBought = function () {

      return itemsAlreadyBought;
    }
    service.addAlreadyBought = function (itemName, itemQuantity) {

      var item = {
        name: itemName,
        quantity: itemQuantity
      };
      itemsAlreadyBought.push(item);
      console.log('got here and pushed:', item);
    }
    service.removeAlreadyBought = function (itemIndex) {
      item.splice(itemIndex, 1);
    }
  }

})();
