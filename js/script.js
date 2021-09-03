//document.getElementById("contact-submit").addEventListener("click",Press);
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
function signup(){
	if ($("#name-enter").val()==""){
		alert("Name is required");
	}
	else{
		if($("#email-enter").val()==""){
			alert("Email-id is required");
		}
		else{
			if(($("#first").val()=="") || ($("#second").val()=="") ){
				alert("Password can't be empty");
			}
			else{
				if(($("#first").val())!==($("#second").val())){
					alert("Passwords didn't matched");
				}
				else{
					localStorage.setItem("email",$("#email-enter").val());
					localStorage.setItem("password",$("#second").val());
					alert("Signed up successfully");
					window.location.href="login page.html";
				}
			}
		}
	}
}
//function back(){
	//window.location.href="index.html";
//}
function logincheck(){
	if(($("#semail").val()=="") || ($("#spassword").val()=="")){
		alert("Credentials can't be empty");
	}
	else{
		if($("#semail").val()!==localStorage.getItem("email")){
			alert("Invalid id");
		}
		else{
			if($("#spassword").val()!==localStorage.getItem("password")){
				alert("Incorrect password");
			}
			else{
				alert("Logged in successfully")
				window.location.href="Course page.html"
			}
		}
	}
}