
// time display
function timeCount() {
	var dateActual = new Date();			
	var day = dateActual.getDate();
	var month = dateActual.getMonth()+1;
	var year = dateActual.getFullYear();
				
	var hour = dateActual.getHours();
		if (hour<10) hour = "0"+hour;
				
	var min = dateActual.getMinutes();
		if (min<10) min = "0"+min;
				
	var sec = dateActual.getSeconds();
		if (sec<10) sec = "0"+sec;
				
	document.getElementById("clock").innerHTML = day+"/"+month+"/"+year+" "+hour+":"+min+":"+sec;
	
	setTimeout("timeCount()",1000);			
}

// check the input integer and display positive or negative
function isPositiveNumber() {
	var numberCheck=document.getElementById("numberPositive").value;
	
	if(numberCheck=="")document.getElementById("result").innerHTML="ciag jest pusty";
	else {
		if(numberCheck>0) document.getElementById("result").innerHTML="liczba dodatnia";
		else if(numberCheck<0) document.getElementById("result").innerHTML="liczba ujemna";
		else if(numberCheck==0)document.getElementById("result").innerHTML="Zero";
		else document.getElementById("result").innerHTML="To nie jest liczba";
		}
}

// display all numbers between input1 integer input2 integer
function numberBetween(){
	var number1=document.getElementById("number1").value;
	var number2=document.getElementById("number2").value;
	var result2="";
	
	for (i=number1; i<=number2; i++)
	{
		result2=result2+i+" ";	
	}
	document.getElementById("result2").innerHTML=result2;
}