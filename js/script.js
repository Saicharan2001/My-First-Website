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
var db=openDatabase('mydatabase','1.0','Test DB',2*1024*1024);
db.transaction(function(tx){
	tx.executeSql('CREATE TABLE IF NOT EXISTS PEOPLE(email unique,password)');
});
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
					//localStorage.setItem("email",$("#email-enter").val());
					//localStorage.setItem("password",$("#second").val());
					db.transaction(function(tx){
						//tx.executeSql('CREATE TABLE IF NOT EXISTS PEOPLE(email unique,password)');
						tx.executeSql('INSERT INTO PEOPLE VALUES(?,?)',[$("#email-enter").val() , $("#second").val()]);
					});
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
function logincheck() {
  var check = 0;
  if ($("#semail").val() == "" || $("#spassword").val() == "") {
    alert("Credentials can't be empty");
  } else {
    var selectAllStatement = "SELECT * FROM PEOPLE WHERE email=?";
    db.transaction(function (tx) {
      tx.executeSql(
        selectAllStatement,
        [$("#semail").val()],
        function (tx, result) {
          var dataset = result.rows;
          for (var i = 0, item = null; i < dataset.length; i++) {
            item = dataset.item(i);
            if (item["password"] === $("#spassword").val()) {
              alert("Logged in successfully");
              check = 1;
              window.location.href = "Course page.html";
            }
          }
          if (check == 0) {
            alert("Invalid Credentials");
          }
          //   if (
          //     window.location.href ==
          //     "file:///C:/Users/saich/Desktop/All%20html%20files/My-First-Website/login%20page.html"
          //   ) {
          //     alert("Invalid Credentials");
          //   }
        }
      );
    });
  }
}
// function logincheck(){
// 	if(($("#semail").val()=="") || ($("#spassword").val()=="")){
// 		alert("Credentials can't be empty");
// 	}
// 	else{
// 		if($("#semail").val()!==localStorage.getItem("email")){
// 			alert("Invalid id");
// 		}
// 		else{
// 			if($("#spassword").val()!==localStorage.getItem("password")){
// 				alert("Incorrect password");
// 			}
// 			else{
// 				alert("Logged in successfully")
// 				window.location.href="Course page.html"
// 			}
// 		}
// 	}
// }
