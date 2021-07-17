alert("thanks to see my project")
function check()
{
    var ac=document.getElementById("logid");
    var acc=ac.value.toUpperCase();
alert
    var pass=document.getElementById("pass").value
    if(acc=="NEWUSER" && pass=="arzooduddy.")
    {
        alert("Correct Login info")
    }
    else if((acc=="arzoo"||acc=="moni"||acc=="arzooduddy") && pass=="superstar") 
    {      
    var a= document.getElementById("special");
      a.style.visibility='visible';
    }
    else
    {
        alert("incorrect Login info.")
    }
}
//reference:https://www.w3schools.com/howto/howto_js_toggle_password.asp
function passcheck()
{
    var passtype=document.getElementById("pass")
    if(passtype.type==="text")
    {
        passtype.type="password";
    }
    else
    {
        passtype.type="text"
    }
}