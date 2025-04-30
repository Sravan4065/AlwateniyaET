define({ 

 onNavigate: function()
{
  this.view.flxVehicles.onClick = this.navToVehicleAuction.bind(this);
  this.view.flxProperties.onClick = this.navToComingSoon.bind(this);
  this.view.flxLicenesPlates.onClick = this.navToComingSoon.bind(this);
  this.view.flxEquipment.onClick = this.navToComingSoon.bind(this);
  this.view.flxJeweleryWatches.onClick = this.navToComingSoon.bind(this);
  this.view.flxAirConditioner.onClick = this.navToComingSoon.bind(this);
  this.view.preShow = this.onPreShow.bind(this);
},
  
 onPreShow: function(){
   
 this.toggleFooterIcons();
 
   
 },
  
 toggleFooterIcons: function()
  {
   this.view.Footer2.flxHL1.setVisibility(false);
  this.view.Footer2.flxHL2.setVisibility(true);
  this.view.Footer2.flxHL3.setVisibility(false);
  this.view.Footer2.flxHL4.setVisibility(false);
  this.view.Footer2.flxHL5.setVisibility(false);
    
  this.view.Footer2.imgHome.src = "homefooter.png";
  this.view.Footer2.lblHome.skin = "sknlblCPBoldCapt181818Font100";
  
  this.view.Footer2.imgMegaPhone.src = "auctionsfooteractive.png";
  this.view.Footer2.lblAuctions.skin = "sknlblCPBoldDisp333333Font200";
   
   this.view.Footer2.imgMyBids.src = "mybidsfooter.png";
   this.view.Footer2.lblMyBids.skin = "sknlblCPBoldCapt181818Font100";
    
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
  
 navToVehicleAuction: function(){
   var x = new voltmx.mvc.Navigation("frmAllAuctionsList");
   x.navigate();
 },
  navToComingSoon: function(){
    var x = new voltmx.mvc.Navigation("frmCominSoon");
   x.navigate();
  }
 });