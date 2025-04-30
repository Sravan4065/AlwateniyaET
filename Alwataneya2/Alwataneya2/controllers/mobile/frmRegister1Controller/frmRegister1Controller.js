define({ 

 //Type your controller code here 
  onNavigate: function(){
    this.view.flxNext.onClick = this.NextPageOnClickAction;
    this.view.txtFirstNlastName.onTextChange = this.onTextChangeAction;
//     this.view.preShow = this.onPreShow;
  },
//   onPreShow: function()
//   {
//     var self = this;
//      try {
//         // Get current SDK instance (this is usually available after login or init)
//         var sdkInstance = voltmx.sdk.getCurrentInstance();

//         // Pass voltmxRef to your ConfigurationService (as done in SDK source)
//         var configService = new ConfigurationService(sdkInstance);

//         configService.getAllClientAppProperties(
//             function success(res) {
//                 voltmx.print("Success: " + JSON.stringify(res));
//                 if (res["ALWATANEYA_DEVELOPMENT_PUBLIC_APP_KEY"]) {
//                     alert(" Property Value: " + res["ALWATANEYA_DEVELOPMENT_PUBLIC_APP_KEY"]);
//                   self.username = res["ALWATANEYA_DEVELOPMENT_PUBLIC_APP_KEY"];
//                   voltmx.store.setItem("appKey", res["ALWATANEYA_DEVELOPMENT_PUBLIC_APP_KEY"]);
//                   alert("appKey :"+ res["ALWATANEYA_DEVELOPMENT_PUBLIC_APP_KEY"]);
                  
//                 } else {
//                     alert(" Property key not found in response");
//                 }
//                if (res["ALWATANEYA_DEVELOPMENT_PUBLIC_APP_SECRET"]) {
//                     alert(" Property Value: " + res["ALWATANEYA_DEVELOPMENT_PUBLIC_APP_SECRET"]);
//                  self.password = res["ALWATANEYA_DEVELOPMENT_PUBLIC_APP_SECRET"];
//                  voltmx.store.setItem("appSecret", res["ALWATANEYA_DEVELOPMENT_PUBLIC_APP_SECRET"]);
//                  alert("app Sectret : "+res["ALWATANEYA_DEVELOPMENT_PUBLIC_APP_SECRET"])
//                 } else {
//                     alert(" Property key not found in response");
//                 }
//             },
//             function failure(err) {
//                 voltmx.print(" Failed to fetch client app properties: " + JSON.stringify(err));
//                 alert("Failed: " + JSON.stringify(err));
//             }
//         );

//     } catch (e) {
//         voltmx.print("Exception: " + e.message);
//         alert("Exception: " + e.message);
    
//   }
//   },
  NextPageOnClickAction: async function()
  {

//     alert("Entered  into onclicknext");
    var self = this;
// //   var surl =  "https://dev-hcltx.et.ae:443/services/ms_user_reg/checkusername";
//      var url      = "https://dev-hcltx.et.ae:443/services/ms_user_reg/checkusername";
//     var username = "520d5dc9934f9fb6a3b1be3bd6be467f";
//     var password = "91148b8f955957dc57b505cbcee411aa";
// // 91148b8f955957dc57b505cbcee411aa
// //         var ValidateUsername_inputparam =ValidateUsername_inputparam || {};
    
// //     ValidateUsername_inputparam["serviceID"] = "ms_user _reg$checkusername";
// //     ValidateUsername_inputparam["user_name"] = self.view.txtFirstNlastName.text;
// //     var ValidateUsername_httpheaders = {};
// //     ValidateUsername_inputparam["httpheaders"] = ValidateUsername_httpheaders;
// //     var ValidateUsername_httpconfigs = {};
// //     ValidateUsername_inputparam["httpconfig"] = ValidateUsername_httpconfigs;
// //     alert("Before service function call ");

//       var inputParamTable = {
//       httpconfig: { method: "POST" },  // HTTP method
//       authdata: { userid: username, password: password},  // Basic Auth
//       postdata  : JSON.stringify({ 
// //         "SellerAPInvoiceNumber": "210643604",
//         "user_name": self.view.txtFirstNlastName.text,
// //         "Password": "Auction123"
//       })  // Convert JSON object to string
//     };
// //     ms_user_reg$checkusername = 
// //       mfintegrationsecureinvokerasync(ValidateUsername_inputparam,
// //     " ms_user_reg", 
// //     "checkusername", 
// //              function(status,validateUserNameResponse){
//  voltmx.net.invokeServiceAsync(url, inputParamTable, function(status, validateUserNameResponse) {
//       alert("Status :"+status);
//       alert("Validate User Name JSON Response :"+JSON.stringify(validateUserNameResponse));
//       alert("opstatus : "+validateUserNameResponse.opstatus);
//       alert("userExists : "+validateUserNameResponse.data.userExists );
// //       var userExists = validateUserNameResponse.data.userExists ;
// //       alert("UserExistslength : "+userExists.length);
//       alert("Entered into Service Function call ");
//       if(validateUserNameResponse.opstatus ===0 && validateUserNameResponse.data.userExists === false &&validateUserNameResponse.data.message === "User name is valid"){
// //         alert("Entered into condb");   
//         var ntf = new voltmx.mvc.Navigation("frmRegister2");
// //         Alert("navigating...");
//          ntf.navigate({
//         "txtFirstNlastName_text": self.view.txtFirstNlastName.text,
//        "_meta_"                : {
//             "eventName": "onClick",
//             "widgetId" : "flxNext"
//         }
//     });
//         alert("navigation done!!");
//       }
//       else{
// //         alert("error : "+validateUserNameResponse.message);
//         this.view.flxUserNameError.setVisibility(true);
//         this.view.lblUserAlreadyExists.text = validateUserNameResponse.message;
//       }
//     },{});


           var FullName = self.view.txtFirstNlastName.text;
    var verification_type = "fullName";
//     var appKey =voltmx.store.getItem("appKey");
//     var appSecret = voltmx.store.getItem("appSecret");
        var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/check-user-attribute";
        var request = new voltmx.net.HttpRequest();
        request.open("POST", url);
       var username = "aaf23ca6180cfacbd5c4ea23c5faa2dd";
       var password = "43f644c5a1bea3169a10586ef47807bc";
       var credentials = username + ":" + password;
     var encodedValue = self.encodeToBase64(credentials);  
    // Setting Headers
//     request.setRequestHeader("Authorization", "Basic " + encodedValue);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Accept", "application/json");

        // Handling the response
   await new Promise((resolve,reject)=>{
     
    
        request.onReadyStateChange = function () {
            if (request.readyState === 4) {
                if (request.status === 200 ) {
//                     alert("✅ Success: " + request.responseText);
          var requestString = request.responseText;
           var requestJSON = JSON.parse(requestString);
// voltmx.print("requestJSON :"+requestJSON);
// alert("opstatus : "+requestJSON.opstatus);
//                     alert("✅ Success: " + request.responseText);
var opstatusRes = requestJSON.opstatus;
//                  alert("requestJSON.data.userExists :"+requestJSON.data.userExists);
//                   alert("requestJSON.data.message: "+requestJSON.data.message);
if(opstatusRes === 0 && requestJSON.data.userExists === false && requestJSON.data.message === "Full name is valid"){
 
  self.view.flxUserNameError.setVisibility(false);
    var ntf = new voltmx.mvc.Navigation("frmRegister2");
//         Alert("navigating...");
         ntf.navigate(
           {
        "txtFirstNlastName_text": self.view.txtFirstNlastName.text,
       "_meta_"    : {
            "eventName": "onClick",
            "widgetId" : "flxNext"
        }
    }
         );
ntf.navigate();
   voltmx.store.setItem("fullName",FullName);
                }
else{
self.view.flxUserNameError.setVisibility(true);
}
                }
                  else {
//                     alert("❌ Failed: " + request.status + " - " + request.responseText);
//                     voltmx.print("❌ Failed: " + request.status + " - " + request.responseText);
                }
            }
        };

        // JSON Data
        var jsonData = JSON.stringify({
          "verfication_type": verification_type,
          "value"           : FullName
        });

        // Sending Request
        request.send(jsonData);

    });
},
  encodeToBase64: function(input) {
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
                  keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }

    return output;
},
  
  onTextChangeAction: function(){
        this.view.flxNext.setVisibility(true);

  }
 });


