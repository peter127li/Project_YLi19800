function checkInfo() {
	var Name = document.getElementById("name");
	if(Name.value == "") {
		Name.setCustomValidity("Please enter the  name");
		return;
	} else {
		Name.setCustomValidity("");
	}

	var Email = document.getElementById("email");
	if(Email.value == "") {
		Email.setCustomValidity("Please enter the  email address");
		return;
	} else {
		Email.setCustomValidity("");
	}

	var subject = document.getElementById("subject");
	if(subject.value == "") {
		subject.setCustomValidity("Please enter the  subject");
		return;
	} else {
		subject.setCustomValidity("");
	}

	var message = document.getElementById("message");
	if(message.value == "") {
		message.setCustomValidity("Please enter the  message");
		return;
	} else {
		message.setCustomValidity("");
	}

}