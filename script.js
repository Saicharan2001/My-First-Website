document.getElementById("contact-submit").addEventListener("click",Press);
function Press(){
	this.value="Submitted !!";
	var msg=document.getElementById("impo").value;
	if(msg=="Yes" || msg=="yes"){
		alert('Hello Student \r\nFinal confirmation for submission of the form');
	}
	else{
		alert('Welcome \r\nFinal confirmation for submission of the form')
	}
	
}