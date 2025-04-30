define({ 

 //Type your controller code here 
onNavigate: function(){
  this.view.preShow = this.onPreShow;
  this.view.flx2.onClick = this.PopupVisibilityAction;
  this.view.flxClosePopup.onClick = this.ClosePopupOnClick;
  this.view.btnSaveAndContinue.onClick = this.btnSaveAndContinueSellerOrBuyeronClickAction;
  this.view.flxFooter.onClick = this.nextOnclick;
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
  this.view.imgNextInMobileVerification.onTouchEnd = this.imgNextInMobileVerificationOnTouchEndAction ;
  this.view.HeaderRegisterForVerificationCode.imgBack.onTouchEnd = this.HeaderRegisterForVerificationCodeImgBackOnTouchEndAction;
  this.view.tbxCode1.onTextChange = this.emailtbxCode1OnTextChange;
  this.view.HeaderRegisterMobileContainer.imgBack.onTouchEnd = this.HeaderRegisterMobileContainerImgBackOnTouchEndAction;
  this.view.tbxPhoneNumber.onTextChange = this.tbxPhoneNumberonTextChangeAction;
  this.view.imgNextInOTPVerification.onTouchEnd = this.imgNextInOTPVerificationOnTouchEndAction;
  this.view.HeaderRegisterMobileOTP.imgBack.onTouchEnd = this.HeaderRegisterMobileOTPImgBackOnTouchEndAction;
  this.view.tbxOTP1.onTextChange = this.tbxOTP1OnTextChangeAction;
    this.view.tbxUserName.onTextChange = this.tbxUserNameOnTextChangeAction;
   this.view.imgNextUserName.onTouchEnd = this.imgNextUserNameOnTouchEndAction;
  //   this.view.tbxPassWordName.onTextChange = this.tbxPassWordNameOnTextChangeAction;
//   this.view.tbxConfirmPassWord.onTextChange = this.tbxConfirmPassWordOnTextChangeAction;
//   this.view.btnPassWordAndConfirmPassword.onClick = this.btnPassWordAndConfirmPasswordOnClickAction;
//     this.view.lblUploadSignedDocs.onTouchEnd = this.lblUploadSignedDocsOnTouchEndAction;
//     this.view.lblDownloadTermsAndConditions.onTouchEnd = this.lblDownloadTermsAndConditionsOnTouchEndAction;
//   this.view.btnUploadYourDoc.onClick = this.btnUploadYourDocOnClickAction;
//   this.view.flxUploadPopupClose.onClick = this.flxUploadPopupClose;
  //   this.view.flxTakeAaPhoto.onClick = this.flxTakeAPhotoOnClickAction;
//  this.view.flxChooseFromLibrary.onClick = this.flxChooseFromLibraryonClickAction;
//  this.view.flxChooseFromFile.onClick= this.flxChooseFromFileOnClickAction;
//   this.view.chxIhaveReadTermsNCond.onSelection = this.chxIhaveReadTermsNCondOnSelectionAction;
//     this.view.btnSaveAndContinueForTermsNConditions.onClick = this.btnSaveAndContinueForTermsNConditionsOnClickAction;
  //   this.view.imgClose.onTouchEnd = this.imgCloseOnTouchEndAction;
//   this.view.btnOkay=this.btnOkayOnClickAction;

},

  onPreShow: function(){
     var self = this;
    if ((this.getPreviousForm() === "frmRegister1") && this.navigationContext && this.navigationContext._meta_ && (this.navigationContext._meta_.widgetId === "flxNext") && (this.navigationContext._meta_.eventName === "onClick")) {
        self.view.lblUserName.text = this.navigationContext.txtFirstNlastName_text;
     
    }
 
   
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
imgNextInEmailonTouchEndAction: function(){
      var self = this;
 var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
 if(self.view.tbxEmailAddress.text !== null &&  this.view.tbxEmailAddress.text.match(pattern)){
  
   
        var ValidateEmail_inputparam = ValidateEmail_inputparam || {};
    
    ValidateEmail_inputparam["serviceID"] = "Al_Wataneya_Custom_Services$ValidateEmail";
    ValidateEmail_inputparam["email"] = self.view.tbxEmailAddress.text;
    var ValidateEmail_httpheaders = {};
    ValidateEmail_inputparam["httpheaders"] = ValidateEmail_httpheaders;
    var ValidateEmail_httpconfigs = {};
    ValidateEmail_inputparam["httpconfig"] = ValidateEmail_httpconfigs;
    Al_Wataneya_Custom_Services$ValidateEmail = 
      mfintegrationsecureinvokerasync(ValidateEmail_inputparam, 
   "Al_Wataneya_Custom_Services",
    "ValidateEmail", 
            function(status,response){
//       alert("Alert email  stats :"+status);
      alert("lert for rmail response : "+JSON.stringify(response));
      alert("message :"+response.data.message);
      if(response.opstatus === 0 && response.data.message === "Valid Email")
      {
        voltmx.store.setItem("email", self.view.tbxEmailAddress.text);
        var verification_type = "Email";  
        var SentEmailOtp_inputparam = SentEmailOtp_inputparam||{};
    
    SentEmailOtp_inputparam["serviceID"] = "Al_Wataneya_Custom_Services$SentEmailOtp";
    SentEmailOtp_inputparam["email"] = self.view.tbxEmailAddress.text;
    SentEmailOtp_inputparam["verification_type"] = verification_type;

    var SentEmailOtp_httpheaders = {};
    SentEmailOtp_inputparam["httpheaders"] = SentEmailOtp_httpheaders;
    var SentEmailOtp_httpconfigs = {};
    SentEmailOtp_inputparam["httpconfig"] = SentEmailOtp_httpconfigs;
    Al_Wataneya_Custom_Services$SentEmailOtp = mfintegrationsecureinvokerasync(SentEmailOtp_inputparam, "Al_Wataneya_Custom_Services", "SentEmailOtp", function(){
      alert("status in emailotp :"+status);
      alert("Response in email otp :"+JSON.stringify(response));
      if(response.opstatus === 0){
        var emailOTP = response.data.otp;
        voltmx.store.setItem("emailOTP", "emailOTP");
        var reg_id = response.data.reg_id;
        voltmx.store.setItem("regId"+reg_id);
        var email = response.data.email;
        voltmx.store.setItem("email", email);
        var message = response.message;
        alert("Message : "+message); 
         self.view.flxEmailContainer.setVisibility(false);
         self.view.lblEmailRequired.setVisibility(false);
         self.view.flxEmailVerificationCode.setVisibility(true);
      }
      else{
        alert("Email otp not ");
      }
        
    });

     
      }
      else{
        alert("Error: "+response.data.message);
      }
    });

 }
      else{
          self.view.lblEmailRequired.setVisibility(true);
          self.view.flxEmail.setVisibility(true); 
        this.view.flxEmailVerificationCode.setVisibility(false);
        }

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
    alert("email Otp: code1 ="+code1 +"code2 ="+code2+"code3 ="+code3+"code4 ="+code4+"code5 ="+code5+"code6 ="+code6);
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
        this.view.flxMobileContainer.setVisibility(true);
        this.view.lblSignedEmail.text = email;
        this.view.flxEmailVerificationCode.setVisibility(false);
      }
    else{
       this.view.flxMobileContainer.setVisibility(false);
        this.view.flxEmailVerificationCode.setVisibility(true);
    }
  },
  imgNextInMobileVerificationOnTouchEndAction: function(){
    if(this.view.tbxPhoneNumber.text !== null ){
       var self = this;
var countrycode = "+971";
      var verification_type = "Mobile";
      var reg_id = voltmx.store.getItem("regId");
      
   
        var SendOtp_inputparam = SendOtp_inputparam||{};
    
    SendOtp_inputparam["serviceID"] = "Al_Wataneya_Custom_Services$SendOtp";
    SendOtp_inputparam["mobile_number"] = self.view.tbxPhoneNumber.text;
        SendOtp_inputparam["country_code"] =countrycode ;
              SendOtp_inputparam["email"] ="" ;
        SendOtp_inputparam["reg_id"] =reg_id ;
        SendOtp_inputparam["verification_type"] =verification_type ;


    var SendOtp_httpheaders = {};
    SendOtp_inputparam["httpheaders"] = SendOtp_httpheaders;
    var SendOtp_httpconfigs = {};
    SendOtp_inputparam["httpconfig"] = SendOtp_httpconfigs;
    Al_Wataneya_Custom_Services$SendOtp = 
      mfintegrationsecureinvokerasync(SendOtp_inputparam, 
                 "Al_Wataneya_Custom_Services", 
                 "SendOtp", 
               function(status, response){
      alert("status : "+status);
      alert("response for sendotp : "+JSON.stringify(response));
      var countryCode = response.data.country_code;
      var otp = response.data.otp;
      voltmx.store.setItem("otp", otp);
      alert("Otp :"+otp);
//       var reg_id= response.data.reg_id;
      alert("reg id from send  otp");
      var email = response.data.email;
      alert("email from send otp response ;"+email);
      voltmx.store.setItem("email", email);
      
      voltmx.store.setItem("countryCode", countryCode);
      var GettedcountryCode = voltmx.store.getItem("countryCode");
//       alert("Getted Country Code :"+GettedcountryCode);
//       alert("getted reg id : "+gettedregId);//null
      alert("response.opstatus :"+response.opstatus);
      if(response.opstatus === 0){
        alert("reached condn of sendOtp");
      var pattern = /^\d{10}$/; // Regular expression for matching a 10-digit phone number.
//           self.view.flxOTPMain.setVisibility(true);
//       self.view.tbxOTP.placeholder ="OTP sent to +97 "+self.view.tbxPhoneNumber.text;
//       this.view.btnVerifyMobileNumber.skin = "sknbtnCstmBorder5pxCPRegffffffFont69px"
        self.view.flxMobileVerifyAndOTPCode.setVisibility(true);
self.view.lblMobileRequired.setVisibility(false);
     this.view.flxMobileContainer.setVisibility(false);
      }
      else{
        alert("Mobile num not verified!!!");
      }
    });
}
       else{
//       alert("Mobile num should not be empty!!");
     self.view.lblMobileRequired.setVisibility(true);
             self.view.flxMobileVerifyAndOTPCode.setVisibility(false);
            this.view.flxMobileContainer.setVisibility(true);
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
    var code5 = otp.slice(4, 5);
    var code6 = otp.slice(5, 6);
    alert("email Otp: code1 ="+code1 +"code2 ="+code2+"code3 ="+code3+"code4 ="+code4+"code5 ="+code5+"code6 ="+code6);
     // Assign values to textboxes
    this.view.tbxOTP1.text = code1;
    this.view.tbxOTP2.text = code2;
    this.view.tbxOTP3.text = code3;
    this.view.tbxOTP4.text = code4;
    this.view.tbxOTP5.text = code5;
    this.view.tbxOTP6.text = code6;
    if(this.view.tbxOTP1.text !==null&&this.view.tbxOTP2.text !==null&&this.view.tbxotp3.text !==null&&this.view.tbxOTP4.text !==null&&this.view.tbxOTP5.text !==null&&this.view.tbxOTP6.text !==null)
      {
   
      }
    else{
   
    }
  },
  HeaderRegisterMobileOTPImgBackOnTouchEndAction: function(){
    this.view.flxMobileContainer.setVisibility(true);
    this.view.flxMobileVerifyAndOTPCode.setVisibility(false);
  },
  imgNextInOTPVerificationOnTouchEndAction: function(){
      var self = this;
        var VerifyOtp_inputparam = {};
        var otp = voltmx.store.getItem("otp");
        var countrycode = "+91";
    
    VerifyOtp_inputparam["serviceID"] = "Al_Wataneya_Custom_Services$VerifyOtp";
    VerifyOtp_inputparam["mobile_number"] = self.view.tbxPhoneNumber.text;
            VerifyOtp_inputparam["otp"] = otp;
    VerifyOtp_inputparam["country_code"] = countrycode;

    var VerifyOtp_httpheaders = {};
    VerifyOtp_inputparam["httpheaders"] = VerifyOtp_httpheaders;
    var VerifyOtp_httpconfigs = {};
    VerifyOtp_inputparam["httpconfig"] = VerifyOtp_httpconfigs;
    Al_Wataneya_Custom_Services$VerifyOtp = 
      mfintegrationsecureinvokerasync(VerifyOtp_inputparam, 
                                      "Al_Wataneya_Custom_Services",
                                      "VerifyOtp", 
                                      function(status,response){
      alert("Verify OTP Response : "+JSON.stringify(response));
      if(response.opstatus ===0 && response.data.is_verified === true){
//        self.view.flxEmail.setVisibility(true);
   this.view.flxMobileVerifyAndOTPCode.setVisibility(false);
        this.view.flxUserName.setVisibility(true);
    }
      
      } );
  },
  imgNextUserNameOnTouchEndAction: function(){
   this.view.flxPassWordAndConfirmPassWord.setVisibility(true);
  },
  imgNextPasswordOnTouchEnd: function(){
    if(this.view.tbxUserName.text !== null &&this.view.tbxPassWordName.text !==null ){
        if(this.PassPasswordValidate()&&this.ConfirmConfirmPassValidate()){
           this.view.flxTermsAndConditions.setVisibility(true);
    }
      else{
         this.view.flxTermsAndConditions.setVisibility(false);
      }
    }
  
   
  },
   PasswordValidate: function(){
    var password = this.view.tbxPassWordName.text;
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if(!password.match(pattern)){
    this.view.lblPassWordError.isVisible = true;
      return false;
    }
    else{
    this.view.lblPassWordError.isVisible = false;
      return true;
    }
  },
  ConfirmPassValidate: function(){
    var confirmPassword = this.view.tbxConfirmPassWord.text;
    var password = this.view.tbxPassWordName.text;

    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if(!confirmPassword.match(pattern)&&password !== confirmPassword){
    this.view.lblConfirmPassWordError.isVisible = true;
      return false;
    }
    else{
  this.view.lblConfirmPassWordError.isVisible = false;
      return true;
    }
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
  btnSaveAndContinueForTermsNConditionsOnClickAction: function(){
//     if(this.view.btnSaveAndContinueForTermsNConditions.skin="sknbtnCstmBorder5pxCPRegffffffFont70px"){
     //here need more conditoin for file upload and checkbox!!
    var self = this;
        var UserRegister_inputparam = {};
//     var userType = voltmx.store.getItem("userType");
      var userRole = "SELLER"
      var userName = voltmx.store.getItem("userName");
  var country_code = voltmx.store.getItem("countryCode");
//       alert("GettedCountryCode from User Register :"+country_code);
      var reg_id =voltmx.store.getItem("regId");
      var otp = voltmx.store.getItem("otp");
//       alert("regid from userregister");
      var user_Type = "INDI";
      
     var  file_system_id =8;
    UserRegister_inputparam["serviceID"] = "Al_Wataneya_Custom_Services$UserRegister";
    UserRegister_inputparam["user_role"] = userRole;
    UserRegister_inputparam["full_name"] = userName;
    UserRegister_inputparam["user_name"] = self.view.tbxUserName.text;
    UserRegister_inputparam["password"] = self.view.tbxPassWordName.text;
    UserRegister_inputparam["email"] = self.view.tbxEmailAddress.text;
    UserRegister_inputparam["mobile_number"] = self.view.tbxPhoneNumber.text;
    UserRegister_inputparam["reg_id"] = reg_id;
    UserRegister_inputparam["user_type"] =user_Type ;
    UserRegister_inputparam["otp"] = otp;
    UserRegister_inputparam["country_code"] =country_code;
    UserRegister_inputparam["file_system_id"] = file_system_id;

    var UserRegister_httpheaders = {};
    UserRegister_inputparam["httpheaders"] = UserRegister_httpheaders;
    var UserRegister_httpconfigs = {};
    UserRegister_inputparam["httpconfig"] = UserRegister_httpconfigs;
    Al_Wataneya_Custom_Services$UserRegister = 
      mfintegrationsecureinvokerasync(UserRegister_inputparam, 
            "Al_Wataneya_Custom_Services", 
            "UserRegister",
         function(status,response){
      alert("status for terms :"+status);
      alert("response : "+JSON.stringify(response));
      if(response.opstatus  === 0){
              self.view.flxCongratulations.setVisibility(true);
      }
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
  }
 });