import { y } from './app';
import $ from 'jquery';
var age;
(function (age) {
    age[age["ahmed"] = 20] = "ahmed";
    age["mohamed"] = "30";
})(age || (age = {}));
export var sum = function (n) {
    return n;
};
var z = sum(age.mohamed);
console.log(y("hello"));
$(function () {
    var body = $("body").css('font-size');
    console.log("body-style:" + body);
});
