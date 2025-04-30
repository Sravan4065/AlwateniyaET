define({ 

 //Type your controller code here 
  onNavigate: function(){
    this.view.flxNext.onClick = this.NextPageOnClickAction;
    this.view.txtFirstNlastName.onTextChange = this.onTextChangeAction;
  },
  NextPageOnClickAction: function(){
    alert("Entered  into onclicknext");
    var self = this;

        var ValidateUsername_inputparam =ValidateUsername_inputparam || {};
    
    ValidateUsername_inputparam["serviceID"] = "Al_Wataneya_Custom_Services$ValidateUsername";
    ValidateUsername_inputparam["user_name"] = self.view.txtFirstNlastName.text;
    var ValidateUsername_httpheaders = {};
    ValidateUsername_inputparam["httpheaders"] = ValidateUsername_httpheaders;
    var ValidateUsername_httpconfigs = {};
    ValidateUsername_inputparam["httpconfig"] = ValidateUsername_httpconfigs;
    alert("Before service function call ");
    Al_Wataneya_Custom_Services$ValidateUsername = 
      mfintegrationsecureinvokerasync(ValidateUsername_inputparam,
    "Al_Wataneya_Custom_Services", 
    "ValidateUsername", 
             function(status,validateUserNameResponse){
      alert("Status :"+status);
      alert("Validate User Name JSON Response :"+JSON.stringify(validateUserNameResponse));
      alert("opstatus : "+validateUserNameResponse.opstatus);
      alert("userExists : "+validateUserNameResponse.data.userExists );
//       var userExists = validateUserNameResponse.data.userExists ;
//       alert("UserExistslength : "+userExists.length);
      alert("Entered into Service Function call ");
      if(validateUserNameResponse.opstatus ===0 && validateUserNameResponse.data.userExists === false &&validateUserNameResponse.message === "Username is valid "){
        alert("Entered into condb");   
        var ntf = new voltmx.mvc.Navigation("frmRegister2");
        Alert("navigating...");
         ntf.navigate({
        "txtFirstNlastName_text": self.view.txtFirstNlastName.text,
       "_meta_"                : {
            "eventName": "onClick",
            "widgetId" : "flxNext"
        }
    });
        alert("navigation done!!");
      }
      else{
//         alert("error : "+validateUserNameResponse.message);
        this.view.flxUserNameError.setVisibility(true);
        this.view.lblUserAlreadyExists.text = validateUserNameResponse.message;
      }
    }         
                                     );

  
  },
  
  onTextChangeAction: function(){
        this.view.flxNext.setVisibility(true);

  }
 });


