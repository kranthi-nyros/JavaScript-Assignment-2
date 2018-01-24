/*This function calls all other functions used for validation*/
function formValidation() {
    var uid = document.registration.userid;
    var uname = document.registration.username;
    var uemail = document.registration.email;
    var phoneno = document.registration.phoneno; 
    var ucountry = document.registration.country;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex;
    var ucheckbox = document.registration.checkbox;
    
    if (userid_validation(uid, ))

    {
        if (allLetter(uname)) 
        {
            if (ValidateEmail(uemail)) 
            {
                
               if (phonenumber(phone))
               { 
                
                    if (countryselect(ucountry)) 
                    {
                        if (validsex(umsex, ufsex)) 
                        {


                        if (checkbox()) 
                        {
                            
                          }
                        }
                    }
                }
            }
        }
    }
    return false;
}

/*JavaScript function for validating First Name*/

function userid_validation(uid, mx, my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
        alert("Please enter your Name ");
        uid.focus();
        return false;
    }
    return true;
}


/*JavaScript code for validating Last Name*/



function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    } else {
        alert('Please enter your Last Name must have alphabet characters only');
        uname.focus();
        return false;
    }
    
} 


/*JavaScript code for validating email format*/

function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    } else {

        alert("Please enter your email address!");
        uemail.focus();
        return false;
    }
}

/*JavaScript code for phone number*/



function phonenumber(inputtxt)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno))
     {
       return true;
     }
   else
     {
       alert("Please enter your Phone Number");
       return false;
     }
}



/*JavaScript code for validating country*/

function countryselect(ucountry) {
    if (ucountry.value == "Default") {
        alert('Select your country from the list');
        ucountry.focus();
        return false;
    } else {
        return true;
    }
}




/*JavaScript code for validating gender*/

function validsex(umsex, ufsex) {
    x = 0;

    if (umsex.checked) {
        x++;
    }
    if (ufsex.checked) {
        x++;
    }
    if (x == 0) {
        alert('Select Male/Female');
        umsex.focus();
        return false;
    } else {
        
        return true;
    }
}



function checkbox() {
if(!this.myform.checkbox.checked)
        {
            alert('You must agree to the terms first.');
            return false;
        }
        else {
        alert('Form Successfully Submitted');
        window.location.reload()
        return true;
    }
}



         
