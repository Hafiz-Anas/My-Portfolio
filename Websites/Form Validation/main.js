function validate() {
    var name = document.getElementById('name').value;
    var subject = document.getElementById('subject').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var massage = document.getElementById('massage').value;
    var error = document.getElementById('error');

    error.style.padding = "10px";
    var text;
    if(name.length < 5) {
        text = "Please Enter Valid Name";
        error.innerHTML = text;
        return false;
    }
    if(subject.length < 10) {
        text = "Please Enter Correct Subject";
        error.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length != 10) {
        text = "Please Enter Valid Phone Number";
        error.innerHTML = text;
        return false;
    }
    if(email.indexOf('@') == -1 || email.length < 5) {
        text = "Please Enter Valid Email";
        error.innerHTML = text;
        return false;
    }
    if(massage.length <= 140) {
        text = "Please Enter More Than 140 Characters";
        error.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}