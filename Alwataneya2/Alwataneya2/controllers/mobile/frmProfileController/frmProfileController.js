define({ 

 //Type your controller code here 
  
  onNavigate: function(){
    this.view.flxSellCar.onClick = this.flxSellCarOnClickAction;
    this.view.preShow = this.preshowFunctions;
    this.view.Footer2.flxSellCar.onClick = this.Footer2flxSellCarOnClickAction;
    this.view.btnCompleteKYC.onClick = this.btnCompleteKYCOnClickAction;
    this.view.flxLogout.onClick = this.flxLogoutOnClickAction;
  },
  
  
  preshowFunctions: function(){
  this.getFullName();
    this.loginConfirmation();
  },
  
  getFullName: function(){
      var username = voltmx.store.getItem("fullName");
       alert("username  : "+ username);
      this.view.lblUsernameMenubar.text = username;
  },
  loginConfirmation: function(){
     var isLogin =voltmx.store.getItem("isLogin");
//     alert("isLogin :"+isLogin);
    var isUserCreated = voltmx.store.getItem("isUserCreated");
//     alert("isLogin :"+isUserCreated);
    if(isLogin === true && isUserCreated === true){
      this.view.Footer2.imgSellCar.setVisibility(false);
      this.view.Footer2.flxProfile.setVisibility(true);
    }
    else{
      this.view.Footer2.imgSellCar.setVisibility(true);
      this.view.Footer2.flxProfile.setVisibility(false);
    }
  },
  flxSellCarOnClickAction: function(){
    var ntf = new voltmx.mvc.Navigation("frmSellCarList12");
    ntf.navigate();
  },
  Footer2flxSellCarOnClickAction: function(){
    var ntf = new voltmx.mvc.Navigation("frmDashBoard");
    ntf.navigate();
  },
  btnCompleteKYCOnClickAction: function(){
    var ntf = new voltmx.mvc.Navigation("frmUploadKYC");
    ntf.navigate();
  },
  flxLogoutOnClickAction: function(){
    voltmx.store.setItem("isLogin", false);
    var ntf = new voltmx.mvc.Navigation("frmDashBoard");
    ntf.navigate();
  }

 });