function check(){
	var a=document.getElementById("first").value;
	var b=document.getElementById("second").value;
	if(a!=b || a=="" || b==""){
		document.querySelector(".confirmation").innerHTML="Re-enter the password";
	}
	if(a===b && a!="" && b!=""){
		document.getElementById("myForm").submit();
		alert("Now you can login into your account");
	}
}