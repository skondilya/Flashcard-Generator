// constructor which can be used to create objects with the front, back and showfront showback properties
function BasicCard (front,back) {
  this.front = front;
  this.back = back;
  this.showFront = function() {
      console.log(this.front);
  };
  this.showBack = function() {
      console.log(this.back);
  };
}

module.exports = BasicCard;