$(document).ready(function(){
    $("#signupform").validate({
        rules:{

            fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            surname:{
                required:true,
                minlength:4
            },
            password:{
                required:true,
                minilength:8
            },
            email:{
                required:true,
                email:true
            },
            day:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Please enter a name",
                minlength:"minimum letters not occured"
            }
        }

    })
})