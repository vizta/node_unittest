/**
 * Created on 1/14/2015.
 */
var assert=require('assert');
var Number=function(number){
    this.number = number;
}
Number.prototype.isNumber=function(){
    return isNaN(this.number);
}
Number.prototype.isEven=function(){
    return this.number%2==0;
}
Number.prototype.isOdd=function(){
    return this.number%2!=0;
}

var evenNumber=new Number(12);
console.log("Is number even? "+evenNumber.isEven());

var oddNumber=new Number(13);
console.log("Is number odd? "+isNaN(oddNumber));

var strangeNumber=new Number("strange");

//verification through unit test
assert.equal(evenNumber.isEven(), true);
assert.equal(oddNumber.isOdd(), true);
assert.equal(strangeNumber.isNumber(), true);