function getHistory(){
	return document.getElementById("history-value").innerText; //buat terkoneksi
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;   //riwayat nummber
}
function getOutput(){
	return document.getElementById("output-value").innerText; //output number
}
function printOutput(num){  //mencetak number 
	if(num==""){
		document.getElementById("output-value").innerText=num; //tolong dong ambil sebuah element dengan nama id output id dalam bentuk teks dengan parameter number
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){ //membuat format number nya disini
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){  //
	return Number(num.replace(/,/g,''));
}

var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}