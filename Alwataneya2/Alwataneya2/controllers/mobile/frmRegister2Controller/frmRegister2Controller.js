define({ 

 //Type your controller code here 
onNavigate: function(){
  this.view.preShow = this.onPreShow;
  this.view.flx2.onClick = this.PopupVisibilityAction;
  this.view.flxClosePopup.onClick = this.ClosePopupOnClick;
  this.view.btnSaveAndContinue.onClick = this.btnSaveAndContinueSellerOrBuyeronClickAction;
  this.view.flxFooter.onClick = this.nextOnclick;
  this.view.HeaderRegister.imgBack.onTouchEnd = this.HeaderRegisterimgBackRegister2onTouchEnd;
  this.view.radiobtnSeller.onSelection = this.radiobtnSellerOnSelectionAction;
  this.view.radiobtnBuyer.onSelection = this.radiobtnbuyerOnSelectionAction;
  this.view.radioBtnWithTrade.onSelection = this.radioBtnWithTradeOnSelectionAction;
  this.view.radioBtnWithoutTrade.onSelection = this.radioBtnWithoutTradeOnelectionAction;
  this.view.btnSellerRegisterSaveAandContinue.onClick=this.btnSellerRegisterSaveAandContinueOnclickAction;
  this.view.flxSellerRegIndividualClose.onClick = this.flxSellerRegIndividualCloseonClickAction;
  this.view.flxSellerRegisterPopupClose.onClick = this.flxSellerRegisterPopupCloseOnClickAction;
  this.view.flxWithoutUAE.onClick = this.flxWithoutUAEOnClickAction;
  this.view.HeaderRegisterForEmail.imgBack.onTouchEnd = this.HeaderRegisterForEmailImgBackOnTouchEndAction;
  this.view.tbxEmailAddress.onTextChange = this.tbxEmailAddressOnTextChangeAction;
  this.view.imgNextInEmail.onTouchEnd = this.imgNextInEmailonTouchEndAction;
 this.view.flxMobileFooter.onClick = this.imgNextInMobileVerificationOnTouchEndAction ;
  this.view.HeaderRegisterForVerificationCode.imgBack.onTouchEnd = this.HeaderRegisterForVerificationCodeImgBackOnTouchEndAction;
//   this.view.tbxCode1.onTextChange = this.emailtbxCode1OnTextChange;
  this.view.HeaderRegister3.imgBack.onTouchEnd = this.HeaderRegister3imgBackUsernameonTouchEndAction;
  
  this.view.HeaderRegisterMobileContainer.imgBack.onTouchEnd = this.HeaderRegisterMobileContainerImgBackOnTouchEndAction;
  this.view.tbxPhoneNumber.onTextChange = this.tbxPhoneNumberonTextChangeAction;
  this.view.flxOtpVerificationFooter.onClick = this.imgNextInOTPVerificationOnTouchEndAction;
  this.view.HeaderRegisterMobileOTP.imgBack.onTouchEnd = this.HeaderRegisterMobileOTPImgBackOnTouchEndAction;
//   this.view.tbxOTP1.onTextChange = this.tbxOTP1OnTextChangeAction;
    this.view.tbxUserName.onTextChange = this.tbxUserNameOnTextChangeAction;
this.view.flxUserNameFooter.onClick = this.imgNextUserNameOnTouchEndAction;
  this.view.flxEmailVerificationFooter.onClick= this.imgNextInEmailVerificationOnTouchEndAction;
    this.view.tbxPassWordName.onTextChange = this.tbxPassWordNameOnTextChangeAction;
  this.view.tbxConfirmPassWord.onTextChange = this.tbxConfirmPassWordOnTextChangeAction;
  this.view.btnPassWordAndConfirmPassword.onClick = this.btnPassWordAndConfirmPasswordOnClickAction;
  this.view.HeaderRegister1.imgBack.onTouchEnd = this.HeaderRegister1PassConfPassimgBackonTouchEndAction;
  this.view.HeaderRegister2.imgBack.onTouchEnd = this.HeaderRegister2TermsNCondimgBackonTouchEndAction;
    this.view.lblUploadSignedDocs.onTouchEnd = this.lblUploadSignedDocsOnTouchEndAction;
    this.view.lblDownloadTermsAndConditions.onTouchEnd = this.lblDownloadTermsAndConditionsOnTouchEndAction;
  this.view.btnUploadYourDoc.onClick = this.btnUploadYourDocOnClickAction;
//   this.view.flxUploadPopupClose.onClick = this.flxUploadPopupClose;
  //   this.view.flxTakeAaPhoto.onClick = this.flxTakeAPhotoOnClickAction;
//  this.view.flxChooseFromLibrary.onClick = this.flxChooseFromLibraryonClickAction;
//  this.view.flxChooseFromFile.onClick= this.flxChooseFromFileOnClickAction;
  this.view.chxIhaveReadTermsNCond.onSelection = this.chxIhaveReadTermsNCondOnSelectionAction;
    this.view.btnSaveAndContinueForTermsNConditions.onClick = this.btnSaveAndContinueForTermsNConditionsOnClickAction;
    this.view.imgClose.onTouchEnd = this.imgCloseOnTouchEndAction;
  this.view.btnOkay.onClick=this.btnOkayOnClickAction;

},

  onPreShow: function(){
     var self = this;
    if ((this.getPreviousForm() === "frmRegister1") && this.navigationContext && this.navigationContext._meta_ && (this.navigationContext._meta_.widgetId === "flxNext") && (this.navigationContext._meta_.eventName === "onClick")) {
        self.view.lblUserName.text = this.navigationContext.txtFirstNlastName_text;
     
    }
 
   
    },
    
  HeaderRegisterimgBackRegister2onTouchEnd: function(){
    var ntf =new voltmx.mvc.Navigation("frmRegister1");
    ntf.navigate();
  },
  PopupVisibilityAction: function(){
this.view.flxPopupSellerOrBuyer.setVisibility(true);
    this.view.flxPopupFromFooter.bottom = "-3%";
  },
  ClosePopupOnClick: function(){
    
this.view.flxPopupSellerOrBuyer.setVisibility(false);
    this.view.flxPopupFromFooter.bottom = "-45%";
  },
  btnSaveAndContinueSellerOrBuyeronClickAction: function(){
   var selectedKerForSeller =  this.view.radiobtnSeller.selectedKey;
    var selectedKeyValueForSeller = this.view.radiobtnSeller.selectedKeyValue;
    var selectedKeyForBuyer = this.view.radiobtnBuyer.selectedKey;
   var selectedKeyValueForBuyer= this.view.radiobtnBuyer.selectedKeyValue;

//     alert("selectedKerForSeller: "+selectedKerForSeller);//seller
//     alert("selectedKeyForBuyer :"+selectedKeyForBuyer);//null
//     alert("selectedKeyValueForSeller"+selectedKeyValueForSeller);//[Seller, s, ]
//     alert("selectedKeyValueForBuyer : "+selectedKeyValueForBuyer);
           var setUserName = voltmx.store.setItem("userName",  this.view.lblUserName.text);
   var gettedUserName= voltmx.store.getItem("userName");
// alert("setUserName : "+setUserName);
//     alert("gettedUserName : "+gettedUserName);//name

        
this.view.flxPopupSellerOrBuyer.setVisibility(false);
    this.view.flxPopupFromFooter.bottom = "-45%";
    if(selectedKerForSeller === null && selectedKeyForBuyer === null){
          alert("Select Any Type!!");
    }
    else if(selectedKerForSeller === null){
      this.view.lblSellerOrBuyer.text = selectedKeyForBuyer;
      this.view.lblSellerRegister.text =selectedKeyForBuyer;
    }
    else{
       this.view.lblSellerOrBuyer.text = selectedKerForSeller;
       this.view.lblSellerRegister.text =selectedKerForSeller;

    }
    
     if(this.view.lblSellerOrBuyer.text === ""){
      this.view.flxFooter.setVisibility(false);
    }
    else{
       this.view.flxFooter.setVisibility(true);
      var lblSellerOrBuyer = this.view.lblSellerOrBuyer.text;
     var setedUserType = voltmx.store.setItem("userType",lblSellerOrBuyer );
      var geteduserType = voltmx.store.getItem("userType");
//       alert("setedUserType : "+setedUserType);//null
//       alert("gettedUserYpe: "+geteduserType);
    }
  },
  nextOnclick: function(){
    this.view.flxPopupSellerRegistration.setVisibility(true);
    this.view.flxPopupRegister.bottom="-3%";
    this.view.flxPopupSellerOrBuyer.setVisibility(false);
//     alert("User Type :"+ this.view.lblSellerOrBuyer.text);
    
    
    
    
    
    
    
    
    
    
     this.view.lblSellerRegister.text =  this.view.lblSellerRegister.text +" "+"Registration";
  },
  
  
  radiobtnbuyerOnSelectionAction: function(){
        if(this.view.radiobtnBuyer.selectedKey === null){
       this.view.btnSaveAndContinue.skin ="sknbtnCPReg767676CstmBorder5pxFont70px";
          this.view.radiobtnSeller.selectedKey = "Seller";
    }
    else{
    this.view.btnSaveAndContinue.skin ="sknbtnCstmBorder5pxCPRegffffffFont70px";
this.view.radiobtnSeller.selectedKey = null;
    }
  },
  
  
  radiobtnSellerOnSelectionAction: function(){
    if(this.view.radiobtnSeller.selectedKey === null){
       this.view.btnSaveAndContinue.skin ="sknbtnCPReg767676CstmBorder5pxFont70px";
      this.view.radiobtnBuyer.selectedKey = "Buyer";
    }
    else{
          this.view.btnSaveAndContinue.skin ="sknbtnCstmBorder5pxCPRegffffffFont70px";
  this.view.radiobtnBuyer.selectedKey =null;
    }
  },
  radioBtnWithoutTradeOnelectionAction: function(){
//       this.view.btnSellerRegisterSaveAandContinue.skin ="sknbtnCstmBorder5pxCPRegffffffFont70px";
  if(this.view.radioBtnWithoutTrade.selectedKey === null){
       this.view.btnSellerRegisterSaveAandContinue.skin ="sknbtnCPReg767676CstmBorder5pxFont70px";
    this.view.radioBtnWithTrade.selectedKey = "WithTrade";
    }
    else{
    this.view.btnSellerRegisterSaveAandContinue.skin ="sknbtnCstmBorder5pxCPRegffffffFont70px";
   this.view.radioBtnWithTrade.selectedKey =null;
    }
  },
  radioBtnWithTradeOnSelectionAction: function(){
//       this.view.btnSellerRegisterSaveAandContinue.skin="sknbtnCstmBorder5pxCPRegffffffFont70px";
  if( this.view.radioBtnWithTrade.selectedKey === null){
       this.view.btnSellerRegisterSaveAandContinue.skin ="sknbtnCPReg767676CstmBorder5pxFont70px";
   this.view.radioBtnWithoutTrade.selectedKey = "WithoutTrade";
    }
    else{
    this.view.btnSellerRegisterSaveAandContinue.skin ="sknbtnCstmBorder5pxCPRegffffffFont70px";
    this.view.radioBtnWithoutTrade.selectedKey =null;
    }
  },
  btnSellerRegisterSaveAandContinueOnclickAction: function(){
    var selectedWithoutTrade =this.view.radioBtnWithoutTrade.selectedKey;
    var selectedWithTrade = this.view.radioBtnWithTrade.selectedKey;
    this.view.flxPopupSellerRegistrationForIndividual.setVisibility(true);
    this.view.flxFooterPopupSellerRegistrationForIndividual.bottom="-3%";
    this.view.lblSellerRegForIndividual.text = this.view.lblSellerOrBuyer.text+ " Registration for individual";
   if(this.view.radioBtnWithoutTrade.selectedKey === null&& this.view.radioBtnWithTrade.selectedKey === null ) {
     alert("Select any type !!!");
   }
    else if(this.view.radioBtnWithoutTrade.selectedKey === null){
      voltmx.store.setItem("trade", selectedWithTrade);
      var gettedWithTrade =voltmx.store.getItem("trade");
//       alert("gettedWithTrade :"+gettedWithTrade);
    }
    else{
         voltmx.store.setItem("trade", selectedWithoutTrade);
      var gettedWithoutTrade = voltmx.store.getItem("trade");
//       alert("gettedWithoutTrade : "+gettedWithoutTrade);
    }
  },
  flxSellerRegIndividualCloseonClickAction: function(){
     this.view.flxPopupSellerRegistrationForIndividual.setVisibility(false);
    this.view.flxFooterPopupSellerRegistrationForIndividual.bottom="-45%";
  },
  flxSellerRegisterPopupCloseOnClickAction: function(){
    this.view.flxPopupSellerRegistration.setVisibility(false);
    this.view.flxPopupRegister.bottom= "-45%";
    this.view.flxPopupFromFooter.bottom= "-3%";
    this.view.flxPopupSellerOrBuyer.setVisibility(true);
    
  },
 
  flxWithoutUAEOnClickAction: function(){
this.view.flxEmailContainer.setVisibility(true);
    this.view.HeaderRegister.imgBack.setVisibility(true);
    this.view.flxSellerRegIndiFooterBody.setVisibility(false);
    this.view.flxFooterPopupSellerRegistrationForIndividual.bottom ="-3";
    this.view.flxPopupSellerRegistrationForIndividual.setVisibility(false);
    this.view.HeaderRegisterForEmail.setVisibility(true);
    this.view.flxSellerOrBuyerMain.setVisibility(false);
    this.view.flxFooter.setVisibility(false);
   this.view.flxPopupRegister.bottom="=55%";
    this.view.flxPopupSellerRegistration.setVisibility(false);
    
  },
HeaderRegisterForEmailImgBackOnTouchEndAction: function(){
  this.view.flxEmailContainer.setVisibility(false);
  this.view.flxPopupSellerRegistrationForIndividual.setVisibility(true);
  this.view.flxFooterPopupSellerRegistrationForIndividual.bottom = "-5%";
 this.view.flxSellerOrBuyerMain.setVisibility(true);
  this.view.flxSellerRegIndiFooterBody.setVisibility(true);
  
  
},
  
  tbxEmailAddressOnTextChangeAction: function(){
      var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(this.view.tbxEmailAddress.text.match(pattern)){
 this.view.lblEnterValidmail.setVisibility(false);
      this.view.flxEmailFooter.setVisibility(true);
     
    }
    else{
       this.view.lblEnterValidmail.setVisibility(true);
      this.view.flxEmailFooter.setVisibility(false);
    }
    if(this.view.tbxEmailAddress.text !== null ){
      this.view.lblEmailRequired.setVisibility(false);
    }
    else{
       this.view.lblEmailRequired.setVisibility(true);
    }
  },
// imgNextInEmailonTouchEndAction: function(){
//       var self = this;
//  var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
//  if(self.view.tbxEmailAddress.text !== null &&  this.view.tbxEmailAddress.text.match(pattern)){
  
   
//         var ValidateEmail_inputparam = ValidateEmail_inputparam || {};
    
//     ValidateEmail_inputparam["serviceID"] = "Al_Wataneya_Custom_Services$ValidateEmail";
//     ValidateEmail_inputparam["email"] = self.view.tbxEmailAddress.text;
//     var ValidateEmail_httpheaders = {};
//     ValidateEmail_inputparam["httpheaders"] = ValidateEmail_httpheaders;
//     var ValidateEmail_httpconfigs = {};
//     ValidateEmail_inputparam["httpconfig"] = ValidateEmail_httpconfigs;
//     Al_Wataneya_Custom_Services$ValidateEmail = 
//       mfintegrationsecureinvokerasync(ValidateEmail_inputparam, 
//    "Al_Wataneya_Custom_Services",
//     "ValidateEmail", 
//             function(status,response){
// //       alert("Alert email  stats :"+status);
//       alert("lert for rmail response : "+JSON.stringify(response));
//       alert("message :"+response.data.message);
//       if(response.opstatus === 0 && response.data.message === "Valid Email")
//       {
//         voltmx.store.setItem("email", self.view.tbxEmailAddress.text);
//         var verification_type = "Email";  
//         var SentEmailOtp_inputparam = SentEmailOtp_inputparam||{};
    
//     SentEmailOtp_inputparam["serviceID"] = "Al_Wataneya_Custom_Services$SentEmailOtp";
//     SentEmailOtp_inputparam["email"] = self.view.tbxEmailAddress.text;
//     SentEmailOtp_inputparam["verification_type"] = verification_type;

//     var SentEmailOtp_httpheaders = {};
//     SentEmailOtp_inputparam["httpheaders"] = SentEmailOtp_httpheaders;
//     var SentEmailOtp_httpconfigs = {};
//     SentEmailOtp_inputparam["httpconfig"] = SentEmailOtp_httpconfigs;
//     Al_Wataneya_Custom_Services$SentEmailOtp = mfintegrationsecureinvokerasync(SentEmailOtp_inputparam, "Al_Wataneya_Custom_Services", "SentEmailOtp", function(){
//       alert("status in emailotp :"+status);
//       alert("Response in email otp :"+JSON.stringify(response));
//       if(response.opstatus === 0){
//         var emailOTP = response.data.otp;
//         voltmx.store.setItem("emailOTP", "emailOTP");
//         var reg_id = response.data.reg_id;
//         voltmx.store.setItem("regId"+reg_id);
//         var email = response.data.email;
//         voltmx.store.setItem("email", email);
//         var message = response.message;
//         alert("Message : "+message); 
//          self.view.flxEmailContainer.setVisibility(false);
//          self.view.lblEmailRequired.setVisibility(false);
//          self.view.flxEmailVerificationCode.setVisibility(true);
//       }
//       else{
//         alert("Email otp not ");
//       }
        
//     });

     
//       }
//       else{
//         alert("Error: "+response.data.message);
//       }
//     });



//   var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/checkemail";

//         var request = new voltmx.net.HttpRequest();
//         request.open("POST", url);
        
//         // Setting Headers
//         request.setRequestHeader("Authorization", "Basic NTIwZDVkYzk5MzRmOWZiNmEzYjFiZTNiZDZiZTQ2N2Y6OTExNDhiOGY5NTU5NTdkYzU3YjUwNWNiY2VlNDExYWE=");
//         request.setRequestHeader("Content-Type", "application/json");
//         request.setRequestHeader("Accept", "application/json");

//         // Handling the response
//         request.onReadyStateChange = function () {
//             if (request.readyState === 4) {
//                 if (request.status === 200 ) {
//                     alert("✅ Success from email check: " + request.responseText);
//           var requestStringEmail = request.responseText;
//            var requestJSONEmail = JSON.parse(requestStringEmail);
// voltmx.print("requestJSON from validate email :"+requestJSONEmail);
// alert("opstatus : "+requestJSONEmail.opstatus);
// //                     voltmx.print("✅ Success: " + request.responseText);
// var opstatusRes = requestJSONEmail.opstatus;
// if(opstatusRes === 0){
//    self.SendEmailOTP();

//                 }
// else{
// alert("response error!!! otp not sent");
// }
//                 }
//             }
//  else {
//                     alert("❌ Failed: frm email check " + request.status + " - " + request.responseText);
//                     voltmx.print("❌ Failed: " + request.status + " - " + request.responseText);
//                 }

//  };
//  }
//       else{
//           self.view.lblEmailRequired.setVisibility(true);
//           self.view.flxEmail.setVisibility(true); 
//         self.view.flxEmailVerificationCode.setVisibility(false);
//         }
// var CheckEmailOTPJson = JSON.stringify({
//         "email": self.view.tbxEmailAddress.text,
//         });

//         request.send(CheckEmailOTPJson);
        
// },


// SendEmailOTP: function(){
//  var self = this; 
//   voltmx.store.setItem("email", self.view.tbxEmailAddress.text);
// //         var verification_type = "Email"; 
//  var request = new voltmx.net.HttpRequest();
// var url2 = "https://dev-hcltx.et.ae:443/services/ms_user_reg/send-email-otp";

   
//         request.open("POST", url2);
        
//         // Setting Headers
//         request.setRequestHeader("Authorization", "Basic NTIwZDVkYzk5MzRmOWZiNmEzYjFiZTNiZDZiZTQ2N2Y6OTExNDhiOGY5NTU5NTdkYzU3YjUwNWNiY2VlNDExYWE=");
//         request.setRequestHeader("Content-Type", "application/json");
//         request.setRequestHeader("Accept", "application/json");

//         // Handling the response
//         request.onReadyStateChange = function () {
//             if (request.readyState === 4) {
//                 if (request.status === 200 ) {
//                     alert("✅ Success from sent emil otp: " + request.responseText);
//           var requestStringSentEmail = request.responseText;
//            var requestJSONSentEmail = JSON.parse(requestStringSentEmail);
// voltmx.print("requestJSON from send email otp :"+requestJSONSentEmail);
// alert("opstatus from send email otp: "+requestJSONSentEmail.opstatus);
// //                     voltmx.print("✅ Success: " + request.responseText);
// var opstatusRes2 = requestJSONSentEmail.opstatus;
// if(opstatusRes2 === 0){


//         var emailOTP = requestJSONSentEmail.data.otp;
//         voltmx.store.setItem("emailOTP", "emailOTP");
//         var reg_id = requestJSONSentEmail.data.reg_id;
//         voltmx.store.setItem("regId"+reg_id);
//         var email = requestJSONSentEmail.data.email;
//         voltmx.store.setItem("email", email);
// //         var message = response.message;
// //         alert("Message : "+message); 
//          self.view.flxEmailContainer.setVisibility(false);
//          self.view.lblEmailRequired.setVisibility(false);
//          self.view.flxEmailVerificationCode.setVisibility(true);
// }
//                 }
//         }
//          else {
//                     alert("❌ Failed from email otp: " + request.status + " - " + request.responseText);
//        voltmx.print("❌ Failed: " + request.status + " - " + request.responseText);
//                 }
//         };
// var SendEmailOTPJson = JSON.stringify({
//         "email":self.view.tbxEmailAddress.text,
// "verification_type" : verification_type
//         });
//         request.send(SendEmailOTPJson);

//         // Sending Request
// },

  imgNextInEmailonTouchEndAction: async function() {
    var self = this;
    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (self.view.tbxEmailAddress.text !== null && self.view.tbxEmailAddress.text.match(pattern)) {
      var verification_type = "email";
      var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/check-user-attribute";

      try {
        // Create HTTP request for email validation
        var request = new voltmx.net.HttpRequest();
        request.open("POST", url);
       var username = "aaf23ca6180cfacbd5c4ea23c5faa2dd";
       var password = "43f644c5a1bea3169a10586ef47807bc";
        var credentials = username + ":" + password;
        var encodedValue = this.encodeToBase64(credentials);  
        // Set headers
//         request.setRequestHeader("Authorization", "Basic " + encodedValue);
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Accept", "application/json");

        // Handle the response
        request.onReadyStateChange = async function() {
          if (request.readyState === 4) {
            if (request.status === 200) {
//               alert("✅ Success from email check: " + request.responseText);
              var requestStringEmail = request.responseText;
              var requestJSONEmail = JSON.parse(requestStringEmail);
              voltmx.print("requestJSON from validate email: " + requestJSONEmail);
//               alert("opstatus: " + requestJSONEmail.opstatus);

              var opstatusRes = requestJSONEmail.opstatus;
              if (opstatusRes === 0 && requestJSONEmail.data.userExists=== false && requestJSONEmail.data.message === "Email Id is valid") {
                // Calling the async function to handle the OTP request
                voltmx.store.setItem("email", self.view.tbxEmailAddress.text);
                await self.sendEmailOTPRequest(self.view.tbxEmailAddress.text);
              } else {
//                 alert("response error!!! OTP not sent");
                              alert("❌ Failed to check email: " + request.status + " - " + request.responseText);

              }
            } else {
//               alert("❌ Failed to check email: " + request.status + " - " + request.responseText);
            }
          }
        };

        var requestData = JSON.stringify({
          "verfication_type": verification_type,
          "value": self.view.tbxEmailAddress.text
        });

        request.send(requestData); // Send the request

      } catch (error) {
        alert("❌ Error: " + error.message);
        voltmx.print("❌ Error: " + error.message);
      }
    } else {
      self.view.lblEmailRequired.setVisibility(true);
      self.view.flxEmail.setVisibility(true);
      self.view.flxEmailVerificationCode.setVisibility(false);
    }
  },


  
  
  
// Function to handle sending OTP for the email
sendEmailOTPRequest: async function(email) {

    var self = this;
  var verification_type = "Email";
    try {

        return new Promise((resolve, reject) => {
            var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/send-email-otp";

            var request = new voltmx.net.HttpRequest();
            request.open("POST", url);

            // Prepare Base64 credentials
            var username = "d6bebb28b79927d1c747ea19b028ceb4";
            var password = "5da9490e70d8f3201e20c4cf203961da";
            var credentials = username + ":" + password;
            var encodedValue = this.encodeToBase64(credentials);  

//             request.setRequestHeader("Authorization", "Basic " + encodedValue);
            request.setRequestHeader("Content-Type", "application/json");
            request.setRequestHeader("Accept", "application/json");

            // Handling the response
            request.onReadyStateChange = function() {
                if (request.readyState === 4) {
                    if (request.status === 200) {
             
                        var requestStringSentEmail = request.responseText;
                        var requestJSONSentEmail = JSON.parse(requestStringSentEmail);
//                         alert("requestJSON from send email OTP: " + requestJSONSentEmail);

                        var opstatusRes2 = requestJSONSentEmail.opstatus;
                        if (opstatusRes2 === 0 &&requestJSONSentEmail.data.reg_status === "INITIATED" && requestJSONSentEmail.data.otp!==null ) {
                            var emailOTP = requestJSONSentEmail.data.otp;
                            voltmx.store.setItem("emailOTP", emailOTP);
                            var reg_id = requestJSONSentEmail.data.reg_id;
                            voltmx.store.setItem("regId", reg_id);
                            var email = requestJSONSentEmail.data.email;
                            voltmx.store.setItem("email", email);
                          var country_code = requestJSONSentEmail.data.country_code;
                          voltmx.store.setItem("country_code", country_code);
                              var user_type =  requestJSONSentEmail.data.user_type;
                             voltmx.store.setItem("userType", user_type);
                            // Update the UI
                            self.view.flxEmailContainer.setVisibility(false);
                            self.view.lblEmailRequired.setVisibility(false);
                            self.view.flxEmailVerificationCode.setVisibility(true);
                            self.emailtbxCode1OnTextChange();
                            
                            resolve(); // Resolve when successful
                        } 

                      else {
                            reject(new Error("OTP not sent. Opstatus: " + opstatusRes2)); // Reject if opstatus isn't 0
//                                             alert("❌ Failed: " + request.status + " - " + request.responseText);

                        }
                 
                    } else {
                        reject(new Error("Failed to send email OTP: " + request.status + " - " + request.responseText)); // Reject on failure
                    }
        }
            }
            var requestData = JSON.stringify({
                "email": self.view.tbxEmailAddress.text,
                "verification_type": verification_type,
            
            });

            request.send(requestData); // Send the request 
            });
         
          
    }   
       catch (error) {
        alert("❌ Error sending email OTP: " + error.message);
        voltmx.print("❌ Error sending email OTP: " + error.message);
    }
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


  HeaderRegisterForVerificationCodeImgBackOnTouchEndAction: function(){
    this.view.flxEmailVerificationCode.setVisibility(false);
    this.view.flxEmailContainer.setVisibility(true);
  },
  emailtbxCode1OnTextChange: function(){
    var emailOTP = voltmx.store.getItem("emailOTP");
     var code1 = emailOTP.slice(0, 1);
    var code2 = emailOTP.slice(1, 2);
    var code3 = emailOTP.slice(2, 3);
    var code4 = emailOTP.slice(3, 4);
//     var code5 = emailOTP.slice(4, 5);
//     var code6 = emailOTP.slice(5, 6);
//     alert("email Otp: code1 ="+code1 +"code2 ="+code2+"code3 ="+code3+"code4 ="+code4);
     // Assign values to textboxes
    this.view.tbxCode1.text = code1;
    this.view.tbxCode2.text = code2;
    this.view.tbxCode3.text = code3;
    this.view.tbxCode4.text = code4;
//     this.view.tbxCode5.text = code5;
//     this.view.tbxCode6.text = code6;
    if(this.view.tbxCode1.text !==null&&this.view.tbxCode2.text !==null&&this.view.tbxCode3.text !==null&&this.view.tbxCode4.text !==null)
      {
        var email = voltmx.store.getItem("email");
        this.view.flxEmailVerificationFooter.setVisibility(true);
      }
    else{
       this.view.flxMobileContainer.setVisibility(false);
        this.view.flxEmailVerificationCode.setVisibility(true);
    }
  },
  imgNextInEmailVerificationOnTouchEndAction: async function(){
    var self = this;
     var email = voltmx.store.getItem("email");
     var verification_type ="email";
 var emailOTP = voltmx.store.getItem("emailOTP");
    var regId = voltmx.store.getItem("regId");
        var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/verify-otp";

         try {
        var request = new voltmx.net.HttpRequest();
        request.open("POST", url);

        var username = "d6bebb28b79927d1c747ea19b028ceb4";
        var password = "5da9490e70d8f3201e20c4cf203961da";
        var credentials = username + ":" + password;
        var encodedValue = this.encodeToBase64(credentials);

        // Setting Headers
//         request.setRequestHeader("Authorization", "Basic " + encodedValue);
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Accept", "application/json");

        // Use Promise-based onReadyStateChange to work with async/await
        await new Promise((resolve, reject) => {
            request.onReadyStateChange = function() {
                if (request.readyState === 4) {
                    if (request.status === 200) {
//                         alert("✅ Success from verify otp: " + request.responseText);
                        var requestString = request.responseText;
                        var requestJSON = JSON.parse(requestString);
//                         alert("requestJSON verify email: " + JSON.stringify(requestJSON)); // Stringify for better logging
//                         alert("opstatus: " + requestJSON.opstatus);
                        var is_verified = requestJSON.data.is_verified;
                      var reg_id = requestJSON.data.reg_id;
                        voltmx.store.setItem("regId", reg_id);
                        var opstatusRes = requestJSON.opstatus;
                        if (opstatusRes === 0 &&requestJSON.data.is_verified === true  ) {
                            self.view.flxMobileContainer.setVisibility(true);
                            self.view.lblSignedEmail.text = email;
                            self.view.flxEmailVerificationCode.setVisibility(false);
                        } else {
//                                               alert("❌ Failed: " + request.status + " - " + request.responseText);

                            alert("❌ OTP verification failed! Response error.");
                        }
                        resolve(); // Resolve the promise on success
                    } else {
//                         alert("❌ Failed: " + request.status + " - " + request.responseText);
//                         voltmx.print("❌ Failed: " + request.status + " - " + request.responseText);
                        reject(new Error("Failed to verify OTP.")); // Reject on failure
                    }
                }
            };

            // Sending JSON data
            var jsonData = JSON.stringify({
                "email": email,
                "verification_type": verification_type,
                "otp": emailOTP,
              "reg_id": regId
            });

            request.send(jsonData); // Send the request
        });
    } catch (error) {
        alert("❌ Error: " + error.message);
        voltmx.print("❌ Error: " + error.message);
    }


},
// ==========================================================================================   
//   imgNextInMobileVerificationOnTouchEndAction:  function(){
//     if(this.view.tbxPhoneNumber.text !== null ){
//        var self = this;
// // var countrycode = "+971";
//       var verification_type = "phone";
//       var reg_id = voltmx.store.getItem("regId");

//         var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/check-user-attribute";

//         var request = new voltmx.net.HttpRequest();
//         request.open("POST", url);
        
//     var username = "d6bebb28b79927d1c747ea19b028ceb4";
//     var password = "5da9490e70d8f3201e20c4cf203961da";
//     var credentials = username + ":" + password;
//     var encodedValue = this.encodeToBase64(credentials);  
//     // Setting Headers
// //     request.setRequestHeader("Authorization", "Basic " + encodedValue);
//     request.setRequestHeader("Content-Type", "application/json");
//     request.setRequestHeader("Accept", "application/json");

//         // Handling the response
//         request.onReadyStateChange =  function () {
//             if (request.readyState === 4) {
//                 if (request.status === 200 ) {
//               var requestString = request.responseText;
//               var requestJSON = JSON.parse(requestString);
// //          alert("✅ Success: " + request.responseText);
//         // alert("opstatus : "+requestJSON.opstatus);
// var opstatusRes = requestJSON.opstatus;
// if(opstatusRes === 0 && requestJSON.data.message === "Phone Number is valid" && requestJSON.data.userExists === false){
//  self.sendMobileOTP();

//   voltmx.store.setItem("mobile", self.view.tbxPhoneNumber.text);
//                 }
// else{
// alert("response error!!!");
// //                       alert("❌ Failed: " + request.status + " - " + request.responseText);

// }
//                 } else {
// //                     alert("❌ Failed: " + request.status + " - " + request.responseText);
//                     voltmx.print("❌ Failed: " + request.status + " - " + request.responseText);
//                 }
//             }
//         };

//         // JSON Data
//         var jsonData = JSON.stringify({
//          "value" : self.view.tbxPhoneNumber.text,
//          "verfication_type"   :verification_type ,
         
//         });

//         // Sending Request
//         request.send(jsonData);
   
// }
//        else{
// //       alert("Mobile num should not be empty!!");
//      self.view.lblMobileRequired.setVisibility(true);
//              self.view.flxMobileVerifyAndOTPCode.setVisibility(false);
//             this.view.flxMobileContainer.setVisibility(true);
//     }
          
    
   
//   },
// ================================================================================
// imgNextInMobileVerificationOnTouchEndAction: function () {
//     var self = this;

//     if (self.view.tbxPhoneNumber.text !== null && self.view.tbxPhoneNumber.text.trim() !== "") {
//         var verification_type = "phone";
//         var reg_id = voltmx.store.getItem("regId");
//         var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/check-user-attribute";

//         var request = new voltmx.net.HttpRequest();
//         request.open("POST", url);

//         var username = "d6bebb28b79927d1c747ea19b028ceb4";
//         var password = "5da9490e70d8f3201e20c4cf203961da";
//         var credentials = username + ":" + password;
//         var encodedValue = this.encodeToBase64(credentials);

//         // ✅ RECOMMENDED: Include authorization if backend expects it
//         // request.setRequestHeader("Authorization", "Basic " + encodedValue);
//         request.setRequestHeader("Content-Type", "application/json");
//         request.setRequestHeader("Accept", "application/json");

//         // Prepare payload
//         var jsonData = JSON.stringify({
//             "value": self.view.tbxPhoneNumber.text,
//             "verfication_type": verification_type // ✅ FIXED: no typo here
//         });

//         // Handle the response
//         request.onReadyStateChange = function () {
//             if (request.readyState === 4) {
//                 if (request.status === 200) {
//                     var responseJSON = JSON.parse(request.responseText);
//                     voltmx.print("✅ Phone check response: " + request.responseText);

//                     var opstatusRes = responseJSON.opstatus;

//                     if (opstatusRes === 0 &&
//                         responseJSON.data.message === "Phone Number is valid" &&
//                         responseJSON.data.userExists === false) {

//                         // ✅ Call OTP function (use promise-style handling)
//                         self.sendMobileOTP()
//                             .then(function () {
//                                 voltmx.store.setItem("mobile", self.view.tbxPhoneNumber.text);
// //                                 voltmx.print("✅ Mobile OTP sent and stored");
//                             })
//                             .catch(function (err) {
//                                 alert("❌ Failed to send mobile OTP: " + err.message);
//                                 voltmx.print("❌ Error: " + err.message);
//                             });

//                     } else {
//                         alert("❌ Phone number validation failed.");
//                         voltmx.print("❌ Unexpected response: " + request.responseText);
//                     }
//                 } else {
//                     alert("❌ Phone check failed: " + request.status);
//                     voltmx.print("❌ HTTP Error: " + request.responseText);
//                 }
//             }
//         };

//         // Send request
//         request.send(jsonData);

//     } else {
//         // Handle empty input
//         self.view.lblMobileRequired.setVisibility(true);
//         self.view.flxMobileVerifyAndOTPCode.setVisibility(false);
//         self.view.flxMobileContainer.setVisibility(true);
//     }
// },
//   ================================================================================
 imgNextInMobileVerificationOnTouchEndAction: async function() {
    var self = this;

    if (self.view.tbxPhoneNumber.text!== null ) {
        var verification_type = "phone";
      var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/check-user-attribute";

      try {
        // Create HTTP request for email validation
        var request = new voltmx.net.HttpRequest();
        request.open("POST", url);
       var username = "aaf23ca6180cfacbd5c4ea23c5faa2dd";
       var password = "43f644c5a1bea3169a10586ef47807bc";
        var credentials = username + ":" + password;
        var encodedValue = this.encodeToBase64(credentials);  
        // Set headers
//         request.setRequestHeader("Authorization", "Basic " + encodedValue);
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Accept", "application/json");

        // Handle the response
        request.onReadyStateChange = async function() {
          if (request.readyState === 4) {
            if (request.status === 200) {
//               alert("✅ Success from email check: " + request.responseText);
              var requestStringMobile = request.responseText;
              var requestJSONMobile = JSON.parse(requestStringMobile);
              voltmx.print("requestJSON from validate mobile: " + requestJSONMobile);
//               alert("opstatus: " + requestJSONEmail.opstatus);

              var opstatusRes = requestJSONMobile.opstatus;
              if (opstatusRes === 0 && requestJSONMobile.data.userExists=== false && requestJSONMobile.data.message === "Phone Number is valid") {
                // Calling the async function to handle the OTP request
//   voltmx.store.setItem("mobile", self.view.tbxPhoneNumber.text);
                await self.sendMobileOTP();
  voltmx.store.setItem("mobile", self.view.tbxPhoneNumber.text);
              } else {
//                 alert("response error!!! OTP not sent");
                              alert("❌ Failed to check mobile: " + request.status + " - " + request.responseText);

              }
            } else {
//               alert("❌ Failed to check email: " + request.status + " - " + request.responseText);
            }
          }
        };

        var requestData = JSON.stringify({
          "verfication_type": verification_type,
          "value": self.view.tbxPhoneNumber.text
        });

        request.send(requestData); // Send the request

      } catch (error) {
        alert("❌ Error: " + error.message);
        voltmx.print("❌ Error: " + error.message);
      }
    } else {
        self.view.lblMobileRequired.setVisibility(true);
        self.view.flxMobileVerifyAndOTPCode.setVisibility(false);
        self.view.flxMobileContainer.setVisibility(true);
    }
  },


// ===================================================================
  sendMobileOTP: async function(){
       var self = this;
//     var country_code="+971";
          var country_code = voltmx.store.getItem("country_code");

    var verification_type = "Mobile";
    var reg_id = voltmx.store.getItem("regId");
        
    try {

        return new Promise((resolve, reject) => {
            var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/send-mobile-otp";

            var request = new voltmx.net.HttpRequest();
            request.open("POST", url);

            // Prepare Base64 credentials
            var username = "d6bebb28b79927d1c747ea19b028ceb4";
            var password = "5da9490e70d8f3201e20c4cf203961da";
            var credentials = username + ":" + password;
            var encodedValue = this.encodeToBase64(credentials);  

//             request.setRequestHeader("Authorization", "Basic " + encodedValue);
            request.setRequestHeader("Content-Type", "application/json");
            request.setRequestHeader("Accept", "application/json");

            // Handling the response
            request.onReadyStateChange = function() {
                if (request.readyState === 4) {
                    if (request.status === 200) {
             
                        var requestStringSentMobile = request.responseText;
                        var requestJSONSentMobile = JSON.parse(requestStringSentMobile);
//                         alert("requestJSON from send mobile otp: " + requestJSONSentMobile);

                      var opstatusRes2 = requestJSONSentMobile.opstatus;
                      if (opstatusRes2 === 0 &&requestJSONSentMobile.data.reg_status === "INITIATED" &&requestJSONSentMobile.data.otp!==null ) {
                        //     var countryCode = requestJSON.data.country_code;
                              var Mobileotp = requestJSONSentMobile.data.otp;
                              voltmx.store.setItem("otp", Mobileotp);
                              var reg_id= requestJSONSentMobile.data.reg_id;
                             voltmx.store.setItem("regId", reg_id);
                        var phone_number = requestJSONSentMobile.data.phone_number;
                         voltmx.store.setItem("mobile", phone_number);
//                            
                          self.view.lblMobileRequired.setVisibility(false);
                             self.view.flxMobileContainer.setVisibility(false);        
                        self.view.flxMobileVerifyAndOTPCode.setVisibility(true);
                         self.tbxOTP1OnTextChangeAction();
                        resolve(); // Resolve when successful
                        } 

                      else {
                            reject(new Error("OTP not sent. Opstatus: " + opstatusRes2)); // Reject if opstatus isn't 0
                                                reject(new Error("Failed to send email OTP: " + request.status + " - " + request.responseText)); // Reject on failure

                        }
                 
                    } else {
                        reject(new Error("Failed to send email OTP: " + request.status + " - " + request.responseText)); // Reject on failure
                    }
        }
            }
            var requestData = JSON.stringify({
                
                "verification_type": verification_type,
              "reg_id":reg_id,
              "country_code":country_code,
"mobile_number": self.view.tbxPhoneNumber.text,
              
            });

            request.send(requestData); // Send the request 
            });
         
          
    }   
       catch (error) {
        alert("❌ Error sending email OTP: " + error.message);
        voltmx.print("❌ Error sending email OTP: " + error.message);
    }
  
    
  },
  
  HeaderRegisterMobileContainerImgBackOnTouchEndAction: function(){
    this.view.flxEmailVerificationCode.setVisibility(true);
    this.view.flxMobileContainer.setVisibility(false);
  },
    tbxPhoneNumberonTextChangeAction: function(){ 
          var pattern = /^\d{10}$/; // Regular expression for matching a 10-digit phone number.

     if(this.view.tbxPhoneNumber.text.match(pattern)){
             this.view.lblEnterValidMobileNumber.setVisibility(false);
       this.view.flxMobileFooter.setVisibility(true);
     }else{
      this.view.lblEnterValidMobileNumber.setVisibility(true);
        this.view.flxMobileFooter.setVisibility(false);
     }
  },
  
  tbxOTP1OnTextChangeAction: function(){
    var otp = voltmx.store.getItem("otp");
      var code1 = otp.slice(0, 1);
    var code2 = otp.slice(1, 2);
    var code3 = otp.slice(2, 3);
    var code4 = otp.slice(3, 4);
//     var code5 = otp.slice(4, 5);
//     var code6 = otp.slice(5, 6);
//     alert("email Otp: code1 ="+code1 +"code2 ="+code2+"code3 ="+code3+"code4 ="+code4);
     // Assign values to textboxes
    this.view.tbxOTP1.text = code1;
    this.view.tbxOTP2.text = code2;
 this.view.tbxotp3.text = code3;
  this.view.tbxOTP4.text = code4;
//     this.view.tbxOTP5.text = code5;
//     this.view.tbxOTP6.text = code6;
    if(this.view.tbxOTP1.text !==null&&this.view.tbxOTP2.text !==null&&this.view.tbxotp3.text !==null&&this.view.tbxOTP4.text !==null)
      {
   this.view.flxOtpVerificationFooter.setVisibility(true);
      }
    else{
      this.view.flxOtpVerificationFooter.setVisibility(false);
    }
  },
  HeaderRegisterMobileOTPImgBackOnTouchEndAction: function(){
    this.view.flxMobileContainer.setVisibility(true);
    this.view.flxMobileVerifyAndOTPCode.setVisibility(false);
  },
  imgNextInOTPVerificationOnTouchEndAction: async function(){
      var self = this;
//         var VerifyOtp_inputparam = {};
        var otp = voltmx.store.getItem("otp");
//         var countrycode = "+971";
              var countrycode = voltmx.store.getItem("country_code");

    var verification_type = "Mobile";
//     VerifyOtp_inputparam["serviceID"] = "Al_Wataneya_Custom_Services$VerifyOtp";
//     VerifyOtp_inputparam["mobile_number"] = self.view.tbxPhoneNumber.text;
//             VerifyOtp_inputparam["otp"] = otp;
//     VerifyOtp_inputparam["country_code"] = countrycode;

//     var VerifyOtp_httpheaders = {};
//     VerifyOtp_inputparam["httpheaders"] = VerifyOtp_httpheaders;
//     var VerifyOtp_httpconfigs = {};
//     VerifyOtp_inputparam["httpconfig"] = VerifyOtp_httpconfigs;
//     Al_Wataneya_Custom_Services$VerifyOtp = 
//       mfintegrationsecureinvokerasync(VerifyOtp_inputparam, 
//                                       "Al_Wataneya_Custom_Services",
//                                       "VerifyOtp", 
//                                       function(status,response){
//       alert("Verify OTP Response : "+JSON.stringify(response));
//       if(response.opstatus ===0 && response.data.is_verified === true){
// //        self.view.flxEmail.setVisibility(true);
//    this.view.flxMobileVerifyAndOTPCode.setVisibility(false);
//         this.view.flxUserName.setVisibility(true);
//     }
      
//       } );
    var reg_id = voltmx.store.getItem("regId");

        var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/verify-otp";

        var request = new voltmx.net.HttpRequest();
        request.open("POST", url);
        
        var username = "d6bebb28b79927d1c747ea19b028ceb4";
    var password = "5da9490e70d8f3201e20c4cf203961da";
    var credentials = username + ":" + password;
    var encodedValue = this.encodeToBase64(credentials);  
    // Setting Headers
//     request.setRequestHeader("Authorization", "Basic " + encodedValue);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Accept", "application/json");
        // Handling the response
 await new Promise((resolve, reject) => {
        request.onReadyStateChange = function () {
            if (request.readyState === 4) {
                if (request.status === 200 ) {
//                     alert("✅ Success: " + request.responseText);
          var requestString = request.responseText;
           var requestJSON = JSON.parse(requestString);
// voltmx.print("requestJSON :"+requestJSON);
// alert("opstatus : "+requestJSON.opstatus);
//                     voltmx.print("✅ Success: " + request.responseText);
var opstatusRes = requestJSON.opstatus;
if(opstatusRes === 0 && requestJSON.data.is_verified === true){
  self.view.flxMobileVerifyAndOTPCode.setVisibility(false);
        self.view.flxUserName.setVisibility(true);
                }
else{
// alert("response error!!!");
}
                } else {
//                     alert("❌ Failed: " + request.status + " - " + request.responseText);
                    voltmx.print("❌ Failed: " + request.status + " - " + request.responseText);
                }
            }
        };

        // JSON Data
        var jsonData = JSON.stringify({
                    "mobile_number": self.view.tbxPhoneNumber.text,
                 "otp":otp,
              "country_code" : countrycode,
          "reg_id" : reg_id,
          "verification_type" :verification_type
        });

        // Sending Request
        request.send(jsonData);
    
 });


  },
  HeaderRegister3imgBackUsernameonTouchEndAction: function(){
    this.view.flxMobileVerifyAndOTPCode.setVisibility(false);
    this.view.flxUserName.setVisibility(true);
  },
  imgNextUserNameOnTouchEndAction: function(){
   this.view.flxPassWordAndConfirmPassWord.setVisibility(true);
  },
  imgNextPasswordOnTouchEnd: function(){
    if(this.view.tbxUserName.text !== null &&this.view.tbxPassWordName.text !==null ){
        if(this.PasswordValidate()&&this.ConfirmPassValidate()){
           this.view.flxTermsAndConditions.setVisibility(true);
    }
      else{
         this.view.flxTermsAndConditions.setVisibility(false);
      }
    }
  
   
  },
   PasswordValidate: function(){
     var self = this;
    var password = self.view.tbxPassWordName.text;
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if(!password.match(pattern)){
    self.view.lblPassWordError.isVisible = true;
      return false;
    }
    else{
    self.view.lblPassWordError.isVisible = false;
      return true;
    }
  },
  ConfirmPassValidate: function(){
    var self = this;
    var confirmPassword = self.view.tbxConfirmPassWord.text;
    var password = self.view.tbxPassWordName.text;

    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if(!confirmPassword.match(pattern)&&password !== confirmPassword){
    self.view.lblPassWordShouldMatchConfirmPassword.setVisibility(true);
      return false;
    }
    else{
 self.view.lblPassWordShouldMatchConfirmPassword.setVisibility(false);
      return true;
    }
  },
  HeaderRegister1PassConfPassimgBackonTouchEndAction: function(){
    this.view.flxPassWordAndConfirmPassWord.setVisibility(false);
    this.view.flxUserName.setVisibility(true);
  },
btnPassWordAndConfirmPasswordOnClickAction:function(){
  if(this.PasswordValidate() && this.ConfirmPassValidate()){
    this.view.flxTermsAndConditions.setVisibility(true);
    this.view.flxPassWordAndConfirmPassWord.setVisibility(false);
  }
},
  lblDownloadTermsAndConditionsOnTouchEndAction: function(){
    this.view.flxDownLoadTermsAndConditions.setVisibility(false);
    this.view.flxUploadedSignedDocs.setVisibility(true);
    this.view.flxIHaveRead.setVisibility(true);
  },
  lblUploadSignedDocsOnTouchEndAction: function(){
//     this.view.flxTermsAndConditions.bottom="55%";
    this.view.flxPopupSellerRegistrationForIndividual.setVisibility(false);
    
    this.view.flxFooterPopupSellerRegistrationForIndividual.bottom="-60%";
    
    this.view.flxPopupHowWouldYouUploadYourDoc.setVisibility(true);
    this.view.flxFooterPopupHowWouldUpload.bottom = "3%";
  },
//   BrowseDocsOnClickAction: function(){
//     this.view.flxIHaveRead.setVisibility(true);
//     this.view.btnSaveAndContinueForTermsNConditions.skin="sknbtnCstmBorder5pxCPRegffffffFont70px";
//   },
  btnSaveAndContinueForTermsNConditionsOnClickAction: async function(){
//     if(this.view.btnSaveAndContinueForTermsNConditions.skin="sknbtnCstmBorder5pxCPRegffffffFont70px"){
     //here need more conditoin for file upload and checkbox!!
    var self = this;
        var UserRegister_inputparam = {};
//     var userType = voltmx.store.getItem("userType");
      var userRole = "SELLER";
   var email= voltmx.store.getItem("email");
      var fullName = voltmx.store.getItem("fullName");
//   var country_code = voltmx.store.getItem("countryCode");
//       alert("GettedCountryCode from User Register :"+country_code);
      var reg_id =voltmx.store.getItem("regId");
//       var otp = voltmx.store.getItem("otp");
//       alert("regid from userregister");
      var user_Type = "IND";
    var country_code ="+971";
      var mobile = voltmx.store.getItem("mobile");
     var  file_system_id =98;
//     UserRegister_inputparam["serviceID"] = "Al_Wataneya_Custom_Services$UserRegister";
//     UserRegister_inputparam["user_role"] = userRole;
//     UserRegister_inputparam["full_name"] = userName;
//     UserRegister_inputparam["user_name"] = self.view.tbxUserName.text;
//     UserRegister_inputparam["password"] = self.view.tbxPassWordName.text;
//     UserRegister_inputparam["email"] = self.view.tbxEmailAddress.text;
//     UserRegister_inputparam["mobile_number"] = self.view.tbxPhoneNumber.text;
//     UserRegister_inputparam["reg_id"] = reg_id;
//     UserRegister_inputparam["user_type"] =user_Type ;
//     UserRegister_inputparam["otp"] = otp;
//     UserRegister_inputparam["country_code"] =country_code;
//     UserRegister_inputparam["file_system_id"] = file_system_id;

//     var UserRegister_httpheaders = {};
//     UserRegister_inputparam["httpheaders"] = UserRegister_httpheaders;
//     var UserRegister_httpconfigs = {};
//     UserRegister_inputparam["httpconfig"] = UserRegister_httpconfigs;
//     Al_Wataneya_Custom_Services$UserRegister = 
//       mfintegrationsecureinvokerasync(UserRegister_inputparam, 
//             "Al_Wataneya_Custom_Services", 
//             "UserRegister",
//          function(status,response){
//       alert("status for terms :"+status);
//       alert("response : "+JSON.stringify(response));
//       if(response.opstatus  === 0){
//               self.view.flxCongratulations.setVisibility(true);
//       }
//     });


     var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/create-user";

        var request = new voltmx.net.HttpRequest();
        request.open("POST", url);
        
     var username = "d6bebb28b79927d1c747ea19b028ceb4";
    var password = "5da9490e70d8f3201e20c4cf203961da";
    var credentials = username + ":" + password;
    var encodedValue = this.encodeToBase64(credentials);  
    // Setting Headers
//     request.setRequestHeader("Authorization", "Basic " + encodedValue);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Accept", "application/json");

        // Handling the response
       await new Promise((resolve, reject) => {
        request.onReadyStateChange = function () {
            if (request.readyState === 4) {
                if (request.status === 200 ) {
                    alert("✅ Success: " + request.responseText);
          var requestString = request.responseText;
           var requestJSON = JSON.parse(requestString);
voltmx.print("requestJSON :"+requestJSON);
// alert("opstatus : "+requestJSON.opstatus);
//                     voltmx.print("✅ Success: " + request.responseText);
var opstatusRes = requestJSON.opstatus;
if(opstatusRes === 0){
  self.view.flxCongratulations.setVisibility(true);
  self.view.flxTermsAndConditions.setVisibility(false);
  voltmx.store.setItem("isUserCreated", true);
                }
else{
    voltmx.store.setItem("isUserCreated", false);
alert("response error!!!");
}
                } else {
//                     alert("❌ Failed: " + request.status + " - " + request.responseText);
                    voltmx.print("❌ Failed: " + request.status + " - " + request.responseText);
                }
            }
        };

        // JSON Data
        var jsonData = JSON.stringify({
                    "user_role" : userRole,
                    "full_name" : fullName,
                     "user_name" : self.view.tbxUserName.text,
                     "password" : self.view.tbxPassWordName.text,
                    "email" : email,
                   "mobile_number": mobile,
                  "reg_id": reg_id,
                     "user_type" :user_Type ,
                   "country_code":country_code,
                    "file_system_id" : file_system_id,
        });

        // Sending Request
        request.send(jsonData);
    

       });

    
  },

  tbxUserNameOnTextChangeAction: function(){
     if(this.view.tbxUserName.text === " " ||this.view.tbxUserName.text.length<=2){
       this.view.flxUserNameFooter.setVisibility(false);
     }	
    else{
      this.view.flxUserNameFooter.setVisibility(true);
    }
  },
 
  
  
  imgNextUserNameOnTouchEndAction: async function(){
    
       var url = "https://dev-hcltx.et.ae:443/services/ms_user_reg/check-user-attribute";
var self = this;
    var verification_type ="userName";
         try {
        var request = new voltmx.net.HttpRequest();
        request.open("POST", url);

        var username = "d6bebb28b79927d1c747ea19b028ceb4";
           
        var password = "5da9490e70d8f3201e20c4cf203961da";
        var credentials = username + ":" + password;
        var encodedValue = this.encodeToBase64(credentials);

        // Setting Headers
//         request.setRequestHeader("Authorization", "Basic " + encodedValue);
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Accept", "application/json");

        // Use Promise-based onReadyStateChange to work with async/await
        await new Promise((resolve, reject) => {
            request.onReadyStateChange = function() {
                if (request.readyState === 4) {
                    if (request.status === 200 ) {
//                         alert("✅ Success from check user name: " + request.responseText);
                        var requestString = request.responseText;
                        var requestJSON = JSON.parse(requestString);
//                         alert("requestJSON check user name: " + JSON.stringify(requestJSON)); // Stringify for better logging
//                         alert("opstatus: " + requestJSON.opstatus);
//                         var is_verified = requestJSON.data.is_verified;
//                       var reg_id = requestJSON.data.reg_id;
//                         voltmx.store.setItem("regId", reg_id);
                        var opstatusRes = requestJSON.opstatus;
                        if (opstatusRes === 0  &&requestJSON.data.userExists === false && requestJSON.data.message === "User name is valid" ) {
                           self.view.flxPassWordAndConfirmPassWord.setVisibility(true);
                            self.view.flxUserName.setVisibility(false);
                        } else {
//                             alert("❌ check user name failed! Response error.");
                                                  alert("❌ Failed: " + request.status + " - " + request.responseText);

                        }
                        resolve(); // Resolve the promise on success
                    } else {
//                         alert("❌ Failed: " + request.status + " - " + request.responseText);
                        voltmx.print("❌ Failed: " + request.status + " - " + request.responseText);
                        reject(new Error("Failed to check user name.")); // Reject on failure
                    }
                }
            };

            // Sending JSON data
            var jsonData = JSON.stringify({
              "verfication_type": verification_type,
                "value":self.view.tbxUserName.text ,
             
            });

            request.send(jsonData); // Send the request
        });
    } catch (error) {
        alert("❌ Error: " + error.message);
        voltmx.print("❌ Error: " + error.message);
    }

    
  },
  
  tbxPassWordNameOnTextChangeAction: function(){
    if(this.PasswordValidate()){
             this.view.lblPassWordError.setVisibility(false);
    }
    else{
             this.view.lblPassWordError.setVisibility(true);
    }
  },
  tbxConfirmPassWordOnTextChangeAction: function(){
   if(this.ConfirmPassValidate()){
            this.view.lblPassWordShouldMatchConfirmPassword.setVisibility(false);
this.view.btnPassWordAndConfirmPassword.setVisibility(true);
   } 
    else{
            this.view.lblPassWordShouldMatchConfirmPassword.setVisibility(true);
      this.view.btnPassWordAndConfirmPassword.setVisibility(false);

    }
  },
  HeaderRegister2TermsNCondimgBackonTouchEndAction: function(){
    this.view.flxTermsAndConditions.setVisibility(false);
    this.view.flxPassWordAndConfirmPassWord.setVisibility(true);
  },
  btnUploadYourDocOnClickAction: function(){
      this.view.flxPopupSellerRegistrationForIndividual.setVisibility(true);
    this.view.flxFooterPopupSellerRegistrationForIndividual.bottom="-3%";
    
    
 this.view.flxPopupHowWouldYouUploadYourDoc.setVisibility(false);
 
 if(this.flagUploaded){
   this.view.lblUploadSignedDocs.text = "uploadedfile";
     this.view.flxCongratulations.setVisibility(true);

 }
},
  btnOkayOnClickAction: function(){
    this.view.flxCongratulations.setVisibility(false);
    var ntf = new voltmx.mvc.Navigation("frmDashBoard");
    ntf.navigate();
    
  },
  imgCloseOnTouchEndAction: function(){
    this.view.flxCongratulations.setVisibility(false);
  },

  flxUploadPopupClose: function(){
    this.view.flxPopupHowWouldYouUploadYourDoc.setVisibility(false);
    this.view.flxFooterPopupHowWouldUpload.bottom="3%";
    this.view.flxPopupSellerRegistrationForIndividual.setVisibility(true);
    this.view.flxFooterPopupSellerRegistrationForIndividual.bottom="3%";
    
    this.view.flxTermsAndConditions.setVisibility(true);
  },
    flxTakeAPhotoOnClickAction: function(){
    alert("Entered into cam Actyion!!!");
 var CamRawBytes =  this.view.cam.rawBytes;
    
    
    if(CamRawBytes){
      this.flagUploaded  = true;
        this.view.btnUploadYourDoc.setEnabled(true);
         this.view.btnUploadYourDoc.skin = "sknbtnCstmBorder5pxCPRegffffffFont70px";
    }
    
   
    },
  flxChooseFromLibraryonClickAction: function(){
//     alert("Entered into Choosefrmgallery function!!");
     voltmx.phone.openMediaGallery(function(rawbytes) {
     if (rawbytes) {
            voltmx.print("JsonRawBytes: " + JSON.stringify(rawbytes));
            // Convert to Base64 and store based on file index
            let base64Data = voltmx.convertToBase64(rawbytes);
     }  }.bind(this), {}, {
        action: voltmx.phone.ACTION_OPEN_MEDIA_GALLERY, 
        format: voltmx.phone.MEDIA_DOCUMENT_RAW,
      //         mimetype: "image/*"  // Set the mime type for images
      mimetype: "application/*" 

    }
    );
  },
  flxChooseFromFileOnClickAction: function(){
//     alert("Entered into Choose from file Acyion!!!!!!!");
     voltmx.phone.openMediaGallery(function(rawbytes) {
     if (rawbytes) {
            voltmx.print("JsonRawBytes: " + JSON.stringify(rawbytes));
            // Convert to Base64 and store based on file index
            let base64Data = voltmx.convertToBase64(rawbytes);
     }  }.bind(this), {}, {
        action: voltmx.phone.ACTION_OPEN_MEDIA_GALLERY, 
        format: voltmx.phone.MEDIA_DOCUMENT_RAW,
      //         mimetype: "image/*"  // Set the mime type for images
      mimetype: "application/pdf" 

    }
    );
  },
  chxIhaveReadTermsNCondOnSelectionAction: function(){
    if(this.view.chxIhaveReadTermsNCond.selectedKeys === null){
      this.view.btnSaveAndContinueForTermsNConditions.skin="sknbtnCPReg767676CstmBorder5pxFont70px";
    }
    else{
            this.view.btnSaveAndContinueForTermsNConditions.skin="sknbtnCstmBorder5pxCPRegffffffFont70px";

    }
  },
//  pdfCheck: function() {

//     try {

      
//       var VoltMXMain = java.import("com.konylabs.android.KonyMain"); 
//      var PdfPickerActivity = java.import("com.example.pdffileupload.TestNfi");
//      PdfPickerActivity.pdfCallback = this.pdfCallback;
//      var activityContext = VoltMXMain.getActivityContext();
//      var Intent  = java.import("android.content.Intent");
//      var intentObj =  new Intent(activityContext, PdfPickerActivity.class);
//      activityContext.startActivity(intentObj);
      
//     } catch (e) {
//         alert("Error: " + e.message);
//     }
//  },
  
//   pdfCallback: function ( data) {
//     voltmx.print( "selcted pdf callback data:::" + data) ;
//     alert("Filename selected :::"+data);
// //     this.view.Label0a7cc320a541645.text =data;
    
//   }
  
 });