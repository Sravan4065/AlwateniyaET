define({ 

  //Type your controller code here 
  onNavigate: function(){
    this.view.flxNext.onClick = this.NextPageOnClickAction;
    this.view.txtFirstNlastName.onTextChange = this.onTextChangeAction;
    this.view.HeaderRegister.imgBack.onTouchEnd = this.HeaderRegisterImgBackOnTouchEndAction;
  },

  NextPageOnClickAction: async function()
  {
    var self = this;
    voltmx.application.showLoadingScreen();

    var FullName = self.view.txtFirstNlastName.text;
    var verification_type = "fullName";
    var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/check-user-attribute";
    var request = new voltmx.net.HttpRequest();
    request.open("POST", url);
    var username = "aaf23ca6180cfacbd5c4ea23c5faa2dd";
    var password = "43f644c5a1bea3169a10586ef47807bc";
    var credentials = username + ":" + password;
//     var encodedValue = self.encodeToBase64(credentials);  
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
            voltmx.application.dismissLoadingScreen();
            var requestString = request.responseText;
            var requestJSON = JSON.parse(requestString);

            var opstatusRes = requestJSON.opstatus;

            if(opstatusRes === 0 ){
                if (requestJSON.data && Object.keys(requestJSON.data).length > 0) {
                 if( requestJSON.data.userExists === false && requestJSON.data.message === "Full name is valid"){

              self.view.flxUserNameError.setVisibility(false);
              var ntf = new voltmx.mvc.Navigation("frmRegister2");

              ntf.navigate(
                {
                  "txtFirstNlastName_text": self.view.txtFirstNlastName.text,
                  "_meta_"                : {
                    "eventName": "onClick",
                    "widgetId" : "flxNext"
                  }
                }
              );
              ntf.navigate();
              voltmx.store.setItem("fullName",FullName);
            }
            else{
               voltmx.application.dismissLoadingScreen();
          self.view.lblFullNameError.text = "*User Already Exists!!"
            }
            } 
              else{
                 voltmx.application.dismissLoadingScreen();
//                   alert(requestJSON.error.message);
                   self.view.lblFullNameError.text  = "*Backend or Service Error!"
              }
            }
            else{
                voltmx.application.dismissLoadingScreen();
               self.view.lblFullNameError.text = "*Response Error!!";
            }
          }
          else {
           voltmx.application.dismissLoadingScreen();
             self.view.lblFullNameError.text = "*Request Error!!";
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
    this.view.HeaderRegister.imgBack.setVisibility(true);
  },
  HeaderRegisterImgBackOnTouchEndAction: function(){
   if(this.view.txtFirstNlastName.text !== ""){
     this.view.HeaderRegister.imgBack.setVisibility(false);
       this.view.txtFirstNlastName.text = "";
      this.view.lblFullNameError.text = "";
     this.view.flxNext.setVisibility(false);
   }
  
  }
});


