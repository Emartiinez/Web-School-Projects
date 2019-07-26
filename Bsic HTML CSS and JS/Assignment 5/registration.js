function ClearError()
{
    document.querySelector("#Errors").innerHTML="";
}


function DisplayError(text)
{
    document.querySelector("#Errors").innerHTML+=text;
}



function checkData()
{
ClearError();
var resultA =UsrName();
var resultB =provinces();
var resultC = StName();
var resultD =password();
var resultE = city();
return resultA && resultB && resultC && resultD && resultE;
}

// Checking Pasword Function

function password()
{
var Max_Error="Password must be 8 characters long.";
var Not_Confirm ="Passwords you have entered do not match.";
var Beginning_Error ="Password must begin with a Character.";
var Cap_Error ="Password must contain one uppercase charecter.";
var Digit_Error="Password must contain one Digit.";


var password =document.getElementById("password");
var ConfirmPass = document.getElementById("Confirmpass");
var ToF_Errors = true;
var passMax_length = password.length;
var Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Digits ="1234567890";
var symbols ="!@#$%^&*()<>?:{}[]~+-*/";

var first_char=0; // used in Starting with character might change from TOF
var Upper_Value=0; // used for upperCase
var ifDigit =0; // used if password contains a Digit

//Password == 8
    if (passMax_length !=8) 
        {   
            DisplayError("<p>"+Max_Error+"</p>");
            ToF_Errors = false; 
        }

        

// Password Confirmation
    if (password !=ConfirmPass)
        {
          DisplayError("<p>"+Not_Confirm+"</p>");
          ToF_Errors = false;
        }  
        


// Password Beginning with Character
    if (symbols.indexOf(password.substr(0,1)) >= 0 && password == ConfirmPass)
        {
            first_char=1;
        }
   
    if (first_char!=1) 
        {
            DisplayError("<p>"+Beginning_Error+"</p>");
            ToF_Errors= false;
        }




//Password Contains a Digit

        for (var i= 0; i <  passMax_length ; i++)
        {
            if (Digits.indexOf(password.substr(i,1)) >=0 && password == ConfirmPass)
            {
                ifDigit=1;
                break //changed
            }
        }
            if (ifDigit !=1)
            {
                DisplayError("<p>"+Digit_Error+"</p>");
                ToF_Errors = false;
            }

        



//Password contains UpperCase    There was a break used
        for(var i =0; i < passMax_length; i++)
        {
            if(Alphabet.indexOf(password.substr(i,1))>=0 && password == ConfirmPass)
            {
                Upper_Value =1;
                break;
            }
        }
            if (Upper_Value != 1)
            {
                DisplayError("<p>"+Cap_Error+"</p>");
                ToF_Errors = false;
            }

        

// Checking if all password fields match

        if(!ToF_Errors)
        {
            return false;
        }
        else 
        {
            return true;
        }

}

function UsrName()
{
var Length_Error ="Username must contain 6 Characters.";
var Char_Error="Username must begin with a character from a-z";

var User_Name = document.signup.UsrName.value.trim();
var checking_errors = true;
var username_length =User_Name.length;
var Characters ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$*()!=+-/";
var LowandUpper ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

var flag=0;
var confirm=0; // used to check if name begins with letter



    for (var i=0; i < username_length ; i++ )
    {
        if (Characters.indexOf(User_Name.substr(i,1)) >=0)
       { 
           flag++;
       }
    }
   
    if (flag < 6)
    {
        DisplayError("<p>"+Length_Error+"</p>");
        checking_errors = false;
    }
    
   
    if(LowandUpper.indexOf(User_Name.substr(0,1)) >=0)
    {
        confirm = 1;
    }
    if (confirm != 1)
    {
        DisplayError("<p>"+Char_Error+"</p>");
        checking_errors = false;
    }

    if (!checking_errors)
    {
        return false;
    }
    else
    {
        return true;
    }

}

function provinces()
{
    var Display_Error ="Please Select a Province."
    var prov = document.signup.provinces.selectedIndex;
    var field_errors = true;


    if (prov==1)
    {
        DisplayError("<p>"+Display_Error+"</p>");
        field_errors=false;
    }
    else
    {
        field_errors = true;
    }

    if (!field_errors)
    {
        return false;
    }
    else
    {
        return true;
    }

}

function StName()
{
    var StName = document.signup.StName.value.trim();
    var Error_message ="Street name must not contain any Digits.";
    var street_Error= true;
    var digits="1234567890"
    var confirmation =0;
    flag=0;

    for (var i = 0; i <StName.length; i ++)
    {
        if(digits.indexOf(StName.substr(i,1)) >= 0)
            {
                confirmation=1;
                street_Error = false;
                flag =1 ;
            }
    }

    if(confirmation==1)
    {
        DisplayError("<p>"+Error_message +"</p>");
        street_Error = false;
    }
    
    if(!street_Error)
    {
        return false;
    }
    else
    {
      return true;  
    }

}



function city()
{
    var city=document.signup.city.value.trim();
    var city_Error = true;
    var AtoZ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var message_Error="City must contain only Alphabetic letters.";
    var confirm=0;
 

    for (var i=0 ; i < city.length; i++)
    {
        if (AtoZ.indexOf(city.substr(i,1)) >= 0 )
        {
            confirm=1;
            city_Error=true;
        }
        else 
        {
         confirm=0;
         city_Error=flase;
         DisplayError("<p>"+message_Error +"</p>");
        break;  
        }
    }

    if (!city_Error)
    {
        return false;
    }
    else
    {
        return true;
    }
}