$(document).ready(function(){

    /******************************************************************************/
    /************************** JQUERY FORM VALIDATION ****************************/
    /******************************************************************************/
      
     $(".js-comment-form").validate({
         rules:
            {
                 name: 
                 {
                    required: true,
                    minlength: 3
                 },
                 email: 
                 {
                     required: true,
                     email: true
                 },
                 message:
                 {
                     required: true,
                     minlength: 10
                 }
            },
         
        
           messages: 
                 {
                    name: 
                       {
                         required: "Please enter your name",
                       },
                    
                    email: 
                       {
                          required: "Please enter your email address",
                          email: "Please enter a valid email address"
                        },
                     message:
                        {
                            required:"Please enter your message"
                        }
                }
     });

});
    
    

