function insert1(){
	var u = document.getElementById('u').value;
	var r = document.getElementById('r').value;
	var i = document.getElementById('i').value;
	var result = r * i;
	var div = document.getElementById('in');
	div.innerText = result + "volts";
}
function insert2(){
	var u = document.getElementById('u2').value;
	var r = document.getElementById('r2').value;
	var i = document.getElementById('i2').value;
	var result = u / r;
	var div = document.getElementById('in2');
	div.innerText = result + "amperes";
}
function insert3(){
    var u = document.getElementById('u3').value;
	var r = document.getElementById('r3').value;
	var i = document.getElementById('i3').value;
	var result = u / i;
	var div = document.getElementById('in3');
	div.innerText = result + "ohms";
}