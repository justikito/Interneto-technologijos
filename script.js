function background1() {
	document.body.style.backgroundImage  = "url(front_page_PNG.png')";
}
function background2() {
	document.body.style.backgroundImage  = "url('2.jpg')";
}
function background3() {
	document.body.style.backgroundImage  = "url('3.jpg')";
}
function background4() {
	document.body.style.backgroundImage  = "url('4.jpeg')";
}


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	  myFunction(this);
	}
  }
  xhttp.open("GET", "cd_catalog.xml", true);
  xhttp.send();
}

function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Artist</th><th>Title</th></tr>";
  var x = xmlDoc.getElementsByTagName("book");
  for (i = 0; i <x.length; i++) { 
	table += "<tr><td>" +
	x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
	"</td><td>" +
	x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue +
	"</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}

var dataReload=document.querySelectorAll("[data-reload]");
var kalba = {
	lt: {
		home: "PAGRINDINIS",
		prod: "PRODUKTAI",
		temp: "ŠABLONAI",
		price: "KAINOS",
		signin: "PRISIJUNGTI",
		signup: "REGISTRUOTIS",
		did1: "Kurkite Neįtikėtiną",
		did2: "Vaizdinę Mediją",
		maz: "Itin paprastas irankis kurti siuolaikiskus vaizdo irasus ir paveikslelius jusu skelbimams, socialiniams tinklams, tinklarasciams ir svetainems. Padarykite savo projekta isskirtini!",
		crt: "SKAIČIUOTUVAS ➜",
		about: "APIE",
		prod2: "Produktai",
		temp2: "Šablonai",
		price2: "Kainos",
	}
};

	if(window.location.hash) {
		if(window.location.hash === "#lt") {
			home1.textContent=kalba.lt.home;
			prod1.textContent=kalba.lt.prod;
			temp1.textContent=kalba.lt.temp;
			price1.textContent=kalba.lt.price;
			signin1.textContent=kalba.lt.signin;
			signup1.textContent=kalba.lt.signup;
			did1.textContent=kalba.lt.did1;
			did2.textContent=kalba.lt.did2;	
			crt.textContent=kalba.lt.crt;
			about.textContent=kalba.lt.about;
			prod2.textContent=kalba.lt.prod2;	
			temp2.textContent=kalba.lt.temp2;
			price2.textContent=kalba.lt.price2;	
			maz.textContent=kalba.lt.maz;		
			prod2.textContent=kalba.lt.prod2;
	}
}

//onclick
for(i = 0; i <= dataReload.length; i++){
	dataReload[i].onclick=function(){
	setTimeout(function(){    
           window.location.reload();    
	},100);
	};
}


//Skaiciuotuvas
function writing(val) { 
	if(document.getElementById("result").value>9999999 && val != "+" && val != "-" && val != "/" && val != "*"){
		document.getElementById("result").value
	}
	else{
		document.getElementById("result").value+=val
	}
} 

function equal() { 
	let x = document.getElementById("result").value 
	let y = eval(x) 
	document.getElementById("result").value = y 
} 

function clearw() { 
	document.getElementById("result").value = "" 
} 

