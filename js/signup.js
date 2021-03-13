$(document).ready(function()
{
    $("form").submit(function()
    {
        var pass=$("#password").val();
        var con=$("#confirm").val();
        var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(!pass.match(decimal)) 
        { 
            document.getElementById("password").setCustomValidity("please enter a strong password (8-15) letters contains atleast one lowercase letter, one uppercase letter, one numeric digit, and one special character");
            return false;
        }
        if (pass!=con)
        {
            document.getElementById("confirm").setCustomValidity("password and confirm password are not matching");
            return false;
        }

    })
    $("#confirm").on('input',function()
    {
        document.getElementById("confirm").setCustomValidity('');
    });
    $("#password").on('input',function()
    {
        document.getElementById("password").setCustomValidity('');
        document.getElementById("confirm").setCustomValidity('');
    });
})