define({ 

  //Type your controller code here 
  onNavigate: function(){
    this.view.flxFooter.onClick = this.NavigateToSignUpForm;
//   this.view.btnSubmit.onClick = this.submitOnclickAction;
  },

  NavigateToSignUpForm: function(){
    var ntf = new voltmx.mvc.Navigation("frmRegister1");
    ntf.navigate();
  },

  getUserObj: function(){ 
    var self = this;
    var id = 4052;// Asset name
// Al_Wataneya_Custom_Services
    var AssetCategoriesMasterValues_inputparam = {
        "serviceID": "ms_user_token$get-user-obj",
        "user_id": id,   // Pass ID dynamically here
      "user_source": "azure",
        "httpheaders": {},
        "httpconfig": {}
    };

    // Service call to fetch categories
    ms_user_token$get_user_obj = mfintegrationsecureinvokerasync(
        AssetCategoriesMasterValues_inputparam,
        "ms_user_token", 
        "get-user-obj",
        function(status, response) {
            var responseString = JSON.stringify(response);
//           self.anotherServiceCall(responseString);
          voltmx.store.setItem("UserObj", responseString);
          
          alert("Response from login: " + responseString);
//           alert("Response from json Login : "+JSON.typeOf(responseString));
//             voltmx.print("response: " + JSON.stringify(responseString));
//           voltmx.print("response: " + responseString);
//           alert("response opstatus :"+response.opstatus);
          var login_status = true;
          voltmx.store.setItem("isLogin", login_status);
              if(response.opstatus === 0){
                
//             var ntf = new voltmx.mvc.Navigation("frmSellCarList12");
//                 ntf.navigate();
//           ntf.navigate({
//             "variable_email": email,
//             "txtEmail_text" : self.view.txtEmail.text,
//             "_meta_"        : {
//               "eventName": "onClick",
//               "widgetId" : "btnSubmit"
//             }
//           });
                
 

        }
          else{
            alert(response.opstatus);//9113
          }
        }
    );


},

      

  
  
  
  
  
  
  
  
  
  
//   submitOnclickAction: function(){
//     var self = this;
//       if (self.view.txtEmail.text === "" && self.view.txtPassword.text === "") {
//         alert("Fields should be mandatory!!");
//     }
//     else{
 
//         var login_inputparam = login_inputparam || {};
    
//     login_inputparam["serviceID"] = "UserLoginRepo$login";
//     login_inputparam["operation"] = "login";
//     login_inputparam["userid"] = self.view.txtEmail.text;
//     login_inputparam["password"] = self.view.txtPassword.text;
//     UserLoginRepo$login = 
//       mfidentityserviceinvoker("UserLoginRepo",
//                                 login_inputparam,
//                                  function success(){
//                  alert("Login Success!!");
//                  self.getUserObj();
//                       },
       
//        function failure(){
//               alert("Login Failed!!!!");

//     });
//     }
// }
});