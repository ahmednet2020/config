import { y } from './app';
import $ from 'jquery';
enum age {
	ahmed = 20,
	mohamed = "30"
}

export const sum = (n: age): any => {
	return n;
}

let z = sum(age.mohamed);
console.log(y("hello"));
$(()=> {
	let body: any = $("body").css('font-size');
	console.log(`body-style:${body}`)
})