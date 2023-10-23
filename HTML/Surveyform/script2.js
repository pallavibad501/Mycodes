function Form(){
    var firstName =
        document.forms.RegForm.Name.value;
    var LastName =
        document.forms.RegForm.Name.value;
    var email =
        document.forms.RegForm.EMail.value;
    var Mobile =
        document.forms.RegForm.Telephone.value;
    //Javascript reGex for Email Validation.
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
    // Javascript reGex for Phone Number validation.
    var regMobile=/^\d{10}$/;                        
    // Javascript reGex for firstName validation
    var regfirstName = /\d+$/g;                          
    // Javascript reGex for LastName validation
    var regLastName = /\d+$/g;                          
 
    if (firstname == "" || regfirstName.test(firstname)) {
        window.alert("Please enter your name properly.");
        fisrtname.focus();
        return false;
    }
    if (LastName == "" || regLastName.test(LastName)) {
        window.alert("Please enter your name properly.");
        LastName.focus();
        return false;
    }
     
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;

    }
 
    if (Mobile == "" || !regMobile.test(Mobile)) {
        alert("Please enter valid phone number.");
        Mobile.focus();
        return false;
    }
 
    
    return true;
}{
var firstName =
document.forms.RegForm.Name.value;
var LastName =
document.forms.RegForm.Name.value;
var email =
document.forms.RegForm.EMail.value;
var Mobile =
document.forms.RegForm.Telephone.value;
//Javascript reGex for Email Validation.
var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
// Javascript reGex for Phone Number validation.
var regMobile=/^\d{10}$/;                        
// Javascript reGex for firstName validation
var regfirstName = /\d+$/g;                          
// Javascript reGex for LastName validation
var regLastName = /\d+$/g;                          

if (firstname == "" || regfirstName.test(firstname)) {
window.alert("Please enter your name properly.");
fisrtname.focus();
return false;
}
if (LastName == "" || regLastName.test(LastName)) {
window.alert("Please enter your name properly.");
LastName.focus();
return false;
}

if (email == "" || !regEmail.test(email)) {
window.alert("Please enter a valid e-mail address.");
email.focus();
return false;

}

if (Mobile == "" || !regMobile.test(Mobile)) {
alert("Please enter valid phone number.");
Mobile.focus();
return false;
}


return true;
}