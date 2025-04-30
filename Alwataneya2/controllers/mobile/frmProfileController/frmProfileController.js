define({ 

 //Type your controller code here 
  
  onNavigate: function(){
    this.view.flxSellCar.onClick = this.flxSellCarOnClickAction;
    this.view.preShow = this.preshowFunctions;
//     this.view.Footer2.flxSellCar.onClick = this.Footer2flxSellCarOnClickAction;
   this.view.flxLogout.onClick = this.logoutSession.bind(this);
//    this.view.btnCompleteKYC.onClick = this.btnCompleteKYCOnClickAction;
    this.view.flxMyVehicles.onClick = this.navToMyVehicles.bind(this);
//    this.view.flxLogout.onClick = this.flxLogoutOnClickAction;
  },
  
  logoutSession: function(){
    voltmx.store.setItem("isLogin",false);

    voltmx.store.removeItem("refreshtoken");
    voltmx.store.removeItem("expon");
    voltmx.store.removeItem("userAccessTokenExp");


    voltmx.store.setItem("isUserCreated",false);
    voltmx.store.removeItem("accesstoken");
    voltmx.store.removeItem("userObject");
    voltmx.store.removeItem("getUserAccesstoken");
    voltmx.store.removeItem("userId");
    this.preshowFunctions();
    
      var x = new voltmx.mvc.Navigation("frmDashBoard");
      x.navigate();
//     alert("isLogin :"+isUserCreated);
  },
  
  preshowFunctions: function(){
    this.getFullName();
    this.loginConfirmation();
    this.toggleFooterIcons();
  },
  
  toggleFooterIcons: function()
  {
   this.view.Footer2.flxHL1.setVisibility(false);
  this.view.Footer2.flxHL2.setVisibility(false);
  this.view.Footer2.flxHL3.setVisibility(false);
  this.view.Footer2.flxHL4.setVisibility(false);
  this.view.Footer2.flxHL5.setVisibility(true);
    
  this.view.Footer2.imgHome.src = "homefooter.png";
  this.view.Footer2.lblHome.skin = "sknlblCPBoldCapt181818Font100";
  
  this.view.Footer2.imgMegaPhone.src = "auctionsfooter.png";
  this.view.Footer2.lblAuctions.skin = "sknlblCPBoldCapt181818Font100";
   this.view.Footer2.lblSellCar.skin = "sknlblCPBoldCapt181818Font100"; 
  
    
    var isLogin = voltmx.store.getItem("isLogin");
//     alert("isLogin :"+isLogin);
    var isUserCreated = voltmx.store.getItem("isUserCreated");
    
   if(isLogin === true &&  isUserCreated === true){
    
      this.view.Footer2.imgSellCar.setVisibility(false);
      this.view.Footer2.flxProfile.setVisibility(true);
    }
    else{
      this.view.Footer2.imgSellCar.setVisibility(true);
      this.view.Footer2.flxProfile.setVisibility(false);
    }
  },
  getFullName: function(){
     var username;
      var isLogin = voltmx.store.getItem("isLogin");
      if(isLogin){
         username = voltmx.store.getItem("username");
      }
      this.view.lblUsernameMenubar.text = username;
  },
  loginConfirmation: function(){
     var isLogin =voltmx.store.getItem("isLogin");
//     alert("isLogin :"+isLogin);
    var isUserCreated = voltmx.store.getItem("isUserCreated");
//     alert("isLogin :"+isUserCreated);
    if(isLogin === true &&  isUserCreated === true){
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
  },
  
  navToMyVehicles: function(){
    var x = new voltmx.mvc.Navigation("frmMyVehicles");
    x.navigate();
  }

 });