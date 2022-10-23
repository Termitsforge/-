//"use strict"

//let inp1 = document.querySelector('#elem1');
//let inp2 = document.querySelector('#elem2');
//let inp3 = document.querySelector('#elem3');
let mno = document.querySelector('#button4');
let ras = document.querySelector('#button3');
let sum = document.querySelector('#button2');
let res = document.querySelector('#button1');

let inp1 = document.querySelector('#inp1');

let result = 0;
let a = [];
let b = 0;
let aa = 0;
let s, r, m, d;


sum.addEventListener('click', fsum);
function fsum() {
	if (r){
		fras()
	}
	if (m){
		fmno()
	}
	if (d){
		fras()
	}
	s = true;
	r = false;
	m = false;
	d = false;
	a = [...a , Number(inp1.value)];
	inp1.value = '';
	aa = Number(a[0]);
	for (let i = 1; i < a.length; i++){
		aa = aa + Number(a[i]);
	}
	a = [aa]
	aa = 0;
	
}

ras.addEventListener('click', fras);
function fras() {
	if (s){
		fsum()
	}
	if (m){
		fmno()
	}
	if (d){
		fras()
	}
	r = true;
	s = false;
	m = false;
	d = false;
	a = [...a , Number(inp1.value)];
	inp1.value = '';
	aa = Number(a[0]);
	for (let i = 1; i < a.length; i++){
		aa = aa - Number(a[i]);
	}
	a = [aa]
	aa = 0;
	
}

mno.addEventListener('click', fmno);
function fmno() {
	if (s){
		fsum()
	}
	if (r){
		fras()
	}
	/*if (d){
		fdel()
	}*/
	alert(a)
	
	m = true;
	s = false;
	r = false;
	d = false;
	a = [...a , Number(inp1.value)];
	console.log(a)
	inp1.value = '';
	aa = Number(a[0]);
	console.log(a[0])
	for (let i = 1; i < a.length; i++){
		if (Number(a[i]) === null){
			a[i] = 1;
		console.log('до =')
		console.log(aa)
		aa = aa * Number(a[i]);
		console.log('после =')
		console.log(aa)
		
		}
		
	}
	
	a = [aa]
	aa = 0;
	alert(a)
	
}

/*del.addEventListener('click', fdel);
function fdel() {
	if (s){
		fsum()
	}
	if (r){
		fras()
	}
	if (m){
		fmno()
	}
	alert(a)
	
	m = true;
	s = false;
	r = false;
	d = false;
	a = [...a , Number(inp1.value)];
	console.log(a)
	inp1.value = '';
	aa = Number(a[0]);
	for (let i = 1; i < a.length; i++){
		if (Number(a[i]) === null){
			a[i] = 1;
		}
		aa = aa * Number(a[i]);
	}
	a = [aa]
	aa = 0;
	
}
*/


res.addEventListener('click', Reaslt)
function Reaslt(){

	if (s){
		if(inp1.value === ''){
		fras(inp1.value)}else {
		s = false;
		r = false;
		m = false;
		d = false;
		b =  Number(inp1.value);
		result = a[0] + b;
		inp1.value = result;
		b = 0;
		a = [];
		  }}

	if (r){
		r = false;
		s = false;
		m = false;
		d = false;
		b =  Number(inp1.value);
		result = a[0] - b;
		inp1.value = result;
		b = 0;
		a = [];
	}		
	
	if (m){
		alert(a)
		m = false;
		s = false;
		r = false;
		d = false;
		b =  Number(inp1.value);
		result = a[0] * b;
		inp1.value = result;
		b = 0;
		a = [];
	}
	
}